var tracker, service;
var s; //chrome.storage object
// var syncSettings;
var lsVars = {};
var strings = {
  menu: {
    title: chrome.i18n.getMessage("menu_title"),
    us: chrome.i18n.getMessage("menu_us"),
    currency: chrome.i18n.getMessage("menu_currency"),
    timeZone: chrome.i18n.getMessage("menu_timeZone"),
    colour: chrome.i18n.getMessage("menu_colour"),
    noReplace: chrome.i18n.getMessage("menu_noReplace"),
    whitelist: chrome.i18n.getMessage("menu_whitelist"),
    extras: chrome.i18n.getMessage("menu_extras"),
    feedback: chrome.i18n.getMessage("menu_feedback"),
  },
  unit: {
    title: chrome.i18n.getMessage("unit_title"),
    metric: chrome.i18n.getMessage("unit_metric"),
    imperial: chrome.i18n.getMessage("unit_imperial"),
    more: chrome.i18n.getMessage("unit_more"),
    less: chrome.i18n.getMessage("unit_less"),
    distance: chrome.i18n.getMessage("unit_distance"),
    duImp: chrome.i18n.getMessage("unit_duImp"),
    duMet: chrome.i18n.getMessage("unit_duMet"),
    area: chrome.i18n.getMessage("unit_area"),
    arImp: chrome.i18n.getMessage("unit_arImp"),
    arMet: chrome.i18n.getMessage("unit_arMet"),
    volume: chrome.i18n.getMessage("unit_volume"),
    volImp: chrome.i18n.getMessage("unit_volImp"),
    volMet: chrome.i18n.getMessage("unit_volMet"),
    weight: chrome.i18n.getMessage("unit_weight"),
    wtImp: chrome.i18n.getMessage("unit_wtImp"),
    wtMet: chrome.i18n.getMessage("unit_wtMet"),
    energy: chrome.i18n.getMessage("unit_energy"),
    enImp: chrome.i18n.getMessage("unit_enImp"),
    enMet: chrome.i18n.getMessage("unit_enMet"),
    power: chrome.i18n.getMessage("unit_power"),
    pwImp: chrome.i18n.getMessage("unit_pwImp"),
    pwMet: chrome.i18n.getMessage("unit_pwMet"),
    temperature: chrome.i18n.getMessage("unit_temperature"),
    tpImp: chrome.i18n.getMessage("unit_tpImp"),
    tpMet: chrome.i18n.getMessage("unit_tpMet"),
    torque: chrome.i18n.getMessage("unit_torque"),
    tqImp: chrome.i18n.getMessage("unit_tqImp"),
    tqMet: chrome.i18n.getMessage("unit_tqMet"),
    none: chrome.i18n.getMessage("unit_none"),
  },
  currency: {
    title: chrome.i18n.getMessage("currency_title"),
    typeLabel: chrome.i18n.getMessage("currency_typeLabel"),
    rounded: chrome.i18n.getMessage("currency_highlight_rounded"),
    dashed: chrome.i18n.getMessage("currency_highlight_dashed"),
    none: chrome.i18n.getMessage("currency_highlight_none"),
    credit: chrome.i18n.getMessage("currency_credit"),
  },
  tz: {
    title: chrome.i18n.getMessage("tz_title"),
    comingSoon: chrome.i18n.getMessage("tz_comingSoon"),
    rounded: chrome.i18n.getMessage("tz_highlight_rounded"),
    dashed: chrome.i18n.getMessage("tz_highlight_dashed"),
    none: chrome.i18n.getMessage("tz_highlight_none"),
    credit: chrome.i18n.getMessage("tz_credit"),
  },
  colour: {
    unitTitle: chrome.i18n.getMessage("unit_colour_title"),
    currencyTitle: chrome.i18n.getMessage("currency_colour_title"),
    tzTitle: chrome.i18n.getMessage("tz_colour_title"),
    none: chrome.i18n.getMessage("colour_none"),
    clear: chrome.i18n.getMessage("colour_clear"),
    base: chrome.i18n.getMessage("colour_base"),
    special: chrome.i18n.getMessage("colour_special"),
    rounded: chrome.i18n.getMessage("colour_rounded"),
    pre: chrome.i18n.getMessage("colourSelection_pre"),
    post: chrome.i18n.getMessage("colourSelection_post")
  },
  noReplace: {
    title: chrome.i18n.getMessage("noReplace_title"),
    unitTitle: chrome.i18n.getMessage("noReplace_unit_title"),
    currencyTitle: chrome.i18n.getMessage("noReplace_currency_title"),
    nrOff: chrome.i18n.getMessage("noReplace_nrOff"),
    nrOn: chrome.i18n.getMessage("noReplace_nrOn"),
  },
  whitelist: {
    addLabel: chrome.i18n.getMessage("whitelist_addLabel"),
    removeLabel: chrome.i18n.getMessage("whitelist_removeLabel"),
    addPlaceHolder: chrome.i18n.getMessage("whitelist_addPlaceHolder"),
    addButtonText: chrome.i18n.getMessage("whitelist_addButtonText"),
    addHelpText: chrome.i18n.getMessage("whitelist_addHelpText"),
    removeButtonText: chrome.i18n.getMessage("whitelist_removeButtonText"),
  },
  experimental: {
    title: chrome.i18n.getMessage("experimental_title"),
    disableIn: chrome.i18n.getMessage("experimental_disableIn"),
    disableQuotes: chrome.i18n.getMessage("experimental_disableQuotes"),
    disableTo: chrome.i18n.getMessage("experimental_disableTo"),
    lbSt: chrome.i18n.getMessage("experimental_lbSt"),
    showTooltip: chrome.i18n.getMessage("experimental_showTooltip"),
    showUnitRate: chrome.i18n.getMessage("experimental_showUnitRate"),
    showContextMenu: chrome.i18n.getMessage("experimental_showContextMenu"),
    exceptedTitle: chrome.i18n.getMessage("experimental_exceptedTitle"),
    URL: chrome.i18n.getMessage("experimental_URL"),
    currURLs: chrome.i18n.getMessage("experimental_currURLs"),
  },
  settingSaved: {
    common: chrome.i18n.getMessage("settingSaved_common"),
    colon: chrome.i18n.getMessage("settingSaved_colon"),
    dot: chrome.i18n.getMessage("settingSaved_dot"),
    colour: chrome.i18n.getMessage("settingSaved_colour"),
    clear: chrome.i18n.getMessage("settingSaved_clear"),
    installMsg: chrome.i18n.getMessage("settingSaved_installMsg"),
    updateMsg: chrome.i18n.getMessage("settingSaved_updateMsg"),
    close: chrome.i18n.getMessage("settingSaved_closeButton")
  },
  descrStr: {
    us_button: chrome.i18n.getMessage("descr_us"),
    colour_button: chrome.i18n.getMessage("descr_colour"),
    noReplace_button: chrome.i18n.getMessage("descr_nr"),
    extras_button: chrome.i18n.getMessage("descr_extras"),
    currency_button: chrome.i18n.getMessage("descr_currency"),
    timeZone_button: chrome.i18n.getMessage("descr_timeZone"),
    whitelist_button: chrome.i18n.getMessage("descr_whitelist"),
    feedback_button: chrome.i18n.getMessage("descr_feedback"),
  }
};


