var UNIT_RATE_DECIMAL = 2;
var SHOW_TOOLTIP_CLASS = "showTooltip";
var regexObj, currencyRegexObject;
var s; //chrome.storage object
var syncSettings;
var whitelisted = false;
var whitelist = "";
var homeCurrencyBase;
var lsVars = {};
var pluginState = "off";
var pageDollar = "usd";

var isImp = false;

$(document).ready(function(){
  
  var isInstalledNode = document.createElement('span');
  isInstalledNode.id = 'AutoConvertInstalled';
  document.body.appendChild(isInstalledNode);
  
  chrome.extension.sendMessage({query: "settings"}, function(response) {
    currencyRates = response.currencyRates;
    unitSystem = response.unitSystem;
    whitelist = response.whitelist;
    whitelisted = response.whitelisted;
    pluginState = response.pluginState;
    syncSettings = response.syncSettings;

    if(syncSettings){
      s = chrome.storage.sync;
    } else {
      s = chrome.storage.local;
    }
    
    s.get(function(ls){
      lsVars = ls;

      chrome.storage.onChanged.addListener(storageChanged);

      homeCurrencyBase = currencyBase[lsVars["currency"]][0];
      
      regexObj = RegExp(unitSystem, 'i');
      currencyRegexObject = RegExp(response.currencyRegex, 'i');
      isImp = lsVars["us"]["distance"] === "metric";
      
      // console.log("on load");
      if(whitelisted || pluginState == "off"){
        callReplacementFunction("original");
      } else {
        callReplacementFunction(unitSystem);
      }
      $("span.convertIt").addClass(lsVars["unitColour"]+" "+lsVars["unitHighlight"]);
    });
  });
    
  chrome.extension.onMessage.addListener(function(req, sender, sendResponse){
    // Handle message based changes to settings that are stored in localStorage, not chrome.storage
    s.get(function(ls){
      lsVars = ls;

      if(req.type == 'all'){
      //   console.log("a regex changed");
      //   callReplacementFunction("original");
        
      //   currencyRates = req.currencyRates;
      //   unitSystem = req.unitSystem;
      //   whitelist = req.whitelist;
      //   whitelisted = req.whitelisted;
      //   homeCurrencyBase = currencyBase[lsVars["currency"]][0];

      //   regexObj = RegExp(unitSystem, 'i');
      //   currencyRegexObject = RegExp(req.currencyRegex, 'i');
      //   isImp = lsVars["us"]["distance"] === "metric";
        
      //   if(pluginState == "on" && !whitelisted){
      //     callReplacementFunction(unitSystem);
      //   }
      } else {
        switch(req.type){
          
          case 'unitSystem':
            // console.log("unitSystem changed");
            callReplacementFunction("original");
            regexObj = RegExp(req["value"], 'i');
            isImp = lsVars["us"]["distance"] === "metric";
            if(pluginState === "on" && !whitelisted){
              callReplacementFunction(unitSystem);
            }
            break;
            
          case 'currency':
            // console.log("currency changed");
            s.get("currency", function(ls){
              lsVars["currency"] = ls["currency"];
              callReplacementFunction("original");
              homeCurrencyBase = currencyBase[lsVars["currency"]][0];
              currencyRegexObject = RegExp(req["value"], 'i');
              if(pluginState === "on" && !whitelisted){
                callReplacementFunction(unitSystem);
              }
            });
            break;
            
          case 'tz':
            // console.log("currency changed");
            // s.get("currency", function(ls){
            //   lsVars["currency"] = ls["currency"];
            //   callReplacementFunction("original");
            //   homeCurrencyBase = currencyBase[lsVars["currency"]][0];
            //   currencyRegexObject = RegExp(req["value"], 'i');
            //   if(pluginState === "on" && !whitelisted){
            //     callReplacementFunction(unitSystem);
            //   }
            // });
            break;
            
          case 'pluginState':
            // console.log("state changed");
            pluginState = req.value;
            if(pluginState == "off"){
              callReplacementFunction("original");
            } else {
              callReplacementFunction(pluginState);
            }
            break;
            
          case 'whitelist':
            // console.log("whitelist changed");
            whitelist = req.value;
            var oldWhitelisted = whitelisted;
            whitelisted = checkWhitelist(location.href, whitelist);
            if(whitelisted !== oldWhitelisted){
              if(whitelisted){
                callReplacementFunction("original");
              } else {
                callReplacementFunction(unitSystem);
              }
            }
            break;
            
          case "syncSettings":
            // console.log("syncSettings changed");
            syncSettings = req.value;
            if(syncSettings){
              s = chrome.storage.sync;
            } else {
              s = chrome.storage.local;
            }
            break;
            
          case "autoConvertRightClick":
            // console.log("autoConvert from right click");
            var convertedValue = convertSelected();
            break;
          
          default: break;
        }
      }
      $(".convertIt").addClass(lsVars["unitColour"]+" "+lsVars["unitHighlight"]);
    });
  });
  
});


