var UNINSTALL_URL = "http://c306.net/autoConvert/whygo.html?utm_source=autoconvert%20for%20chrome&utm_medium=referral&utm_content=uninstall&utm_campaign=ac_ext";
var showUpgradeNotification = "no"; //"no" for silent upgrade, "part" for notification, or "yes" for non-silent upgrade.
var upgradeNotification = {
  'show': false
};
var s; //chrome.storage object
var lsVars = {};
var notification;
var currencyUpdateTimer;
var CURRENCY_UPDATE_INTERVAL = 6*60*60*1000;

var strings = {
  installNotice: {
    title: chrome.i18n.getMessage("installNotice_title"),
    text: chrome.i18n.getMessage("installNotice_text"),
    track: chrome.i18n.getMessage("installNotice_track"),
    url: chrome.i18n.getMessage("installNotice_url"),
  },
  upgradeNotice: {
    title: chrome.i18n.getMessage("upgradeNotice_title"),
    text: chrome.i18n.getMessage("upgradeNotice_text"),
    track: chrome.i18n.getMessage("upgradeNotice_track"),
    url: chrome.i18n.getMessage("upgradeNotice_url"),
  },
};

localStorage["syncSettings"] = localStorage["syncSettings"] || false;

//Add analytics to background page and browser button 
var service = analytics.getService("autoConvert");

// Disable GA if using local extension (Extra conditions to prevent errors when page opened directly outside of chromeApp for dev)
service.getConfig().addCallback(function(config){
  if(chrome && chrome.runtime && chrome.runtime.id && chrome.runtime.id == localExtId){
    config.setTrackingPermitted(false);
  } else {
    config.setTrackingPermitted(true);
  }
});
var tracker = service.getTracker(GA_CODE);