$(document).ready(function(){
  
  service = analytics.getService("autoConvert");

  // Disable GA if using local extension (Extra conditions to prevent errors when page opened directly outside of chromeApp for dev)
  service.getConfig().addCallback(function(config){
    if(chrome && chrome.runtime && chrome.runtime.id && chrome.runtime.id == localExtId){
      config.setTrackingPermitted(false);
    } else {
      config.setTrackingPermitted(true);
    }
  });
  tracker = service.getTracker(GA_CODE);
  tracker.sendAppView("tabUnit");
  
  if(localStorage["optionsOpenType"] !== "none") optionsOpenMessage();

  if(localStorage["syncSettings"] == "true"){
    s = chrome.storage.sync;
  } else {
    s = chrome.storage.local;
  }
  s.get(function(ls){
    lsVars = ls;
    // chrome.storage.onChanged.addListener(updateLocalVariables);
    //  Setup the sidebar menu  
    $("#settingsTitle").text(strings.menu.title);
    $("#us_button").text(strings.menu.us);
    $("#colour_button").text(strings.menu.colour);
    $("#noReplace_button").text(strings.menu.noReplace);
    $("#extras_button").text(strings.menu.extras);
    $("#currency_button").text(strings.menu.currency);
    $("#timeZone_button").html(strings.menu.timeZone);
    $("#feedback_button").text(strings.menu.feedback);
    $("#whitelist_button").text(strings.menu.whitelist);

    // Setup initial descrPane string
    $("div#descrPane").html(strings.descrStr.us_button);
    $("a[data-toggle='pill']").on("shown", function (e) {
      var paneId = $(this).children("h3").attr("id").replace(/#/ig,"");
      tracker.sendAppView(paneId);
      $("div#descrPane").html(strings.descrStr[paneId]);
      if(paneId == "timeZone_button"){
        $("div#descrPane").removeClass("alert-info");
        $("div#descrPane").addClass("alert-error");
      } else {
        $("div#descrPane").addClass("alert-info");
        $("div#descrPane").removeClass("alert-error");
      }
    });
    
    // Setup syncSettings button
    // $(".btn-toggle #settingsSync"+( ? "Off" : "On")).toggleClass("active");
    if(localStorage["syncSettings"] == "true"){
      $("#settingsSyncOn").addClass("btn-success active");
      $("#settingsSyncOff").removeClass("btn-danger active");
    } else {
      $("#settingsSyncOn").removeClass("btn-success active");
      $("#settingsSyncOff").addClass("btn-danger active");
    }
    // $(".btn-toggle").find(".active").click();

    $("#settingsSync").click(syncSettingsClickHandler);
    
    
    // Setup unitSystem tab content
    $("#unitTitle").text(strings.unit.title);
    $("#metric>label").text(strings.unit.metric);
    $("#imperial>label").text(strings.unit.imperial);
    
    $("#moreBtn").html(strings.unit.more);
    $("#lessBtn").html(strings.unit.less);
    
    $("#labelDistance").text(strings.unit.distance);
    $("label[for='duImp']").text(strings.unit.duImp);
    $("label[for='duMet']").text(strings.unit.duMet);
    $("label[for='duNone']").text(strings.unit.none);
    
    $("#labelArea").text(strings.unit.area);
    $("label[for='arImp']").text(strings.unit.arImp);
    $("label[for='arMet']").text(strings.unit.arMet);
    $("label[for='arNone']").text(strings.unit.none);
    
    $("#labelVolume").text(strings.unit.volume);
    $("label[for='volImp']").text(strings.unit.volImp);
    $("label[for='volMet']").text(strings.unit.volMet);
    $("label[for='volNone']").text(strings.unit.none);
    
    $("#labelWeight").text(strings.unit.weight);
    $("label[for='wtImp']").text(strings.unit.wtImp);
    $("label[for='wtMet']").text(strings.unit.wtMet);
    $("label[for='wtNone']").text(strings.unit.none);
    
    $("#labelEnergy").text(strings.unit.energy);
    $("label[for='enImp']").text(strings.unit.enImp);
    $("label[for='enMet']").text(strings.unit.enMet);
    $("label[for='enNone']").text(strings.unit.none);
    
    $("#labelPower").text(strings.unit.power);
    $("label[for='pwImp']").text(strings.unit.pwImp);
    $("label[for='pwMet']").text(strings.unit.pwMet);
    $("label[for='pwNone']").text(strings.unit.none);
    
    $("#labelTemperature").text(strings.unit.temperature);
    $("label[for='tpImp']").text(strings.unit.tpImp);
    $("label[for='tpMet']").text(strings.unit.tpMet);
    $("label[for='tpNone']").text(strings.unit.none);
    
    $("#labelTorque").text(strings.unit.torque);
    $("label[for='tqImp']").text(strings.unit.tqImp);
    $("label[for='tqMet']").text(strings.unit.tqMet);
    $("label[for='tqNone']").text(strings.unit.none);
    
    setUnitDetails();
    $("div.unitCheckbox").click(unitClickHandler);
    $("div.unitTypeContent input").click(unitDetailClickHandler);
    
    // Setup colour tab content
    // Add column titles
    $("#unitColourTitle").text(strings.colour.unitTitle);
    $("#currencyColourTitle").text(strings.colour.currencyTitle);
    $("#tzColourTitle").text(strings.colour.tzTitle);
    
    // Add colour box strings
    $("#unit-noColour, #currency-noColour, #tz-noColour").text(strings.colour.none);
    // $("#unit-lightYellow, #currency-lightYellow, #tz-lightYellow").text(strings.colour.clear);
    $("#unit-specialColour, #currency-specialColour, #tz-specialColour").text(strings.colour.special);
    $("#unit-defaultColour, #currency-defaultColour, #tz-defaultColour").text(strings.colour.clear);
    // $("#unit-defaultColour, #currency-defaultColour, #tz-defaultColour").text(strings.colour.base);
    $("#unit-azure, #currency-azure, #tz-azure").text(strings.colour.clear);
    $("#unit-paleGreen, #currency-paleGreen, #tz-paleGreen").text(strings.colour.clear);
    $("#unit-lightBlue, #currency-lightBlue, #tz-lightBlue").text(strings.colour.clear);
    $("#unit-lightSalmon, #currency-lightSalmon, #tz-lightSalmon").text(strings.colour.clear);
    $("#unit-lightGray, #currency-lightGray, #tz-lightGray").text(strings.colour.clear);
    
    // Mark selected colours
    $(".colourCheckbox#unit-"+lsVars["unitColour"]).html(strings.colour.pre + $(".colourCheckbox#unit-" + lsVars["unitColour"]).html() + strings.colour.post).addClass("checked");
    $(".colourCheckbox#currency-"+lsVars["currencyColour"]).html(strings.colour.pre + $(".colourCheckbox#unit-" + lsVars["currencyColour"]).html() + strings.colour.post).addClass("checked");
    $(".colourCheckbox#tz-"+lsVars["tzColour"]).html(strings.colour.pre + $(".colourCheckbox#unit-" + lsVars["tzColour"]).html() + strings.colour.post).addClass("checked");
    
    $("#unitLivePreviewStrong").html($("#unitLivePreviewStrong").html()+ (lsVars["us"]["distance"] == "metric" ? "km&nbsp;" : "miles&nbsp;"));
    
    // Set state for selected highlight type
    $("#unit-" + lsVars["unitHighlight"]).button("toggle");
    $("#currency-" + lsVars["currencyHighlight"]).button("toggle");
    $("#tz-" + lsVars["tzHighlight"]).button("toggle");

    // Add highight colour & type to livePreview
    $("#unitLivePreviewStrong").addClass(lsVars["unitHighlight"] + " " + colourdivtext[lsVars["unitColour"]][2]);
    $("#currencyLivePreviewStrong, #currencyTabLivePreviewStrong").addClass(lsVars["currencyHighlight"] + " " + colourdivtext[lsVars["currencyColour"]][2]);
    $("#tzLivePreviewStrong, #tzTabLivePreviewStrong").addClass(lsVars["tzHighlight"] + " " + colourdivtext[lsVars["tzColour"]][2]);
    
    $(".colourCheckbox").click(colourClickHandler);
    $(".highlightType .btn").click(highlightTypeHandler);
    

    // Setup noreplace tab content  
    $("#nrTitle").text(strings.noReplace.unitTitle);
    $("#currTitle").text(strings.noReplace.currencyTitle);
    $("label[for='noReplaceOff']").html($("label[for='noReplaceOff']").html() + strings.noReplace.nrOff);
    $("label[for='currReplaceOff']").html($("label[for='currReplaceOff']").html() + strings.noReplace.nrOff);
    $("label[for='noReplaceOn']").html($("label[for='noReplaceOn']").html() + strings.noReplace.nrOn);
    $("label[for='currReplaceOn']").html($("label[for='currReplaceOn']").html() + strings.noReplace.nrOn);
    
    $("input[name='noReplace'][value='"+lsVars["noReplace"]+"']").prop("checked", true);
    $("label.noReplaceLabel[for='noReplace"+(lsVars["noReplace"] ? "On" : "Off")+"']").addClass("checked");
    $("input#currReplace"+(!lsVars["currencyReplace"] ? "On" : "Off")).prop("checked", true);
    $("label.currReplaceLabel[for='currReplace"+(!lsVars["currencyReplace"] ? "On" : "Off")+"']").addClass("checked");
    $("input[name='noReplace']").click(nrClickHandler);
    $("input[name='currReplace']").click(currReplaceClickHandler);
    
    
    // Setup extras tab content  
    $("#extrasTitle").text(strings.noReplace.title);
    $("label[for='disableIn']").html(strings.experimental.disableIn);
    $("label[for='disableTo']").html(strings.experimental.disableTo);
    $("label[for='disableQuotes']").html(strings.experimental.disableQuotes);
    $("label[for='lbSt']").html(strings.experimental.lbSt);
    $("label[for='showTooltip']").html(strings.experimental.showTooltip);
    $("label[for='showUnitRate']").html(strings.experimental.showUnitRate);
    $("label[for='showContextMenu']").html(strings.experimental.showContextMenu);
    
    $("input[id='disableIn']").prop("checked",lsVars["disableIn"]);
    $("input[id='disableQuotes']").prop("checked",lsVars["disableQuotes"]);
    $("input[id='disableTo']").prop("checked",lsVars["disableTo"]);
    $("input[id='lbSt']").prop("checked",lsVars["lbSt"]);
    $("input[id='showTooltip']").prop("checked",lsVars["showTooltip"]);
    $("input[id='showUnitRate']").prop("checked",lsVars["showUnitRate"]);
    $("input[id='showContextMenu']").prop("checked",lsVars["showContextMenu"]);
    
    if(lsVars["disableIn"]){
      $("label.moreOptionsLabel[for=\'disableIn\']").addClass("checked");
    } else {
      $("label.moreOptionsLabel[for=\'disableIn\']").removeClass("checked");
    }
    if(lsVars["disableQuotes"]){
      $("label.moreOptionsLabel[for=\'disableQuotes\']").addClass("checked");
    } else {
      $("label.moreOptionsLabel[for=\'disableQuotes\']").removeClass("checked");
    }
    if(lsVars["disableTo"]){
      $("label.moreOptionsLabel[for=\'disableTo\']").addClass("checked");
    } else {
      $("label.moreOptionsLabel[for=\'disableTo\']").removeClass("checked");
    }
    if(lsVars["lbSt"]){
      $("label.moreOptionsLabel[for=\'lbSt\']").addClass("checked");
    } else {
      $("label.moreOptionsLabel[for=\'lbSt\']").removeClass("checked");
    }
    if(lsVars["showTooltip"]){
      $("label.moreOptionsLabel[for=\'showTooltip\']").addClass("checked");
    } else {
      $("label.moreOptionsLabel[for=\'showTooltip\']").removeClass("checked");
    }
    if(lsVars["showUnitRate"]){
      $("label.moreOptionsLabel[for=\'showUnitRate\']").addClass("checked");
    } else {
      $("label.moreOptionsLabel[for=\'showUnitRate\']").removeClass("checked");
    }
    if(lsVars["showContextMenu"]){
      $("label.moreOptionsLabel[for=\'showContextMenu\']").addClass("checked");
    } else {
      $("label.moreOptionsLabel[for=\'showContextMenu\']").removeClass("checked");
    }

    $("div.moreOptionsItem input:checkbox").click(extrasClickHandler);
    
    
    // Setup currency tab content  
    $("#currencyTitle").text(strings.currency.title);
    
    setupCurrencies();
    $("#currSymbolTypeLabel").html(strings.currency.typeLabel);
    $("#currencyCredit").text(strings.currency.credit);
    
    if(lsVars["currencyStyle"] == 2){
      $("#currSymbolTypeLabel").addClass("checked");
      $("input#currSymbolType").prop("checked", true);
    } else {
      $("input#currSymbolType").prop("checked", false);
    }
    $("#currencyLivePreviewSymbol, #currencyTabLivePreviewSymbol").html(currencyBase[lsVars["currency"]][lsVars["currencyStyle"]]);
    if(lsVars["currencystate"] == "off"){
      $(".currencyCheckbox#none").addClass("checked");
    } else {
      $(".currencyCheckbox#"+lsVars["currency"]).addClass("checked");
    }
    $("#currSymbolType").click(currencyStyleClickHandler);
    $("#otherCurrencyForm form").submit(function(){
      // if valid currency selected, add it to list, else show error message (use bootstrap label/infomessage)
      
      $("#otherCurrencySuccess").addClass("hide");
      $("#otherCurrencyError").removeClass("hide");
      return false;
    });
    
    
    // Setup currency tab content  
    setupTZs();
    $("#tzTitle").text(strings.tz.comingSoon);
    $("#tzCredit").text(strings.tz.credit);
    
    $("#tzLivePreviewSymbol, #tzTabLivePreviewSymbol").html(tzBase[lsVars["tz"]][1]);
    // $("#tzLivePreview strong, #tzTabLivePreview strong").addClass(lsVars["tzHighlight"]).addClass(lsVars["tzColour"]);
    if(lsVars["tzState"] == "off"){
      $(".tzCheckbox#none").addClass("checked");
    } else {
      $(".tzCheckbox#"+lsVars["tz"]).addClass("checked");
    }
    $("#otherTzForm form").submit(function(){
      // if valid currency selected, add it to list, else show error message (use bootstrap label/infomessage)
      $("#otherTzSuccess").addClass("hide");
      $("#otherTzError").removeClass("hide");
      return false;
    });
    
    
    // Setup whitelist tab content  
    $("label#whitelistInputLabel").text(strings.whitelist.addLabel);
    $("label#whitelistSelectLabel").text(strings.whitelist.removeLabel);
    $("button#whitelistAddButton").text(strings.whitelist.addButtonText);
    $("button#whitelistRemoveButton").text(strings.whitelist.removeButtonText);
    $("p#wishlistAddHelp").text(strings.whitelist.addHelpText);
    $("input#whitelistInput").attr("placeholder",strings.whitelist.addPlaceHolder);
    
    var tempWhitelist = JSON.parse(localStorage["whitelist"]);
    $("#whitelistSelect").html("");
    for (var i = tempWhitelist.length-1; i >= 0; i--) {
      $("#whitelistSelect").prepend($("<option></option>").val(i).text(tempWhitelist[i]));
    }
    
    $("#whitelistAddForm").on("submit",function(e){
      e.preventDefault();
      var tempURL = $("#whitelistInput").val();
      if(tempURL !== ""){
        var tempWhitelist = JSON.parse(localStorage["whitelist"]);
        if(tempWhitelist.indexOf(tempURL) > -1){
          // If the value is already in list, ignore showing info message      
          $("#whitelistInput").val("");
        } else {
        // Else, add value to top of list and insert into the select tab
          tempWhitelist.push(tempURL);
          localStorage["whitelist"] = JSON.stringify(tempWhitelist);
          localStorage["whitelistRegex"] = makeWhitelistRegex();
            $("#whitelistSelect").append("<option value=\""+(tempWhitelist.length-1)+"\">"+tempURL+"</option>");
            // $("div#saveStatus").fadeOut(200, function(){$("div#saveStatus").html(strings.settingSaved.close + "Added to whitelist").fadeIn(500,function(){$(this).fadeOut(1000);});});
            showSettingSavedNotification(strings.settingSaved.close + "Added to whitelist");

            propagateSetting({
              "type": "whitelist",
              "value": localStorage["whitelistRegex"]
            });
            trackButton("whitelist", "added", tempURL);
        }
        $("#whitelistInput").val("");
      }
      return false;
    });
    
    $("#whitelistRemoveForm").on("submit",function(e){
      e.preventDefault();
      // Get ids of selected item(s), remove from localStorage & select-options
      if($("#whitelistSelect option:selected").length > 0){
        var tempWhitelist = JSON.parse(localStorage["whitelist"]);
        var removedArr = [];

        $("#whitelistSelect option:selected").each(function(){
          removedArr.push($(this).val());
        });
        $("#whitelistSelect").html("");
        
        for (var i = tempWhitelist.length-1; i >= 0; i--) {
          if(removedArr.indexOf(i.toString()) > -1) tempWhitelist.splice(i,1);
        }

        for (var i = 0; i < tempWhitelist.length; i++) $("#whitelistSelect").append($("<option></option>").val(i).text(tempWhitelist[i]));
        
        localStorage["whitelist"] = JSON.stringify(tempWhitelist);
        localStorage["whitelistRegex"] = makeWhitelistRegex();
      
        propagateSetting({
          "type": "whitelist",
          "value": localStorage["whitelistRegex"]
        });
        // $("div#saveStatus").fadeOut(200, function(){$("div#saveStatus").html(strings.settingSaved.close + "Removed from whitelist").fadeIn(500,function(){$(this).fadeOut(1000);});});
        showSettingSavedNotification(strings.settingSaved.close + "Removed from whitelist");

        trackButton("whitelist", "removed", JSON.stringify(removedArr));
      }
      return false;
    });
    
    
    $("a.extLinks").click(function(){
      trackButton("website_click", $(this).attr(id), "Options Page Menu Bar");
    });
    
    
    $("span.moreLessBtn").click(function(){
      var btnId = $(this).attr("id");
      
      //    switchMoreLessBtn
      if(btnId == "moreBtn"){
        $("span#moreBtn").addClass("hide");
        $("span#lessBtn").removeClass("hide");
      } else {
        $("span#moreBtn").removeClass("hide");
        $("span#lessBtn").addClass("hide");
      }
    
      //    switchUnitDetailsPan
      $("div#unitDetails").slideToggle("fast");
      return true;
    });

    
    $("#settingSyncForm").on("submit",function(e){
      e.preventDefault();
    });


    // For dev/testing only, disable on launch
    // $("#tabTimeZoneLink").tab("show");
  });
});


function setupCurrencies(){
  $(".currencyOptions#currencyList").html("");
  $("div.currencyOptions#otherCurrencyForm").addClass("hide");
  var topCurrencies = lsVars["topCurrencies"];
  for(var i = 0; i < topCurrencies.length; i++){
    var tempCurrency = topCurrencies[i];
    $(".currencyOptions#currencyList").append(
      "<div class=\"currencyCheckbox\" id=\"" + tempCurrency + "\">"
        + chrome.i18n.getMessage("currency_" + tempCurrency)
        + "</div>"
    );
  }
  $(".currencyOptions#currencyList").append(
    "<div class=\"currencyCheckbox\" id=\"otherCurrencies\">"
      + chrome.i18n.getMessage("currency_other")
      + "</div>"
  );
  
  $(".currencyOptions#currencyList").append(
    "<div class=\"currencyCheckbox\" id=\"none\">"
      + chrome.i18n.getMessage("currency_none")
      + "</div>"
  );
  $("div.currencyCheckbox:not(#otherCurrencies)").click(currencyClickHandler);
  $("div.currencyCheckbox#otherCurrencies").click(otherCurrencyClickHandler);
}


function setupTZs(){
  $(".tzOptions#tzList").html("");
  $("div.tzOptions#otherTzForm").addClass("hide");
  var topTzs = lsVars["topTzs"];
  for(var i = 0; i < topTzs.length; i++){
    var tempTz = topTzs[i];
    $(".tzOptions#tzList").append(
      "<div class=\"tzCheckbox\" id=\"" + tempTz + "\">"
      + chrome.i18n.getMessage("tz_" + tempTz)
      + "</div>"
    );
  }
  
  $(".tzOptions#tzList").append(
    // "<div class=\"tzCheckbox disabled\" id=\"otherTzs\">"
    "<div class=\"tzCheckbox\" id=\"otherTzs\">"
    + chrome.i18n.getMessage("tz_other")
    + "</div>"
  );
  $(".tzOptions#tzList").append(
    "<div class=\"tzCheckbox\" id=\"none\">"
    + chrome.i18n.getMessage("tz_none")
    + "</div>"
  );
  $(".tzCheckbox:not(#otherTzs)").click(tzClickHandler);
  $(".tzCheckbox#otherTzs").click(otherTzClickHandler);
}


function syncSettingsClickHandler(e){
  e.preventDefault();
  $(this).find(".btn").toggleClass("active");
  var newSyncSettings = $(this).find(".active").attr("id") === "settingsSyncOn";
  console.log("syncSettings: " + newSyncSettings);

  // Change button state
  if(newSyncSettings){
    $("#settingsSyncOn").addClass("btn-success");
    $("#settingsSyncOff").removeClass("btn-danger");
  } else {
    $("#settingsSyncOn").removeClass("btn-success");
    $("#settingsSyncOff").addClass("btn-danger");
  }
  
  // Change s & move storage values
  if(newSyncSettings.toString() !== localStorage["syncSettings"]){
    if(newSyncSettings){
      chrome.storage.local.get(function(ls){
        // chrome.storage.local.clear(function(){
          chrome.storage.sync.clear(function(){
            chrome.storage.sync.set(ls, function(){
              if(chrome.runtime.lastError){
                console.log("Error changing storage:" + chrome.runtime.lastError.message);
              } else {
                s = chrome.storage.sync;
                localStorage["syncSettings"] = newSyncSettings;
                propagateSetting({
                  "type": "syncSettings",
                  "value": newSyncSettings
                });
                chrome.storage.local.clear();
              }
            });
          });
        // });
      });
    } else {
      chrome.storage.sync.get(function(ls){
        // chrome.storage.sync.clear(function(){
          chrome.storage.local.clear(function(){
            chrome.storage.local.set(ls, function(){
              if(chrome.runtime.lastError){
                console.log("Error changing storage:" + chrome.runtime.lastError.message);
              } else {
                s = chrome.storage.local;
                localStorage["syncSettings"] = newSyncSettings;
                propagateSetting({
                  "type": "syncSettings",
                  "value": newSyncSettings
                });
                chrome.storage.sync.clear();
              }
            });
          });
        // });
      });
    }
  }
  $(this).find(".btn").toggleClass("btn-default");
}


function unitClickHandler(){
  var newUnit = $(this).attr("id");
  if(newUnit != getUS()){
    var us = {
      "distance": newUnit,
      "area": newUnit,
      "volume": newUnit,
      "weight": newUnit,
      "energy": newUnit,
      "power": newUnit,
      "temperature": newUnit,
      "torque": newUnit,
    };
    lsVars["us"] = us;
    localStorage["regex"] = unitRegex();
    setUnitDetails();
    
    s.set({"us": us},function(){
      // $("div#saveStatus").fadeOut(200, function(){$("div#saveStatus").html(strings.settingSaved.close + strings.settingSaved.common + strings.settingSaved.colon + newUnit.charAt(0).toUpperCase() + newUnit.substr(1)).fadeIn(500,function(){$(this).fadeOut(1000);});});
      showSettingSavedNotification(strings.settingSaved.close + strings.settingSaved.common + strings.settingSaved.colon + newUnit.charAt(0).toUpperCase() + newUnit.substr(1));
      
      trackButton("unitSystem", newUnit);
      trackButton("distanceUnit", newUnit);
      trackButton("areaUnit", newUnit);
      trackButton("volumeUnit", newUnit);
      trackButton("weightUnit", newUnit);
      trackButton("energyUnit", newUnit);
      trackButton("powerUnit", newUnit);
      trackButton("tempUnit", newUnit);
      trackButton("torqUnit", newUnit);
      propagateSetting({
        "type": "unitSystem",
        "value": localStorage["regex"]
      });
    });
  }
}


function unitDetailClickHandler(){
  var unitName = $(this).attr("name");
  var unitValue = $(this).val();
  var us = lsVars["us"];
  
  if(us[unitName] === unitValue) return;
  
  us[unitName] = unitValue;
  lsVars["us"] = us;
  localStorage["regex"] = unitRegex();
  
  setUnitDetails(); // --- if, after change, all unit types are of same unit system, highlight unit system
  
  $("input[name='"+unitName+"']").prop("checked",false);
  $("input[name='"+unitName+"'][value='"+unitValue+"']").prop("checked",true);
  

  s.set({"us": us}, function(){
    // $("div#saveStatus").fadeOut(200, function(){$("div#saveStatus").html(strings.settingSaved.close + strings.settingSaved.common + strings.settingSaved.dot).fadeIn(500,function(){$(this).fadeOut(1000);});});
    showSettingSavedNotification();


    trackButton(unitName, unitValue);
    propagateSetting({
      "type": "unitSystem",
      "value": localStorage["regex"]
    });
  });
}


function colourClickHandler(){
  var newColour = $(this).attr("id").split("-");
  var colourElement = newColour[0]+"Colour";

  if(newColour[1] != lsVars[colourElement]){
    var oldColour = lsVars[colourElement];
    $(".colourCheckbox#"+newColour[0]+"-"+oldColour).html(colourdivtext[oldColour][0]);
    $(".colourCheckbox#"+newColour[0]+"-"+newColour[1]).html(strings.colour.pre+$(".colourCheckbox#"+newColour[0]+"-"+newColour[1]).html()+strings.colour.post);
    $(".colourCheckbox#"+newColour[0]+"-"+oldColour).removeClass("checked");
    $(".colourCheckbox#"+newColour[0]+"-"+newColour[1]).addClass("checked");
    $("#"+newColour[0]+"LivePreviewStrong").removeClass(colourdivtext[oldColour][2]).addClass(colourdivtext[newColour[1]][2]);
    // $("#"+newColour[0]+"LivePreview strong").removeClass(colourdivtext[oldColour][2]).addClass(colourdivtext[newColour[1]][2]);
    $("#"+newColour[0]+"TabLivePreviewStrong").removeClass(colourdivtext[oldColour][2]).addClass(colourdivtext[newColour[1]][2]);

    // if(newColour[0] === "tz") $("#"+newColour[0]+"TabLivePreview *").removeClass(colourdivtext[oldColour][2]).addClass(colourdivtext[newColour[1]][2]);
    
    var tempColourObj = {};
    tempColourObj[colourElement] = newColour[1];
    lsVars[colourElement] = newColour[1];
    s.set(tempColourObj, function(){
      trackButton(colourElement, newColour[1]);
    });
  }
}


function highlightTypeHandler(){
  var newHighlight = $(this).attr("id").split("-"); // [0] is type (unit,currency,tz), [1] is value (acdashed,acround,acnone)
  var highlightElement = newHighlight[0]+"Highlight";
  
  if(newHighlight[1] != lsVars[highlightElement]){
    var oldHighlight = lsVars[highlightElement];
    
    $("#"+newHighlight[0]+"LivePreviewStrong").removeClass(oldHighlight).addClass(newHighlight[1]);
    // $("#"+newHighlight[0]+"LivePreview strong").removeClass(oldHighlight).addClass(newHighlight[1]);
    $("#"+newHighlight[0]+"TabLivePreviewStrong").removeClass(oldHighlight).addClass(newHighlight[1]);
    // if(newHighlight[0] === "tz") $("#"+newHighlight[0]+"TabLivePreview *").removeClass(oldHighlight).addClass(newHighlight[1]);

    var tempHighlightObj = {};
    tempHighlightObj[highlightElement] = newHighlight[1];
    lsVars[highlightElement] = newHighlight[1];
    s.set(tempHighlightObj, function(){
      trackButton(highlightElement, newHighlight[1]);
    });
  }
}


function nrClickHandler(){
  var tempStatus = JSON.parse($(this).val());
  if(tempStatus != lsVars["noReplace"]){
    $("label.noReplaceLabel").removeClass("checked");
    $("label.noReplaceLabel[for='noReplace"+(tempStatus ? "On" : "Off")+"']").addClass("checked");
    
    lsVars["noReplace"] = tempStatus;
    
    s.set({"noReplace": tempStatus}, function(){
      // $("div#saveStatus").fadeOut(200, function(){$("div#saveStatus").html(strings.settingSaved.close + strings.settingSaved.common + strings.settingSaved.dot).fadeIn(500,function(){$(this).fadeOut(1000);});});
      showSettingSavedNotification();


      trackButton("noReplace", tempStatus);
    });
  }
}


function currReplaceClickHandler(){
  var tempStatus = JSON.parse($(this).val());
  if(tempStatus != lsVars["currencyReplace"]){
    $("label.currReplaceLabel").removeClass("checked");
    $("label.currReplaceLabel[for='currReplace"+(!tempStatus ? "On" : "Off")+"']").addClass("checked");
    
    lsVars["currencyReplace"] = tempStatus;
    
    s.set({"currencyReplace": tempStatus}, function(){
      // $("div#saveStatus").fadeOut(200, function(){$("div#saveStatus").html(strings.settingSaved.close + strings.settingSaved.common + strings.settingSaved.dot).fadeIn(500,function(){$(this).fadeOut(1000);});});
      showSettingSavedNotification();

      trackButton("currReplace", tempStatus);
    });
  }
}


function extrasClickHandler(){
  var tempId = $(this).attr("id");
  var tempStatus = $(this).prop("checked");
  var tempObj = {};
  tempObj[tempId] = tempStatus;
  if(tempStatus !== lsVars[tempId]){
    lsVars[tempId] = tempStatus;
    
    if(tempStatus){
      $("label.moreOptionsLabel[for=\'"+tempId+"\']").addClass("checked");
    } else {
      $("label.moreOptionsLabel[for=\'"+tempId+"\']").removeClass("checked");
    }
    
    s.set(tempObj, function(){
      // $("div#saveStatus").fadeOut(200, function(){$("div#saveStatus").html(strings.settingSaved.close + strings.settingSaved.common + strings.settingSaved.dot).fadeIn(500,function(){$(this).fadeOut(1000);});});
      showSettingSavedNotification();

      trackButton(tempId, tempStatus);

      if (tempId === "showContextMenu") {
        var bgPage = chrome.extension.getBackgroundPage();
        bgPage.setContextMenu();
      }
    });
  }
}


function currencyClickHandler(){
  var newCurrency = $(this).attr("id");
  var oldCurrency = lsVars["currency"];
  
  if(newCurrency !== oldCurrency){
    lsVars["currency"] = newCurrency;
    
    $("div.currencyCheckbox#"+oldCurrency).removeClass("checked");
    $("div.currencyCheckbox#"+newCurrency).addClass("checked");
    
    if(newCurrency !== "none"){
      localStorage["currRegex"] = currencyRegex();
      
      $("#currencyLivePreviewSymbol, #currencyTabLivePreviewSymbol").html(currencyBase[newCurrency][lsVars["currencyStyle"]]);
    }
    
    s.set({
      "currency": newCurrency,
    }, function(){
      // $("div#saveStatus").fadeOut(200, function(){$("div#saveStatus").html(strings.settingSaved.close + strings.settingSaved.common + strings.settingSaved.dot).fadeIn(500,function(){$(this).fadeOut(1000);});});
      showSettingSavedNotification();

      
      propagateSetting({
        "type": "currency",
        "value": localStorage["currRegex"],
      });
      trackButton("currency", newCurrency);
    });
  }
}


function otherCurrencyClickHandler(){
  if($("#otherCurrencyForm").hasClass("hide")){
    $("#otherCurrencyForm").removeClass("hide");
  } else {
    $("#otherCurrencyForm").addClass("hide");
  }
  var validCurrencyArray = [];
  for(var key in currencyStrings){
    validCurrencyArray.push(key);
  }
  
  $("#otherCurrencyInput").typeahead({
    source: validCurrencyArray,
    items: 8,
    updater:function (item) {
      // Add currency to list, show status message.
      $("#otherCurrencySuccess").removeClass("hide");
      $("#otherCurrencyError").addClass("hide");
      
      // Get currency code for selected currency
      var selectedCurr = currencyStrings[item];
      if(selectedCurr){
        var topCurrencies = lsVars["topCurrencies"];
        if($.inArray(selectedCurr, topCurrencies) < 0){
          // If selected currency not in list, add it to list.
          topCurrencies.pop();
          topCurrencies.unshift(selectedCurr);
          s.set({"topCurrencies": topCurrencies}, function(){
            // Now rebuild the list on screen and reattach the click handlers
            setupCurrencies();
            // Select currency by firing a click event on it
            $(".currencyCheckbox#" + selectedCurr).click();
          });
        } else {
          // Select currency by firing a click event on it
          $(".currencyCheckbox#" + selectedCurr).click();
        }
      }
    }
  }).focus();
}


function currencyStyleClickHandler(){
  var tempState = $(this).prop("checked");
  var currencyStyle = tempState ? 2 : 1;
  
  lsVars["currencyStyle"] = currencyStyle;
  if(tempState){
    $("#currSymbolTypeLabel").addClass("checked");
    trackButton("currencyStyle", "symbols");
  } else {
    $("#currSymbolTypeLabel").removeClass("checked");
    trackButton("currencyStyle", "alphabets");
  }
  $("#currencyLivePreviewSymbol, #currencyTabLivePreviewSymbol").html(currencyBase[lsVars["currency"]][currencyStyle]);
  
  s.set({"currencyStyle": currencyStyle}, function(){
    trackButton("currencyStyle", tempState ? "symbols" : "alphabets");
  });
}


function tzClickHandler(){
  var newTz = $(this).attr("id");
  var oldTz = lsVars["tz"];
  
  if(newTz !== oldTz){
    lsVars["tz"] = newTz;
    
    $(".tzCheckbox#"+oldTz).removeClass("checked");
    $(".tzCheckbox#"+newTz).addClass("checked");
    $("#tzLivePreviewSymbol, #tzTabLivePreviewSymbol").html(tzBase[newTz][1]);
    
    if(newTz !== "none"){
      localStorage["tzRegex"] = tzRegex();
    }
    
    s.set({
      "tz": newTz,
    }, function(){
      // $("div#saveStatus").fadeOut(200, function(){$("div#saveStatus").html(strings.settingSaved.close + strings.settingSaved.common + strings.settingSaved.dot).fadeIn(500,function(){$(this).fadeOut(1000);});});
      showSettingSavedNotification();

      propagateSetting({
        "type": "tz",
        "value": localStorage["tzRegex"],
      });
      trackButton("tz", newTz);
    });
  }
}


function otherTzClickHandler(){
  if($("#otherTzForm").hasClass("hide")){
    $("#otherTzForm").removeClass("hide");
  } else {
    $("#otherTzForm").addClass("hide");
  }
  var validTzArray = [];
  for(var key in tzStrings){
    validTzArray.push(key);
  }
  
  $("#otherTzInput").typeahead({
    source: validTzArray,
    items: 8,
    updater:function (item) {
      // Add tz to list, show status message.
      $("#otherTzSuccess").removeClass("hide");
      $("#otherTzError").addClass("hide");
      
      // Get tz code for selected tz
      var selectedTz = tzStrings[item];
      if(selectedTz){
        var topTzs = lsVars["topTzs"];
        if($.inArray(selectedTz, topTzs) < 0){
          // If selected tz not in list, add it to list.
          topTzs.pop();
          topTzs.unshift(selectedTz);
          s.set({"topTzs": topTzs}, function(){
            // Now rebuild the list on screen and reattach the click handlers
            setupTzs();
            // Select tz by firing a click event on it
            $(".tzCheckbox#" + selectedTz).click();
          });
        } else {
          // Select tz by firing a click event on it
          $(".tzCheckbox#" + selectedTz).click();
        }
      }
    }
  }).focus();
}


function setUnitDetails(){
  $("div.unitCheckbox").removeClass("checked");
  $("div.unitCheckbox label").css("font-weight", "normal");
  
  // Highlight unitSystem, if not custom
  var usStr = getUS();
  $("div.unitCheckbox#"+usStr).addClass("checked");
  $("div.unitCheckbox label[for='"+usStr+"']").css("font-weight", "bold");

  // Highlight individual unit sets
  for(var i in lsVars["us"]){
    $("input[name='"+i+"']").prop("checked",false);
    $("input[name='"+i+"'][value='"+lsVars["us"][i]+"']").prop("checked",true);
  }
}


function getUS(){
  var unitSystem = "custom";
  if(
    lsVars["us"]["distance"] === "metric" &&
    lsVars["us"]["area"] === "metric" &&
    lsVars["us"]["volume"] === "metric" &&
    lsVars["us"]["weight"] === "metric" &&
    lsVars["us"]["energy"] === "metric" &&
    lsVars["us"]["power"] === "metric" &&
    lsVars["us"]["temperature"] === "metric" &&
    lsVars["us"]["torque"] === "metric"
  ) unitSystem = "metric";
  else if(
    lsVars["us"]["distance"] === "imperial" &&
    lsVars["us"]["area"] === "imperial" &&
    lsVars["us"]["volume"] === "imperial" &&
    lsVars["us"]["weight"] === "imperial" &&
    lsVars["us"]["energy"] === "imperial" &&
    lsVars["us"]["power"] === "imperial" &&
    lsVars["us"]["temperature"] === "imperial" &&
    lsVars["us"]["torque"] === "imperial"
  ) unitSystem = "imperial";

  return unitSystem;
}


function optionsOpenMessage(){
  if(localStorage["optionsOpenType"] === "new"){
    $("div#saveStatus").html(strings.settingSaved.installMsg).fadeIn(500);
    $("a#extensionInstalledLink").click(function(){
      trackButton("website_click", "FAQ", "New Install Options Page Message");
    });
  } else {
    $("div#saveStatus").html(strings.settingSaved.updateMsg).fadeIn(500);
    $("a#extensionUpdatedLink").click(function(){
      trackButton("website_click", "Change Log", "Upgrade Options Page Message");
    });
  }
  localStorage["optionsOpenType"] = "none";
}


function updateLocalVariables(changes,areaName){
  s.get(function(ls){
    lsVars = ls;
  });
}


function showSettingSavedNotification(content){
  content = content !== undefined ? content : strings.settingSaved.close + strings.settingSaved.common + strings.settingSaved.dot;
  $("#saveStatus").fadeOut(0,function(){
    $(this).html(content).fadeIn(400,function(){
      setTimeout(clearSettingSavedNotification, 1000);
    });
  });
}


function clearSettingSavedNotification(){
  $("#saveStatus").fadeOut(400);
}