function storageChanged(changes,areaName){
  // changes = changes object with 'key', 'newValue' and 'oldValue'
  console.log(changes);

  var changedKey = Object.keys(changes)[0];
  s.get(function(ls){
    lsVars = ls;
    
    // If multiple objects changed, it's a change of location, so don't bother.
    if(Object.keys(changes).length > 1) return;
    
    switch(changedKey){
      case 'unitHighlight':
        // console.log("unit highlight changed");
        lsVars["currencyHighlight"] = changes[changedKey].newValue;
        $("span.convertIt").removeClass(changes[changedKey].oldValue);
        $("span.convertIt").addClass(changes[changedKey].newValue);
        break;
        
      case 'currencyHighlight':
        // console.log("currency highlight changed");
        lsVars["currencyHighlight"] = changes[changedKey].newValue;
        $("span.convertCurrency").removeClass(changes[changedKey].oldValue);
        $("span.convertCurrency:not(.currNA)").addClass(changes[changedKey].newValue);
        break;
        
      case 'currencyStyle':
        // console.log("currencyStyle changed");
        if(!lsVars["currencyReplace"]){
          $("span.convertCurrency:not(.currNA)").each(function(ev){
            var popupText = $(this).find("span.currPopup").html().replace(/<br.*$/i, "");
            var newPopupText = popupText.replace(currencyBase[lsVars["currency"]][changes[changedKey].oldValue],currencyBase[lsVars["currency"]][lsVars["currencyStyle"]]);
            var newPopupHTML = $(this).find("span.currPopup").html().replace(RegExp(popupText + "(<br.*$)", "i"), newPopupText + "$1");
            $(this).find("span.currPopup").html(newPopupHTML);
            
            var currencyRateText = $(this).find(".exchangeRateNode").text();
            var newCurrencyRateText = currencyRateText.replace(currencyBase[lsVars["currency"]][changes[changedKey].oldValue],currencyBase[lsVars["currency"]][lsVars["currencyStyle"]]);
            // var newCurrencyRateHTML = $(this).find("span.currPopup").html().replace(RegExp(currencyRateText + "(<br.*$)", "i"), newCurrencyRateText + "$1");
            $(this).find(".exchangeRateNode").text(newCurrencyRateText);
            
            var dataConverted = $(this).data("currconverted");
            dataConverted = dataConverted.replace(currencyBase[lsVars["currency"]][changes[changedKey].oldValue],currencyBase[lsVars["currency"]][lsVars["currencyStyle"]]);
            $(this).data("currconverted", dataConverted);
          });
        } else {
          $("span.convertCurrency:not(.currNA)").each(function(ev){
            var bodyText = $(this).text().replace($(this).children(".currNone").text(), "");
            var newBodyText = bodyText.replace(currencyBase[lsVars["currency"]][changes[changedKey].oldValue],currencyBase[lsVars["currency"]][lsVars["currencyStyle"]]);
            var newBodyHTML = $(this).html().replace(bodyText, newBodyText);
            $(this).html(newBodyHTML);
            
            var currencyRateText = $(this).find(".exchangeRateNode").text();
            var newCurrencyRateText = currencyRateText.replace(currencyBase[lsVars["currency"]][changes[changedKey].oldValue],currencyBase[lsVars["currency"]][lsVars["currencyStyle"]]);
            // var newCurrencyRateHTML = $(this).find("span.currPopup").html().replace(RegExp(currencyRateText + "(<br.*$)", "i"), newCurrencyRateText + "$1");
            $(this).find(".exchangeRateNode").text(newCurrencyRateText);
            
            var dataConverted = $(this).data("currconverted");
            dataConverted = dataConverted.replace(currencyBase[lsVars["currency"]][changes[changedKey].oldValue],currencyBase[lsVars["currency"]][lsVars["currencyStyle"]]);
            $(this).data("currconverted", dataConverted);
          });
        }
        break;
        
      case "unitColour":
        // console.log("unit colour changed");
        lsVars["unitColour"] = changes[changedKey].newValue;
        $("span.convertIt").removeClass(changes[changedKey].oldValue);
        $("span.convertIt").addClass(changes[changedKey].newValue);
        break;
        
      case "currencyColour":
        // console.log("currency colour changed");
        lsVars["currencyColour"] = changes[changedKey].newValue;
        $("span.convertCurrency:not(.currNA)").removeClass(changes[changedKey].oldValue);
        $("span.convertCurrency:not(.currNA)").addClass(changes[changedKey].newValue);
        break;
        
      case 'noReplace':
        // console.log("unit noReplace changed");
        var valueInPage, valueInBox;
        $("span.convertIt").each(function(){
          if(lsVars["noReplace"]){
            // Do not replace. Place original value in page, converted in box
            valueInPage = $(this).data("original");
            valueInBox = $(this).data("converted");
          } else {
            // Replace. Place converted value in page, original in box
            valueInPage = $(this).data("converted");
            valueInBox = $(this).data("original");
          }
          // Place new values inside spans
          $(this).data("convertit", valueInBox);
          if(lsVars["showUnitRate"]){
            $(this).children("span").html(" " + valueInBox + $(this).data("convertitrate") + " ");
          } else {
            $(this).children("span").html(" " + valueInBox + " ");
          }
          $(this).html($(this).html().replace(/.*?(<span.*$)/i, valueInPage + "$1"));
        });
        break;
        
      case 'currencyReplace':
        // console.log("currency noReplace changed");
        $("span.convertCurrency:not(.currNA)").each(function(ev){
          var bodyValue, popupValue;
          if(lsVars["currencyReplace"]){
            bodyValue = $(this).data("currconverted");
            popupValue = $(this).data("curroriginal");
          } else {
            bodyValue = $(this).data("curroriginal");
            popupValue = $(this).data("currconverted");
          }
          currpopupChildHTML = $(this).find("span.currPopup").children().html();
          freshStateHTML = $(this).find("span.currPopup").children("span.freshState").html();
          exchangeRateHTML = $(this).find("span.currPopup").children("span.exchangeRateNode").html();
          freshStateClass = $(this).find("span.currPopup").children("span.freshState").attr("class").replace("freshState","").replace(" ","");
          
          $(this).html(bodyValue);
          
          var currNoneNode = document.createElement("span");
          currNoneNode.setAttribute("class", "currNone");
          
          var popupNode = document.createElement("span");
          popupNode.setAttribute("class", "currPopup");
          popupNode.appendChild(document.createTextNode(popupValue));
          popupNode.appendChild(document.createElement("br"));

          var exchangeRateNode = document.createElement("span");
          exchangeRateNode.setAttribute("class", "exchangeRateNode");
          exchangeRateNode.appendChild(document.createTextNode(exchangeRateHTML));
          popupNode.appendChild(exchangeRateNode);
          
          var freshStateNode = document.createElement("span");
          freshStateNode.setAttribute("class", "freshState " + freshStateClass);
          freshStateNode.appendChild(document.createTextNode(freshStateHTML));
          popupNode.appendChild(freshStateNode);
          
          currNoneNode.appendChild(popupNode);
          $(this).append(currNoneNode);
        });
        break;

      case "disableIn":
        // console.log("disableIn changed");
        if(pluginState === "on" && !whitelisted && (
            lsVars["us"]["distance"] === "metric" || lsVars["us"]["area"] === "metric" || lsVars["us"]["volume"] === "metric"
        )){
          callReplacementFunction("original");
          callReplacementFunction(unitSystem);
          $("span.convertIt").addClass(lsVars["unitColour"]+" "+lsVars["unitHighlight"]);
        }
        break;
        
      case "disableQuotes":
        // console.log("disableQuotes changed");
        if(pluginState === "on" && !whitelisted && lsVars["us"]["distance"] === "metric"){
          callReplacementFunction("original");
          callReplacementFunction(unitSystem);
          $("span.convertIt").addClass(lsVars["unitColour"]+" "+lsVars["unitHighlight"]);
        }
        break;
        
      case "lbSt":
        // console.log("lbSt changed");
        if(pluginState === "on" && !whitelisted && lsVars["us"]["weight"] === "imperial"){
          callReplacementFunction("original");
          callReplacementFunction(unitSystem);
          $("span.convertIt").addClass(lsVars["unitColour"]+" "+lsVars["unitHighlight"]);
        }
        break;

      case "disableTo":
        // console.log("disableTo changed");
        if(pluginState === "on" && !whitelisted){
          callReplacementFunction("original");
          callReplacementFunction(unitSystem);
          $("span.convertIt").addClass(lsVars["unitColour"]+" "+lsVars["unitHighlight"]);
        }
        break;
        
      case 'showTooltip':
        // console.log("showTooltip changed");
        if (lsVars["showTooltip"]) {
          // add class to remove css tooptips
          $("span.convertIt, span.convertCurrency").addClass(SHOW_TOOLTIP_CLASS);
          // parse page and add tooltips
          $("span.convertIt, span.convertCurrency").each(function(){
            var classStr = $(this).hasClass("convertIt") ? "" : "curr";
            var tempStr = $(this).data(classStr + "original") + " = " + $(this).data(classStr + "converted");
            $(this).attr("title",tempStr);
          });
        } else {
          // remove class to remove css tooptips
          $("span.convertIt, span.convertCurrency").removeClass(SHOW_TOOLTIP_CLASS);
          // parse page and remove tooltips
          $("span.convertIt, span.convertCurrency").attr("title","");
        }
        break;
        
      case 'showUnitRate':
        // console.log("showUnitRate changed");
        
        unitSpanText();
        break;
        
      default:
        // console.log("Other changed: " + changedKey);
        break;
    }
  });
}