if(localStorage["syncSettings"] == "true"){
  s = chrome.storage.sync;
} else {
  s = chrome.storage.local;
}
s.get(function(ls){
  s.clear(function(){
    var tempUs = localStorage["cius"] ? localStorage["cius"].split("=") : [];
    
    var unitHighlight, currencyHighlight;
    
    if(ls["unitHighlight"] !== undefined){
      unitHighlight = ls["unitHighlight"];
    } else {
      if(ls["highlight"] !== undefined){
        unitHighlight = ls["highlight"] === true ? HIGHLIGHT_ROUND : HIGHLIGHT_NONE;
      } else {
        unitHighlight = localStorage["highlight"] === "true" ? HIGHLIGHT_ROUND : HIGHLIGHT_NONE;
        // default value for new installations is HIGHLIGHT_NONE
      }
    }

    if(ls["currencyHighlight"] === HIGHLIGHT_NONE || ls["currencyHighlight"] === HIGHLIGHT_ROUND || ls["currencyHighlight"] === HIGHLIGHT_DASHED){
      currencyHighlight = ls["currencyHighlight"];
    } else {
      if(ls["currencyHighlight"] !== undefined){
        currencyHighlight = ls["currencyHighlight"];
      } else {
        currencyHighlight = localStorage["cicurrencyHighlight"];
      }
      switch(currencyHighlight){
        case "dashed":
          currencyHighlight = HIGHLIGHT_DASHED;
          break;
        case "acrounded":
          currencyHighlight = HIGHLIGHT_ROUND;
          break;
        case "currHighlightNone":
          currencyHighlight = HIGHLIGHT_NONE;
          break;
        default:
          currencyHighlight = HIGHLIGHT_DASHED;
          // default value for new installations is HIGHLIGHT_DASHED
      }
    }
    
    s.set({
      "unitColour" : ls["colour"] || ls["unitColour"] || localStorage["cicolour"] || "defaultColour",
      "unitHighlight" : unitHighlight, // HIGHLIGHT_NONE, HIGHLIGHT_ROUND or HIGHLIGHT_DASHED
      "us" : ls["us"] || {
        "distance": tempUs[0] || "none",
        "area": tempUs[1] || "none",
        "volume": tempUs[2] || "none",
        "weight": tempUs[3] || "none",
        "energy": tempUs[4] || "none",
        "power": tempUs[5] || "none",
        "temperature": tempUs[6] || "none",
        "torque": tempUs[7] || "none",
      }, // default none
      "disableIn" : (ls["disableIn"] !== undefined ? ls["disableIn"] : (localStorage["disableIn"] ? JSON.parse(localStorage["disableIn"]) : true)),  //default true
      "disableTo" : (ls["disableTo"] !== undefined ? ls["disableTo"] : (localStorage["disableTo"] ? JSON.parse(localStorage["disableTo"]) : true)),  //default true
      "disableQuotes" : (ls["disableQuotes"] !== undefined ? ls["disableQuotes"] : (localStorage["disableQuotes"] ? JSON.parse(localStorage["disableQuotes"]) : true)),  //default true
      "lbSt" : (ls["lbSt"] !== undefined ? ls["lbSt"] : (localStorage["lbSt"] ? JSON.parse(localStorage["lbSt"]) : true)),  //default true
      "showTooltip" : (ls["showTooltip"] !== undefined ? ls["showTooltip"] : (localStorage["showTooltip"] ? JSON.parse(localStorage["showTooltip"]) : false)),  //default false
      "showUnitRate" : (ls["showUnitRate"] !== undefined ? ls["showUnitRate"] : (localStorage["showUnitRate"] ? JSON.parse(localStorage["showUnitRate"]) : true)),  //default true
      "showContextMenu" : (ls["showContextMenu"] !== undefined ? ls["showContextMenu"] : (localStorage["showContextMenu"] ? JSON.parse(localStorage["showContextMenu"]) : true)), //default true
      "noReplace" : (ls["noReplace"] !== undefined ? ls["noReplace"] : (localStorage["noReplace"] ? JSON.parse(localStorage["noReplace"]) : true)), //default false
      "currency" : ls["currency"] || localStorage["cicurrency"] || "gbp",
      "currencyColour" : ls["currencyColour"] || "lightGray",
      "currencyReplace" : (ls["currencyReplace"] !== undefined ? ls["currencyReplace"] : (localStorage["cicurrencyReplace"] ? JSON.parse(localStorage["cicurrencyReplace"]) : false)), // "true" to replace, "false" to not replace
      "currencyStyle" : ls["currencyStyle"] || localStorage["cicurrencyStyle"] || 1, // 1 for "text" or 2 for "symbol"
      "currencyHighlight" : currencyHighlight, // HIGHLIGHT_NONE, HIGHLIGHT_ROUND or HIGHLIGHT_DASHED
      "topCurrencies" : (ls["topCurrencies"] !== undefined ? ls["topCurrencies"] : (localStorage["topCurrencies"] ? JSON.parse(localStorage["topCurrencies"]) : [
                          "gbp",
                          "usd",
                          "eur",
                          "jpy",
                          "inr",
                          "cny",
                          "vnd",
                          "aud",
                          "idr",
                          "brl",
                        ])),
      "tz" : (ls["tz"] !== undefined ? ls["tz"] : "none"), // initialise with no time-zone, hence conversion off
      "tzColour" : ls["tzColour"] || "specialColour",
      "tzHighlight" : (ls["tzHighlight"] !== undefined && ls["tzHighlight"] !== "tzHighlightNone" ? ls["tzHighlight"] : HIGHLIGHT_NONE),  // HIGHLIGHT_NONE, HIGHLIGHT_ROUND or HIGHLIGHT_DASHED
      "topTzs" : (ls["topTzs"] !== undefined ? ls["topTzs"] : [
                  "bst",  // british time
                  "cet",  // central europe time
                  "pst",  // pacific time (US)
                  "et",  // eastern time (US)
                  "mt",  // mountain time (US)
                  "cst", // central time (US)
                  "ist", // india time
                  "jst",  // japan time
                  "ct",  // china time
                  "gmt",  // utc/uct/gmt
                 ]),
    }, function(){
      localStorage["state"] = localStorage["state"] || localStorage["cistate"] || "on";
      localStorage["homecurrencystate"] = localStorage["homecurrencystate"] || "na";
      localStorage["optionsOpenType"] = "none";
      localStorage["version"] = localStorage["version"] || localStorage["civersion"] || "";
      localStorage["regex"] = localStorage["regex"] || localStorage["ciRegex"] || ""; // filled in call to updateRegex below
      localStorage["currRegex"] = localStorage["currRegex"] || localStorage["ciCurrRegex"] || "";  // filled in call to updateRegex below
      localStorage["tzRegex"] = localStorage["tzRegex"] || "";  // filled in call to updateRegex below
      localStorage["whitelistRegex"] = localStorage["whitelistRegex"] || "";  // filled in call to updateRegex below
      localStorage["whitelist"] = localStorage["whitelist"] || (ls["whitelist"] !== undefined ? JSON.stringify(ls["whitelist"]) : JSON.stringify([
        "docs.google.com",
        "https://",
        "wp-admin",
        "netflix.com",
        "amazon."
      ]));
      
      if(localStorage["cius"] !== undefined){
        localStorage.removeItem("cius");
        localStorage.removeItem("cistate");
        localStorage.removeItem("civersion");
        localStorage.removeItem("ciRegex");
        localStorage.removeItem("ciCurrRegex");
        localStorage.removeItem("cicolour");
        localStorage.removeItem("cihighlight");
        localStorage.removeItem("disableIn");
        localStorage.removeItem("disableTo");
        localStorage.removeItem("disableQuotes");
        localStorage.removeItem("lbSt");
        localStorage.removeItem("showTooltip");
        localStorage.removeItem("showUnitRate");
        localStorage.removeItem("showContextMenu");
        localStorage.removeItem("noReplace");
        localStorage.removeItem("cicurrency");
        localStorage.removeItem("cicurrencystate");
        localStorage.removeItem("cicurrencyReplace");
        localStorage.removeItem("cicurrencyStyle");
        localStorage.removeItem("cicurrencyHighlight");
        localStorage.removeItem("topCurrencies");
        // localStorage.removeItem("whitelist");
        localStorage.removeItem("ciSilentUpgrade");
        localStorage.removeItem("showSurvey");
      }

      
      s.get(function(ls){
        // get all variables in storage before doing anything
        lsVars = ls;
        chrome.storage.onChanged.addListener(updateLocalVariables);
        
        //Setup Browser button
        chrome.browserAction.setTitle({"title": coreStrings.browserBtn[localStorage["state"]+"Title"]});
        chrome.browserAction.setBadgeText({"text": coreStrings.browserBtn[localStorage["state"]+"Badge"]});
        chrome.browserAction.setBadgeBackgroundColor({"color": coreStrings.browserBtn[localStorage["state"]+"Color"]});
        if(localStorage["state"] == "off"){
          chrome.browserAction.setTitle({title: coreStrings.browserBtn.offTitle});
          chrome.browserAction.setBadgeText({"text": coreStrings.browserBtn.offBadge});
          chrome.browserAction.setBadgeBackgroundColor({color: coreStrings.browserBtn.offColor});
        } else {
          chrome.browserAction.setTitle({title: coreStrings.browserBtn.onTitle});
          chrome.browserAction.setBadgeText({"text": coreStrings.browserBtn.onBadge});
          chrome.browserAction.setBadgeBackgroundColor({color: coreStrings.browserBtn.onColor});
        }
        setBrowserIcon();
        setContextMenu();
        
        if(upgradeNotification.status === "new"){
          var locale = navigator.language.toLowerCase();
          setCurr(locale);
          
          //Set initial unit system based on locale
          var us = {
            "distance": "metric",
            "area": "metric",
            "volume": "metric",
            "weight": "metric",
            "energy": "metric",
            "power": "metric",
            "temperature": "metric",
            "torque": "metric",
          };
          if(locale.match(/^(en-us|en-gb)$/) != null){
            us = {
              "distance": "imperial",
              "area": "imperial",
              "volume": "imperial",
              "weight": "imperial",
              "energy": "imperial",
              "power": "imperial",
              "temperature": "imperial",
              "torque": "imperial",
            };
          }
          s.set({"us": us}, function(){
            lsVars["us"] = us;
            localStorage["regex"] = unitRegex();
          });
          
          // Set conversion to Stone 'ON' if locale is GB.
          if(locale === "en-gb"){
            s.set({"lbSt": false}, function(){
              lsVars["lbSt"] = false;
            });
          }

          for(var key in currencyBase){
            exchangeRates.getRate(currencyBase[key][0]+key);
          }

          // seedContentScript();
          // openPage("options","new");
          openPage(upgradeNotification.page, upgradeNotification.status);
          
          trackButton("initLocale", locale);
        }
        
        if(upgradeNotification.show) openPage(upgradeNotification.page, upgradeNotification.status);


        updateRegex();
        
        // Download base set of currencies
        updateCurrencyRates();
        currencyUpdateTimer = setInterval(updateCurrencyRates, CURRENCY_UPDATE_INTERVAL);
        
      });
    });
  });
});


