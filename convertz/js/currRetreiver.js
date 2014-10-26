var exchangeRates = {
  errorMsg: "Couldn't retrieve exchange rate data. Please try again later.",
  successMsg: "Enjoy your exchange rate data, courtesy of ...",
};

var CURR_RATE_STALE = 24*60*60;
var CURR_RATE_FRESH = 6*60*60;

/**
 * exchangeRates.getRate
 * Returns an object containing best available exchange rate from LS and/or the web for the provided currencyCodeSet
 * @param currencyCodeSet The currency combination for which the rates are required
 */
exchangeRates.getRate = function(currencyCodeSet){
  // Save USD-USD rate as 1, fresh forever
  exchangeRates.setRate("usdusd", 1);
  exchangeRates.setRate("nonenone", 1);
  
  // Fetch exchange rates from localStorage
  var retRate = localStorage.getObject(currencyCodeSet);
  
  // Create return object
  var retObj = {
    status: "",
    message: "",
    currencyCodeSet: currencyCodeSet,
    rate: "",
    ts: ""
  };
  
  if(retRate){
    // Check freshness of current rates based on timestamp
    retObj.status = exchangeRates.freshOrNot(retRate.ts);
    retObj.rate = retRate.rate;
    retObj.ts = retRate.ts;

    switch(retObj.status){
      case  "fresh":
        // Update Message and return the object
        retObj.message = freshScale.fresh[1];
        return retObj;
        // break;
        
      // Update Message and check for updated rates
      case  "ripe":
        retObj.message = freshScale.ripe[1];
        break;
      case  "stale":
        retObj.message = freshScale.stale[1];
        break;
      case  "NA":
        retObj.message = freshScale.NA[1];
        break;
    }
  } else {
    retObj.status = "NA";
    retObj.message = freshScale.NA[1];
    retObj.rate = "1";
    retObj.ts = 0;
    localStorage.setObject(currencyCodeSet, {
      rate: "1",
      ts: 0,
      fetching: false
    });
  }
  
  //Schedule retreival of fresher exchange rates. Meanwhile return ripe/stale rates.
  exchangeRates.fetchLiveRate(currencyCodeSet);
  
  return retObj;
};

/**
 * exchangeRates.setRate
 * Saves the provided currencyCodeSet, it's value and current timestamp in localStorage
 * @param currencyCodeSet e.g. USDGBP
 * @param value e.g. 1.6643
 */
exchangeRates.setRate = function(currencyCodeSet, value){
  var currObject = {
    rate: value,
    ts: Math.round(new Date().getTime() / 1000),
    fetching: false
  };
  localStorage.setObject(currencyCodeSet, currObject);
};


/**
 * exchangeRates.freshOrNot
 * Given the time stamp from an LS currency fetch, returns "stale", "ripe" or "fresh"
 * @param ts Time Stamp from the LS fetch being checked for freshness
 */
exchangeRates.freshOrNot = function(ts){
  var currTime = Math.round(new Date().getTime() / 1000);

  // If time stamp is not defined OR time stamp is older than a day, return STALE
  if(ts === undefined || (currTime - ts > CURR_RATE_STALE)){
    return "stale";
  } else {

    // If time stamp is less than 6 hours, return FRESH
    if(currTime - ts < CURR_RATE_FRESH){
      return "fresh";
    } else {
    
    // If time stamp is less than 24 hours but more than 6 hours, return RIPE
      return "ripe";
    }
  }
};


/**
 * exchangeRates.fetchLiveRate
 * Initiates an asynch xhr to update exchange rates
 * @param currencyCodeSet e.g. usdinr (always lower case)
 */
exchangeRates.fetchLiveRate = function(currencyCodeSet) {
  var currValueObject = localStorage.getObject(currencyCodeSet);
  if(currValueObject["fetching"] === true) return;
  currValueObject["fetching"] = true;
  localStorage.setObject(currencyCodeSet, currValueObject);

  var callURL = fetchCurrYAHOOURL.replace(/(\$CURRPAIRS)/i,"\""+currencyCodeSet+"\"");
  
  var jqXHR = $.get(
    callURL,
    function(data){
/*      
      response is like a json object - parse and process
      {
        "query": {
          "count": 1,
          "created": "2014-02-09T00:13:25Z",
          "lang": "en-GB",
          "results": {
            "rate": {
              "id": "EURUSD",
              "Rate": "1.3634"
            }
          }
        }
      }
*/
      var dataJSON = JSON.parse(data);

      if(dataJSON.query.results != null){
        // Update LS
        // Message contentScripts
        exchangeRates.setRate(currencyCodeSet, dataJSON.query.results.rate.Rate);
      } else {
        trackButton("fetchFailed", currencyCodeSet + " : yahooNoRateReturned");
        console.log("fetchFailed: " + currencyCodeSet);
        console.log(dataJSON);
        // Couldn't retrieve exchange rates - send error alert to contentScripts.
        // Content scripts could either update hover-cards of all currency sections, or add an infobar at top.
      }
    },
    "text"
  ).error(function(xj, textStatus, errorThrown){
    trackButton("fetchFailed", currencyCodeSet + " : " + textStatus);
    console.log("fetchFailed: " + currencyCodeSet + ", with error: " + textStatus);
    
    var currValueObject = localStorage.getObject(currencyCodeSet);
    currValueObject["fetching"] = false;
    localStorage.setObject(currencyCodeSet, currValueObject);
    // Couldn't retrieve exchange rates - send error alert to contentScripts.
    // Content scripts could either update hover-cards of all currency sections, or add an infobar at top.
  });
  
  return;
};


/**
 * exchangeRates.currencyRateSet
 * Retreives all rates from LS and adds them to an object for sending to content script
 */
exchangeRates.currencyRateSet = function(){
  var tempObj = {};
  // Update browser icon if home currency state has changed
  for(var key in currencyBase){
    tempObj[key] = exchangeRates.getRate(currencyBase[key][0]+key);
  }
  setBrowserIcon(tempObj[lsVars["currency"]].status);
  return tempObj;
};