function convertSelected(){
  var selection = window.getSelection();
  
  if(selection.type == "None") return;
  if(selection.anchorNode != selection.focusNode){
    return;
    // if(selection.anchorNode.nodeType === 3)
    // var anchorNode = selection.anchorNode;
    // var selectionText = anchorNode.textContent;
    
    // // Replace anchor node
    // // A pre node with contents till the selection starts
    // var preText = anchorNode.textContent.substr(0,selection.anchorOffset);
    // var preNode = document.createTextNode(preText);
    // anchorNode.parentNode.insertBefore(preNode, anchorNode);
    
    // // and a post node with remaining text
    // var postText = anchorNode.textContent.substr(selection.anchorOffset+selectionText.length,anchorNode.textContent.length-selection.anchorOffset-selectionText.length);
    // var postNode = document.createTextNode(postText);
    // anchorNode.parentNode.insertBefore(postNode,anchorNode.nextSibling);
    
    // anchorNode.textContent = toOther(anchorNode, selectionText);
    // unitSpanText();
  } else {
    var selectionText = selection.toString();

    var anchorNode = selection.anchorNode;
    // Replace anchor node
    // A pre node with contents till the selection starts
    var preText = anchorNode.textContent.substr(0,selection.anchorOffset);
    var preNode = document.createTextNode(preText);
    anchorNode.parentNode.insertBefore(preNode, anchorNode);
    
    // and a post node with remaining text
    var postText = anchorNode.textContent.substr(selection.anchorOffset+selectionText.length,anchorNode.textContent.length-selection.anchorOffset-selectionText.length);
    var postNode = document.createTextNode(postText);
    anchorNode.parentNode.insertBefore(postNode,anchorNode.nextSibling);

    anchorNode.textContent = toOther(anchorNode, selectionText);
    unitSpanText();
  }
}


function callReplacementFunction(key){
  // console.log("replace with: " + (key === "original" ? key : "regex"));
  switch(key){
    case "original":
      replaceOriginal();
      break;
    default:
      var currentHost = location.hostname.trim();
      var matches = currentHost.match(/\.([\w]+)$/i);
      var ccTLD;
      
      pageDollar = "usd";
      if(matches){
        ccTLD = matches[1];
        if(ccTLD in dollarCurrencies){
          pageDollar = dollarCurrencies[ccTLD][0];
        }
      }
      
      replaceOther(null);
      unitSpanText();
      $(".convertIt").addClass(lsVars["unitColour"]+" "+lsVars["unitHighlight"]);
      break;
  }
}


function replaceOriginal(){
  var spanStr;
  if(arguments && arguments[0] && arguments[0] == 'currency'){
    spanStr = "span.convertCurrency";
  } else {
    spanStr = "span.convertIt, span.convertCurrency";
  }
  $(spanStr).each(function(ev){
    var origText = "";
    if($(this).data("convertit") >= ''){
      origText = $(this).data("original");
    } else {
      origText = $(this).data("curroriginal");
    }
    $(this).replaceWith(origText);
  });
}


function replaceOther(node){ //FROM: http://stackoverflow.com/questions/1512876/how-to-replace-text-in-html-document-without-affecting-the-markup
  node = node || document.body; // base node
  
  var childs = node.childNodes, i = 0;
  
  while(node = childs[i]){
    i++;
    if(node.nodeName.toLowerCase().match(/^(?:(?:no)?script|i?frame)$/i)){
    // if(node.nodeName.toLowerCase() === "script"){
      continue;
    }
    if (node.nodeType == 3){ // text node found, do the replacement
      if (node.textContent) {
        node.textContent = toOther(node, node.textContent);
      }
    } else {
      if (node.nodeType == 1){
        if(node.hasAttribute("class")){
          if(node.getAttribute("class").match(/convertIt|convertCurrency/i) != null){ // not a text mode and not a convertIt node, look forward
            continue;
          }
        }
      }
      replaceOther(node);
    }
  }
}