//Code to check for new / updated installations and take relevant actions
chrome.runtime.onInstalled.addListener(function(details){
  if(details.reason === "chrome_update") return;
  
  var ver = chrome.runtime.getManifest().version;
  
  if(details.reason == "install"){
    // Set UnInstallURL
    if(typeof(chrome.runtime.setUninstallURL) === "function"){
      chrome.runtime.setUninstallURL(UNINSTALL_URL);
      trackButton("unInstallURL", "Success");
    } else {
      trackButton("unInstallURL", "NA");
    }
    
    //Show New Install Notification
    showNotification({
      title: strings.installNotice.title,
      message: strings.installNotice.text,
      contextMessage: "Version " + ver + " installed."
    },{
      track: strings.installNotice.track,
      url: strings.installNotice.url,
    });

    //Open Options page on first load
    upgradeNotification = {
      show: true,
      page: "options",
      status: "new"
    };
    // openPage("options","new");
  }

  if(details.reason == "update"){
    //Extension Updated
    
    //Part-silent or non-silent upgrade
    if(showUpgradeNotification !== "no" && ver !== details.previousVersion){
      
      //Show Upgrade Notification
      strings.upgradeNotice.url += "&v=" + localStorage["version"];
      showNotification({
        title: strings.upgradeNotice.title,
        message: strings.upgradeNotice.text,
        contextMessage: "Upgraded from v" + details.previousVersion + " to v" + ver
      },{
        track: strings.upgradeNotice.track,
        url: strings.upgradeNotice.url,
      });
      
      //Open options page if not a silent upgrade. Notification disappears after 5 secs in this case
      if(showUpgradeNotification === "yes"){
        upgradeNotification = {
          show: true,
          page: "options",
          status: "updated"
        };
        // openPage("options","updated");
      }
      showUpgradeNotification = "no";
    }
  }

  //Update version in LS
  localStorage["version"] = ver;
  
  //Log versions to Google Analytics
  trackButton("appVersion", ver);
  trackButton("chromeVersion", getChromeVersion());
  trackButton("appUpdate", details.reason);
});

  
//Setup Browser button click handler
chrome.browserAction.onClicked.addListener(function(tab) {
  var oldPluginState = localStorage["state"];
  var newPluginState = oldPluginState === "off" ? "on" : "off";
  
  //changeState & badge
  if(newPluginState == "on"){
    chrome.browserAction.setTitle({title: coreStrings.browserBtn.onTitle});
    chrome.browserAction.setBadgeText({"text": coreStrings.browserBtn.onBadge});
    chrome.browserAction.setBadgeBackgroundColor({color: coreStrings.browserBtn.onColor});
  } else {
    chrome.browserAction.setTitle({title: coreStrings.browserBtn.offTitle});
    chrome.browserAction.setBadgeText({"text": coreStrings.browserBtn.offBadge});
    chrome.browserAction.setBadgeBackgroundColor({color: coreStrings.browserBtn.offColor});
  }
  
  localStorage["state"] = newPluginState;
  trackButton("Browser Button", newPluginState);
  // propagateSettings();
  propagateSetting({
    "type": "pluginState",
    "value": localStorage["state"]
  });
});


chrome.runtime.onSuspend.addListener(
  function(){
    propagateSetting({
      "type": "pluginState",
      "value": "off"
    });
  }
);


chrome.runtime.onSuspendCanceled.addListener(
  function(){
    propagateSetting({
      "type": "pluginState",
      "value": localStorage["state"]
    });
  }
);


//Respond to new tabs by sending current extension settings
chrome.extension.onMessage.addListener(
  function(req, sender, sendResponse){
    var tabPluginState = localStorage["state"];
    // Check if sent url (req.url) should be whitelisted. If so, set the pageaction to "whitelisted", and send whitelisted = true in response (could also use pluginState = off)
    var whitelisted = checkWhitelist(sender.tab.url);
    if(whitelisted){
      tabPluginState = "off";
      chrome.browserAction.setTitle({"title": coreStrings.browserBtn.whitelistTitle, "tabId": sender.tab.id});
      chrome.browserAction.setIcon({
        "path": {
          "19": "img/icon-whitelist-19.png",
          "38": "img/icon-whitelist-38.png"
        },
        "tabId": sender.tab.id
      });
    }
    
    chrome.tabs.insertCSS(sender.tab.id, {
      file: "css/ac.css",
      allFrames: true,
      runAt: "document_end"
    });

    sendResponse({
      "pluginState": tabPluginState,
      "whitelisted": whitelisted,
      "unitSystem": localStorage["regex"],
      "currencyRegex": localStorage["currRegex"],
      "tzRegex": localStorage["tzRegex"],
      "whitelist": localStorage["whitelistRegex"],
      "syncSettings": JSON.parse(localStorage["syncSettings"]),
      "currencyRates": exchangeRates.currencyRateSet(),
    });
  }
);


//FUNCION: Show desktop notification with click through URLs and event tracking 
function showNotification(msg){
  if(arguments && arguments[1]){
    notification = arguments[1];
  }
  
  msg.type = "basic";
  msg.iconUrl = chrome.runtime.getURL("/img/icon128-noborder.png");

  chrome.notifications.create("", msg, function(id){
    // do nothing;
  });
  
  chrome.notifications.onClicked.addListener(function(id){
    trackButton("website_click", notification.track, "From Notification");
    window.open(notification.url, "_blank");
  });
}