function toOther(node, inStr){
  var convDone = false;
  
  if(lsVars["currency"] !== "none" && currencyRates[lsVars["currency"]].status != 'NA'){
    inStr.replace(currencyRegexObject, function(a, preSpace, x1, x2, x11, currencySymbol1, strailing1, x13, x14, x15, x16, x17, mixFrac1, compounder1, mixNum1, mixDen1, fract1, numer1, denom1, fracNum1, fracSymbol1, spaceBeforeText, textnumber, x21, x23, x24, x25, x26, x27, mixFrac2, compounder2, mixNum2, mixDen2, fract2, numer2, denom2, fracNum2, fracSymbol2, strailing2, currencySymbol2,strailing3){
      var currencySymbol, strailing, x3, x4, x5, x6, x7, mixFrac, compounder, mixNum, mixDen, fract, numer, denom;
      if(x11){
        currencySymbol = currencySymbol1;
        strailing = strailing1;
        x3 = x13;
        x4 = x14;
        x5 = x15;
        x6 = x16;
        x7 = x17;
        mixFrac = mixFrac1;
        compounder = compounder1;
        mixNum = mixNum1;
        mixDen = mixDen1;
        fract = fract1;
        numer = numer1;
        denom = denom1;
        fracSymbol = fracSymbol1;
        fracNum = fracSymbol1;
      } else {
        currencySymbol = currencySymbol2;
        strailing = strailing2;
        x3 = x23;
        x4 = x24;
        x5 = x25;
        x6 = x26;
        x7 = x27;
        mixFrac = mixFrac2;
        compounder = compounder2;
        mixNum = mixNum2;
        mixDen = mixDen2;
        fract = fract2;
        numer = numer2;
        denom = denom2;
        fracSymbol = fracSymbol2;
        fracNum = fracNum2;
      }
      
      var awaySymbol;
      var origCurrencySymbol = currencySymbol;
      currencySymbol = currencySymbol.toLowerCase();
      
      if(currencySymbol == "$"){
        awaySymbol = pageDollar;
      } else {
        awaySymbol = rules[currencySymbol][1];
      }
      
      if(awaySymbol == lsVars["currency"]) return a;
      
      var loc = inStr.indexOf(a);
      
      var decimal = ( x6 ? x6.length-1 : ( x7 ? x7.length-1 : 0));
      var commaPos, comma, digits, freshness, finalExchangeRate;
      var usedCurrRates = [];

      // Collect commas for insertion in converted value
      commaPos = x3.search(",");
      var newX1 = x3.replace(/,/g,"");
      
      // Convert fractions to real numbers
      if(fract != undefined){
        newX1=numer/denom;
      }
      if(mixFrac != undefined){
        newX1=mixNum/mixDen;
        newX1 += parseInt(compounder);
      }
      
      if(fracSymbol){
        newX1 = fractions[fracSymbol][0] + parseFloat(fracNum ? fracNum : 0);
      }
      
      
      // Get equivalent standardised unit
      var awayBase = currencyBase[awaySymbol][0];
      var tempConvValue;
      
      // Calculate value in home units
      // Additional conversion if base for home units is different from base for away units
      if(homeCurrencyBase == awayBase){
        finalExchangeRate = currencyRates[lsVars["currency"]].rate / currencyRates[awaySymbol].rate;
        
        tempConvValue = newX1 * finalExchangeRate;
        
        freshness = compareFreshness([
                      currencyRates[lsVars["currency"]].status,
                      currencyRates[awaySymbol].status
        ]);
        usedCurrRates.push(
                      currencyRates[lsVars["currency"]].currencyCodeSet,
                      currencyRates[awaySymbol].currencyCodeSet
        );
      } else {
      // if(homeCurrencyBase != awayBase){
        var tempBaseRate = (homeCurrencyBase == 'usd' ? currencyRates[awayBase] : currencyRates[homeCurrencyBase]);
        finalExchangeRate = currencyRates[lsVars["currency"]].rate / currencyRates[awaySymbol].rate
                          * (homeCurrencyBase == 'usd' ? ( 1 / currencyRates[awayBase].rate) : currencyRates[homeCurrencyBase].rate);
        
        tempConvValue = newX1 * finalExchangeRate;
        
        freshness = compareFreshness([
                      currencyRates[lsVars["currency"]].status,
                      currencyRates[awaySymbol].status,
                      tempBaseRate.status
                    ]);
        usedCurrRates.push(
                      currencyRates[lsVars["currency"]].currencyCodeSet,
                      currencyRates[awaySymbol].currencyCodeSet,
                      tempBaseRate.currencyCodeSet
                    );
      }
      finalExchangeRate = 1 / finalExchangeRate;

      // Calculate digits for home and away values, adjust for fractions
      digits = sd(newX1);
      var new_digits = sd(tempConvValue);
      if(fract != undefined || mixFrac != undefined){
        decimal = 2;
      }
      var old_decimal = decimal;
      
      // Calculate decimals required for new value
      if(new_digits >= digits + old_decimal && Math.floor(tempConvValue) > 0){
        if(digits == 0 && new_digits == 0){
          decimal = 2;
        } else {
          decimal = 0;
        }
      } else {
        if(old_decimal > 0){
          decimal = Math.max(digits + old_decimal - new_digits, old_decimal);
        } else {
          decimal = 2;
        }
      }
      // Format home value to calculated decimal places
      tempConvValue = Math.round(tempConvValue*Math.pow(10,decimal))/Math.pow(10,decimal);
      
      
      var exchangeRateDecimal = sd(finalExchangeRate);
      exchangeRateDecimal = Math.max(0, 3 - exchangeRateDecimal);
      finalExchangeRate = Math.round(finalExchangeRate*Math.pow(10,exchangeRateDecimal))/Math.pow(10,exchangeRateDecimal);

      // Format home value for commas in original away value
      comma = x3.split(",").length - 1;
      tempConvValue = addCommas(tempConvValue, decimal);
      
      
      var beforeCurrString = inStr.substring(0, loc);
      var beforeNode = document.createTextNode(beforeCurrString);
      node.parentNode.insertBefore(beforeNode, node);
      // Recursive call to handle unit conversions in preceding node.textContent once curr conversion has been done.
      beforeNode.textContent = toOther(beforeNode, beforeCurrString);
      
      var currNode = document.createElement("span");
      
      // a,x1,x2,sleading,currencySymbol,strailing,x3,x4,x5,x6,x7,mixFrac,compounder,mixNum,mixDen,fract,numer,denom, spaceBeforeText, textnumber
      tempConvValue = (x2 != undefined ? x2 : '')
                    + currencyBase[lsVars["currency"]][lsVars["currencyStyle"]]
                    + (strailing != undefined && strailing != '' ? strailing : ' ')
                    + tempConvValue
                    + (spaceBeforeText != undefined ? spaceBeforeText : '')
                    + (textnumber != undefined ? textnumber : '');
      var popupStr = (lsVars["currencyReplace"] ? tempConvValue : x1);
      var popUpObj = {
        str1: (lsVars["currencyReplace"] ? x1 : tempConvValue),
        exchangeRateStr: 'Exchange Rate: ' + currencyBase[lsVars["currency"]][lsVars["currencyStyle"]] + ' 1 = ' + origCurrencySymbol + ' ' + finalExchangeRate,
        freshnessStr: freshScale[freshness][1]
      };
      
      newCurrNode(node,currNode,x1,tempConvValue, freshness, usedCurrRates, preSpace, popUpObj);
      
      var afterCurrString = inStr.substring((loc) + a.length - strailing3.length);
      var afterNode = document.createTextNode(afterCurrString);
      node.parentNode.insertBefore(afterNode, node.nextSibling);
      // Recursive call to handle unit conversions in remainining node.textContent once curr conversion has been done.
      afterNode.textContent = toOther(afterNode, afterCurrString);
      
      convDone = true;
      inStr = "";
      return "";
    });
  }

  if(convDone){
    return inStr;
  }

  inStr.replace(regexObj, function(a,preSpace,x1,x2,x3,x4,x5,x6,x7,mixFrac,compounder,mixNum,mixDen,fract,numer,denom,fracNum,fracSymbol,space,x8,x9){
    //Case: disableTo
    x8 = x8.toLowerCase();
    if(x8 === "to" && lsVars["disableTo"]){
      return a;
    }
    
    //Case: Disabling 'st' from converting to stone when last digit is 1 ('1st' scenario);
    if(!space){
      if (x8 == 'st' && ((fract === undefined && x6 === undefined && x7 === undefined) && x1.slice(-1) == 1)) return a;
      
      space = " ";
    }
    
    var loc = inStr.indexOf(a);
    var decimal = ( x6 ? x6.length-1 : ( x7 ? x7.length-1 : 0));
    var commaPos, comma, digits;
    
    //Case: if last char of prev node is a currency symbol, do nothing and return
    if(inStr.substring(0,loc).search(/(£|€|\$|¥|₹|INR|JPY|USD|GBP|AUD|EUR|CNY)\s*$/) > -1) return a;
    
    var expUnit, origExp, tempExpArr;
    tempExpArr = (inStr.substring(loc+a.length) == "" ? checkForExponent(node, x8) : [x8, '']);
    expUnit = tempExpArr[0];
    origExp = tempExpArr[1];
    
    //Case: expUnit = 'in' but next word == cu
    if(expUnit === "in" && inStr.substring(loc+a.length).match(/^\s*(cu)\s*\b/i) != null){
      expUnit += " cu";
      a += " cu";
      loc += 3;
      //remove the 'cu' from postNode when DOM is modified below near end of section
    }
    
    //Case: ft/in found with no exponents - converted in 2nd regex
    if(origExp === "" && expUnit.match(/^(in|inch|inches|feet|foot|ft)$/i) != null) return a;
    

    expUnit = expUnit.replace(/&nbsp;/ig, " ").replace(/&#160;/ig, " ").replace(/\s+/ig, " ").toLowerCase();
    
    //Convert temperature degree symbols to unicode for conversion
    if(origExp === ""){
      expUnit = expUnit.replace(/&#176;/ig, "\xB0").replace(/&deg;/ig, "\xB0");
    }
    
    //Collect commas for insertion in converted value
    commaPos = x3.search(",");
    var newX1 = x3.replace(/,/g,"");
    
    //Convert fractions to real numbers
    if(fract){
      newX1=numer/denom;
    }
    if(mixFrac){
      newX1=mixNum/mixDen;
      newX1 += parseInt(compounder);
    }
    
    if(fracSymbol){
      newX1 = fractions[fracSymbol][0] + parseFloat(fracNum ? fracNum : 0);
    }
    
    //Initial unit conversion
    var tempConvValue = newX1*rules[expUnit][0];
    var isTemperature = false;
    //Case: Unit conversion for temperature
    if(rules[expUnit][0] === 0){
      tempConvValue = convertTemperature(newX1, expUnit, x2);
      isTemperature = true;
    }
    
    digits = sd(newX1);
    var new_digits = sd(tempConvValue);
    if(fract !== undefined || mixFrac !== undefined){
      decimal = 2;
    }
    var old_decimal = decimal;
    decimal = Math.max(digits-new_digits + old_decimal, 0);
    comma = x3.split(",").length - 1;
    decimal = (comma > 0 ? old_decimal : decimal);
    if((decimal == 0 && new_digits == 0) || (decimal + new_digits < 2)) {
      decimal = 2 - new_digits;
    }
    
    var tempConvArr = unitText(tempConvValue, rules[expUnit][1] , decimal, old_decimal, commaPos, comma, digits, new_digits, space, x2, isTemperature);
    var newValueText = tempConvArr[0];
    var newValue = tempConvArr[1];
    var newUnit = tempConvArr[2];
    
    var beforeUnitString = inStr.substring(0,expUnit != "in cu" ? loc : (loc - 3));
    var beforeNode = document.createTextNode(beforeUnitString);
    node.parentNode.insertBefore(beforeNode, node);
    // Recursive call to handle unit conversions in preceding node.textContent once curr conversion has been done.
    beforeNode.textContent = toOther(beforeNode, beforeUnitString);
    
    var currNode = document.createElement("span");
    inText(a,isTemperature,x9,node,currNode,expUnit,newValueText,preSpace, newValue, newUnit, newX1);
    
    var afterNode = document.createTextNode(inStr.substring((expUnit != "in cu" ? loc : (loc + 3)) + a.length));
    node.parentNode.insertBefore(afterNode, node.nextSibling);
    
    convDone = true;
    inStr = "";
    return "";
  });
  
  var tmpStr = inStr;
  
  if(isImp && !convDone){
    //Conversion from Imp, no match was found, so do a secondary search for quotes
    tmpStr.replace(qqRegexObj, function(a,
      preSpace,
      x01,
      x011,
      x11,x12,x13,x14,x15,x16,x17,mixFrac1,compounder1,mixNum1,mixDen1,fract1,numer1,denom1,fracNum1,fracSymbol1,space1,x18,
      x012,
      x23,x24,x25,x26,x27,mixFrac2,compounder2,mixNum2,mixDen2,fract2,numer2,denom2,fracNum2,fracSymbol2,space2,x28,x29,
      x02,
      x31,x32,x33,x34,x35,x36,x37,mixFrac3,compounder3,mixNum3,mixDen3,fract3,numer3,denom3,fracNum3,fracSymbol3,space3,x38,x39
    ){
      var loc = tmpStr.indexOf(a);
      
      //Case: if last char of prev node is a currency symbol, do nothing and return
      if(tmpStr.substring(0,loc).search(/(£|€|\$|¥|₹|INR|JPY|USD|GBP|AUD|EUR|CNY)\s*$/) > -1) return a;
      
      var decimal = 2;
      var commaPos, comma, digits, newX1, tempConvValue, newValueText, old_decimal, new_digits;
        
      if(x01 !== undefined){
        //Complex quotes - e.g. 5' 11"
        //Calculate values of both in base units, sum them, then send combined for drill down
        x18 = x18.toLowerCase();

        // Case: disableQuotes
        if(lsVars["disableQuotes"] && (x18.match(/'|′/i) != null || x28 == '"')) return a;
        
        //Case X011
        commaPos = x13.search(",");
        newX1 = x13.replace(/,/g,"");
        if(fract1 != undefined){
          newX1=numer1/denom1;
        }
        if(mixFrac1 != undefined){
          newX1=mixNum1/mixDen1;
          newX1 += parseInt(compounder1);
        }
        
        if(fracSymbol1){
          newX1 = fractions[fracSymbol1][0] + parseFloat(fracNum1 ? fracNum1 : 0);
        }
        
        tempConvValue = newX1*rules[x18][0];
        
        digits = sd(newX1);
        new_digits = sd(tempConvValue);
        old_decimal = decimal;
        decimal = Math.max(digits-new_digits + old_decimal, 0);
        comma = x13.split(",").length - 1;
        decimal = (comma > 0 ? old_decimal : decimal);
        if((decimal === 0 && new_digits === 0) || (decimal + new_digits < 2)) {
          decimal = 2 - new_digits;
        }
        
        
        //Case X012
        newX1 = x23.replace(/,/g,"");
        if(fract2 !== undefined){
          newX1=numer2/denom2;
        }
        if(mixFrac2 !== undefined){
          newX1=mixNum2/mixDen2;
          newX1 += parseInt(compounder2);
        }
        
        if(fracSymbol2){
          newX1 = fractions[fracSymbol2][0] + parseFloat(fracNum2 ? fracNum2 : 0);
        }
        
        //Sum them
        tempConvValue += newX1*rules[x28][0];
        
        var space = space1 || space2 || " ";
        //Drill down
        var isTemperature = false;
        
        var tempConvArr = unitText(tempConvValue, rules[x18][1] , decimal, old_decimal, commaPos, comma, digits, new_digits, space, x12, isTemperature);
        var newValueText = tempConvArr[0];
        var newValue = tempConvArr[1];
        var newUnit = tempConvArr[2];
        
        var beforeNode = document.createTextNode(tmpStr.substring(0,loc));
        node.parentNode.insertBefore(beforeNode, node);
        
        var currNode = document.createElement("span");
        inText(a.substr(0,a.length-x29.length),isTemperature,'',node,currNode,x18,newValueText,preSpace, newValue, newUnit, 'mixed');
        
        var afterNode = document.createTextNode(tmpStr.substring(loc+a.length-x29.length));
        node.parentNode.insertBefore(afterNode, node.nextSibling);
        
      } else {
        // Simple quote - e.g. 5', or 11"
        if(x28) x28 = x28.toLowerCase();
        if(x38) x38 = x38.toLowerCase();

        // Case: disableQuotes
        if(lsVars["disableQuotes"] && x38.match(/'|′|"/i) != null) return a;
          
        
        //Case: if disableIn is true, and x38 = 'in'
        if(x38 == "in" && lsVars["disableIn"]) return a;
        
        decimal = ( x36 ? x36.length-1 : ( x37 ? x37.length-1 : 0));
        
        commaPos = x33.search(",");
        newX1 = x33.replace(/,/g,"");
        if(fract3 !== undefined){
          newX1=numer3/denom3;
        }
        if(mixFrac3 !== undefined){
          newX1=mixNum3/mixDen3;
          newX1 += parseInt(compounder3);
        }
        
        if(fracSymbol3){
          newX1 = fractions[fracSymbol3][0] + parseFloat(fracNum3 ? fracNum3 : 0);
        }
        
        tempConvValue = newX1*rules[x38][0];
        
        digits = sd(newX1);
        new_digits = sd(tempConvValue);
        old_decimal = decimal;
        decimal = Math.max(digits-new_digits + old_decimal, 0);
        comma = x33.split(",").length - 1;
        decimal = (comma > 0 ? old_decimal : decimal);
        if((decimal == 0 && new_digits == 0) || (decimal + new_digits < 2)) {
          decimal = 2 - new_digits;
        }
        
        var space = space3 || " ";
        var isTemperature = false;
        var feetinches = "";
        // if(x38.match(/^(in|inches|feet|ft)$/i) != null){
        if(x38.match(/^(inches|feet)$/i) != null){
          feetinches = "s";
        }

        var tempConvArr = unitText(tempConvValue, rules[x38][1] , decimal, old_decimal, commaPos, comma, digits, new_digits, space, x32, isTemperature);
        var newValueText = tempConvArr[0];
        var newValue = tempConvArr[1];
        var newUnit = tempConvArr[2];
        // newValueText = unitText(tempConvValue, rules[x38][1] , decimal, old_decimal, commaPos, comma, digits, new_digits, space, x32, isTemperature)[0];
        
        var beforeNode = document.createTextNode(tmpStr.substring(0,loc));
        node.parentNode.insertBefore(beforeNode, node);
        
        var currNode = document.createElement("span");
        
        inText(a.substr(0,a.length-x39.length),isTemperature,feetinches,node,currNode,x38,newValueText,preSpace, newValue, newUnit, newX1);
        
        var afterNode = document.createTextNode(tmpStr.substring(loc+a.length-x39.length));
        node.parentNode.insertBefore(afterNode, node.nextSibling);
      }
      
      tmpStr = "";
      return "";
    });
  }
  
  return convDone ? "" : tmpStr;
}


function convertTemperature(newX1, expUnit, negative_sign){
  if(negative_sign && negative_sign != "+"){
    negative_sign = "-";
  }
  expUnit = expUnit.replace(/degrees\s*/gi,"");
  var tempUnit = ((expUnit.charAt(0) != 'c' && expUnit.charAt(0) != 'f') ? expUnit.charAt(1) : expUnit.charAt(0));
  var retVal = 0
  if(negative_sign != undefined){
    newX1 = parseInt(negative_sign+newX1);
  }
  switch (tempUnit){
    case 'c':
      retVal = (newX1 * 9/5) + 32;
      break;
    case 'f':
      retVal = (newX1 - 32) * 5/9;
      break;
  }
  return retVal;
}


function unitText(value, unit, decimal, old_decimal, commaPos, comma, digits, new_digits, space, negative_sign, isTemperature){
  if(negative_sign && negative_sign != "+"){
    negative_sign = "-";
  }
  if((value - value%Math.pow(10,Math.max(new_digits,comma))) > 0 && (!lsVars["lbSt"] || (unit != "stone" && unit != "st"))){
    //number has a non-zero pre-decimal digit so can be returned with current units
    if(isTemperature){
      return [addCommas(value, decimal) + space + unit, value, unit];
    } else {
      if(negative_sign != undefined){
        return [negative_sign + addCommas(value, decimal) + space + unit, value, unit];
      } else {
        return [addCommas(value, decimal) + space + unit, value, unit];
      }
    }
  } else {
    //multiply number with next lower level unit mutiplier and call self again using new value & unit
    if(drilldown[unit]){
      var new_value = value*drilldown[unit][0]
      new_digits = sd(new_value);
      decimal = Math.max(digits-new_digits + old_decimal, 0);
      if((decimal == 0 && new_digits == 0) || (decimal + new_digits < 2)) {
        decimal = 2 - new_digits;
      }
      
      return unitText(new_value, drilldown[unit][1], decimal, old_decimal, commaPos, comma, digits, new_digits, space, negative_sign, isTemperature);
    } else {
      if(isTemperature){
        return [addCommas(value, decimal) + space + unit, value, unit];
      } else {
        if(negative_sign != undefined){
          return [negative_sign + addCommas(value, decimal) + space + unit, value, unit];
        } else {
          return [addCommas(value, decimal) + space + unit, value, unit];
        }
      }
    }
  }
}


function checkForExponent(node, unit){
  if(node.nextSibling){
    if(node.nextSibling.nodeName.toLowerCase() == "sup" && node.nextSibling.textContent.search(/\d+/i) == 0){
      var exponent = node.nextSibling.textContent;
      node.nextSibling.textContent = "";
      return [unit + exponent, exponent];
    }
  }
  return [unit, ''];
}


function addCommas(nStr, decimal){ // with thanks, from http://www.mredkj.com/javascript/numberFormat.html
	
	nStr += "";

  var tempNumber = parseFloat(nStr).toFixed(decimal);

  var x = tempNumber.split('.');
  var x1 = x[0];
  var x2 = x.length > 1 ? '.' + x[1] : '';
  
  var rgx = /(\d+)(\d{3})/;
	while (rgx.test(x1)) {
		x1 = x1.replace(rgx, '$1' + ',' + '$2');
	}
	return x1 + x2;
}


function newCurrNode(node, currNode, x1, converted, freshness, usedCurrRates, preSpace, popUpObj){
  
  if(freshness == 'NA'){
    var classStr = "convertCurrency currNA";
    classStr += ' ' + usedCurrRates.join(' ');
    
    currNode.appendChild(document.createTextNode(x1));
    currNode.setAttribute("class",classStr);
    if(lsVars["showTooltip"]){
      currNode.setAttribute("title", x1 + " = " + converted);
      currNode.classList.add(SHOW_TOOLTIP_CLASS);
    } else {
      currNode.setAttribute("title", "");
      currNode.classList.remove(SHOW_TOOLTIP_CLASS);
    }
    currNode.setAttribute("data-currconverted", converted);
    currNode.setAttribute("data-curroriginal",x1);
    
    var childNode = document.createElement("span");
    childNode.setAttribute("class","CurrNone");
      
    var popupNode = document.createElement("span");
    popupNode.setAttribute("class","currPopup freshStateNA");
    popupNode.appendChild(document.createTextNode(popUpObj.freshnessStr));
    
    childNode.appendChild(popupNode);
    currNode.appendChild(childNode);
    node.parentNode.insertBefore(currNode, node);
    
    if(preSpace && preSpace != ""){
      if(preSpace.match(/\n/ig)){
        node.parentNode.insertBefore(document.createTextNode(preSpace), currNode);
      } else {
        node.parentNode.insertBefore(document.createTextNode("\u00A0"), currNode);
      }
    }
    return;
  }
  
  var classStr = "convertCurrency " + lsVars["currencyHighlight"] + " " + lsVars["currencyColour"];
  
  if(lsVars["currencyReplace"]){
    currNode.appendChild(document.createTextNode(converted));
  } else {
    currNode.appendChild(document.createTextNode(x1));
  }
  
  var freshnessClass = 'curr' + freshness.charAt(0).toUpperCase() + freshness.slice(1);
  classStr += ' ' + freshnessClass
  
  for (var i = 0; i < usedCurrRates.length; i++) {
    classStr += ' ' + usedCurrRates[i]
  }
  
  currNode.setAttribute("class",classStr);
  if(lsVars["showTooltip"]){
    currNode.setAttribute("title", x1 + " = " + converted);
    currNode.classList.add(SHOW_TOOLTIP_CLASS);
  } else {
    currNode.setAttribute("title", "");
    currNode.classList.remove(SHOW_TOOLTIP_CLASS);
  }
  currNode.setAttribute("data-currconverted", converted);
  currNode.setAttribute("data-curroriginal",x1);
  
  var childNode = document.createElement("span");
  childNode.setAttribute("class","currNone");
    
  var popupNode = document.createElement("span");
  popupNode.setAttribute("class","currPopup");
  popupNode.appendChild(document.createTextNode(popUpObj.str1));
  popupNode.appendChild(document.createElement("br"));
  
  var exchangeRateNode = document.createElement("span");
  exchangeRateNode.setAttribute("class","exchangeRateNode");
  exchangeRateNode.appendChild(document.createTextNode(popUpObj.exchangeRateStr));
  
  var freshnessNode = document.createElement("span");
  freshnessNode.setAttribute("class", 'freshState ' + freshnessClass);
  freshnessNode.appendChild(document.createTextNode(popUpObj.freshnessStr));
  
  popupNode.appendChild(exchangeRateNode);
  popupNode.appendChild(freshnessNode);
  childNode.appendChild(popupNode);
  currNode.appendChild(childNode);
  node.parentNode.insertBefore(currNode, node);

  if(preSpace && preSpace != ""){
    if(preSpace.match(/\n/ig)){
      node.parentNode.insertBefore(document.createTextNode(preSpace), currNode);
    } else {
      node.parentNode.insertBefore(document.createTextNode("\u00A0"), currNode);
    }
  }
}


function inText(a,isTemperature,x9,node,currNode,expUnit,newValueText,preSpace,newValue,newUnit,newX1){
  var newExp;
  var newA = a.replace(/^\s+/,'');
  
  if(!isNaN(newValueText.substr(-1))){
    newExp = newValueText.substr(-1);
    newValueText = newValueText.substring(0,newValueText.length-1);
  }
  
  var origValue = newA + (isNaN(expUnit.substr(-1)) ? "" : "<sup>" + expUnit.substr(-1) + "</sup>");
  var convValue = newValueText + (newExp === undefined ? "" : "<sup>" + newExp + "</sup>") + x9 ;

  if(lsVars["noReplace"]){
    currNode.appendChild(document.createTextNode(newA));
    
    if(!isNaN(expUnit.substr(-1))){
      var expNode = document.createElement("sup");
      expNode.textContent=expUnit.substr(-1);
      currNode.appendChild(expNode);
    }
    
    var childNode = document.createElement("span");
    currNode.appendChild(childNode);
    
    currNode.setAttribute("class","convertIt");
    
    if(lsVars["showTooltip"]){
      currNode.setAttribute("title", origValue + " = " + convValue);
      currNode.classList.add(SHOW_TOOLTIP_CLASS);
    } else {
      currNode.setAttribute("title", "");
      currNode.classList.remove(SHOW_TOOLTIP_CLASS);
    }
    
    currNode.setAttribute("data-original",origValue);
    currNode.setAttribute("data-converted",convValue);

    if(newX1 == "mixed" || isTemperature){
      currNode.setAttribute("data-convertitrate", "");
    } else {
      currNode.setAttribute("data-convertitrate", "<br><span class='unitRate'> Rate: 1 " + expUnit + " = " + addCommas(newValue/newX1, UNIT_RATE_DECIMAL) + " " + newUnit + "</span>");
    }
    currNode.setAttribute("data-convertit",newValueText + (newExp === undefined ? "" : "<sup>" + newExp + "</sup>") + x9 );
    
    node.parentNode.insertBefore(currNode, node);
    
  } else {
    
    currNode.appendChild(document.createTextNode(newValueText + x9));
    
    if(newExp){
      var expNode = document.createElement("sup");
      expNode.textContent=newExp
      currNode.appendChild(expNode);
    }
    
    var childNode = document.createElement("span");
    currNode.appendChild(childNode);
    
    currNode.setAttribute("class","convertIt");
    
    if(lsVars["showTooltip"]){
      currNode.setAttribute("title", origValue + " = " + convValue);
      currNode.classList.add(SHOW_TOOLTIP_CLASS);
    } else {
      currNode.setAttribute("title", "");
      currNode.classList.remove(SHOW_TOOLTIP_CLASS);
    }
    currNode.setAttribute("data-original",origValue);
    currNode.setAttribute("data-converted",convValue);

    if(newX1 == "mixed"){
      currNode.setAttribute("data-convertitrate", "");
    } else {
      currNode.setAttribute("data-convertitrate", "<br><span class='unitRate'> Rate: 1 " + expUnit + " = " + addCommas(newValue/newX1, UNIT_RATE_DECIMAL) + " " + newUnit + "</span>");
    }
    currNode.setAttribute("data-convertit",newA+(isNaN(expUnit.substr(-1)) ? "" : "<sup>"+expUnit.substr(-1)+"</sup>"));
    
    node.parentNode.insertBefore(currNode, node);
  }
  
  if(preSpace && preSpace != ""){
    if(preSpace.match(/\n/ig)){
      node.parentNode.insertBefore(document.createTextNode(preSpace), currNode);
    } else {
      node.parentNode.insertBefore(document.createTextNode("\u00A0"), currNode);
    }
  }
}


//significant digits
function sd(num) {
  num = Math.abs(num);
  var i = 0;
  while (num - num % 10 > 0) {
    i++;
    num = num / 10;
  }
  return i;
}

/**
 * compareFreshness
 * Compares the freshness of an array of exchange rates and returns the worse of the lot
 * @param freshArray Array of freshness statuses
 */
function compareFreshness(freshArray){
  var freshness = 'fresh';
  var freshval = 0;
  for (var i = 0; i < freshArray.length; i++) {
    if(freshScale[freshArray[i]][0] > freshval){
      freshval = freshScale[freshArray[i]][0];
      freshness = freshArray[i];
    }
  }
  return freshness;
}


function unitSpanText(){
  if(lsVars["showUnitRate"]){
    $("span.convertIt").each(function(ev){
      $(this).children("span").html(" " + $(this).data("convertit") + $(this).data("convertitrate") + " ");
    });
  } else {
    $("span.convertIt").each(function(ev){
      $(this).children("span").html(" " + $(this).data("convertit") + " ");
    });
  }
}