//Hide notification window
function cancelNotification(){
  notification.cancel();
}


//Open options page 
function openPage(pageName, updateType){
  localStorage["optionsOpenType"] = updateType;
  window.open("options.html", "_newtab");
}


//Get Chrome version from userAgent
function getChromeVersion(){
  var uaStr = window.navigator.userAgent;
  var uaStrs = uaStr.match(/(Chrome\/\S+)\s/i);
  if(uaStrs[0] != undefined){
    return uaStrs[0];
  }
  return "none found";
}


//Update units & currency regex based on new cius string
function updateRegex(){
  localStorage["regex"] = unitRegex();
  localStorage["currRegex"] = currencyRegex();
  localStorage["tzRegex"] = tzRegex();
  localStorage["whitelistRegex"] = makeWhitelistRegex();
  propagateSettings();
}


function setCurr(locale){
  var currency = "usd";
  switch(locale){
    case "en-us":
      currency = "usd";
      break;
    case "vi":
      currency = "vnd";
      break;
    case "pt-br":
      currency = "brl";
      break;
    case "de":
    case "it":
    case "fr":
    case "es":
      currency = "eur";
      break;
    case "id":
      currency = "idr";
      break;
    case "zh":
      currency = "cny";
      break;
    case "en-in":
      currency = "inr";
      break;
    case "en-au":
      currency = "aud";
      break;
    case "en-ca":
      currency = "cad";
      break;
    case "en-nz":
      currency = "nzd";
      break;
    case "en-gb":
      currency = "gbp";
      break;
    case "ja":
      currency = "jpy";
      break;
  }
  s.set({"currency": currency}, function(){
    lsVars["currency"] = currency;
    localStorage["currRegex"] = currencyRegex();
  });
}


var setContextMenu = function(){
  s.get("showContextMenu", function(ls){
    lsVars["showContextMenu"] = ls["showContextMenu"];

    if(lsVars["showContextMenu"]){
      chrome.contextMenus.create({
        type: "normal",
        id: "autoConvertRightClick",
        title: "Convert '%s' using autoConvert",
        contexts: ["selection"],
      }, function(){
        if(chrome.runtime.lastError){
          console.log("if not created, it should show here: " + chrome.runtime.lastError.message);
        }
        chrome.contextMenus.onClicked.addListener(convertFromContextMenu);
      });
    } else {
      chrome.contextMenus.remove("autoConvertRightClick",function(){
        chrome.contextMenus.onClicked.removeListener(convertFromContextMenu);
      });
    }
  });
};

function convertFromContextMenu(info, tab){
  // Send command to tab with 
  chrome.tabs.sendMessage(tab.id, {
    "type": "autoConvertRightClick",
  });
}


function updateLocalVariables(changes,areaName){
  s.get(function(ls){
    lsVars = ls;
  });
}

window.addEventListener("storage", function(e){
  if(e.key === "syncSettings"){
    s = e.newValue === "true" ? chrome.storage.sync : chrome.storage.local;
  }
}, false);


/**
 * seedContentScript
 * Insert content script into all present tabs on extension install
 */
function seedContentScript(){
  chrome.windows.getAll({"populate": true}, function(winds){
    for(var i = 0; i<winds.length;i++){
      for(var j = 0; j<winds[i]["tabs"].length;j++){
        insertScript(winds[i]["tabs"][j].id);
      }
    }
  });
}

function insertScript(id){
  chrome.tabs.executeScript(id, {
    file: "js/ext/jquery.min.js",
    allFrames: true,
  }, function(){
    if(chrome.runtime.lastError) console.log(chrome.runtime.lastError.message);
    chrome.tabs.executeScript(id, {
      file: "js/ext/jquery-migrate-1.2.1.js",
      allFrames: true,
    }, function(){
      if(chrome.runtime.lastError) console.log(chrome.runtime.lastError.message);
      chrome.tabs.executeScript(id, {
        file: "js/core.js",
        allFrames: true,
      }, function(){
        if(chrome.runtime.lastError) console.log(chrome.runtime.lastError.message);
        chrome.tabs.executeScript(id, {
          file: "js/ac.js",
          allFrames: true,
        }, function(){
          if(chrome.runtime.lastError) console.log(chrome.runtime.lastError.message);
        });
      });
    });
  });
}


function updateCurrencyRates(){
  exchangeRates.setRate("usdusd", 1);
  exchangeRates.setRate("nonenone", 1);
  
  for(var key in currencyBase){
    if(key.match(/usd|none/i)) continue;
    exchangeRates.fetchLiveRate(currencyBase[key][0]+key);
  }
}