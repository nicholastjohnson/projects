var localExtId = "iaicfeiddeofdpjchmiooaldkelofdlj";
var GA_CODE = "UA-29280613-1";
var HIGHLIGHT_ROUND = "acround";
var HIGHLIGHT_DASHED = "acdashed";
var HIGHLIGHT_NONE = "acnone";

// var fetchCurrGOOGURL = 'http://www.google.com/ig/calculator?hl=en&q=1$BASECURR=?$AWAYCURR'
var fetchCurrYAHOOURL = "http://query.yahooapis.com/v1/public/yql?q=select id, Rate from yahoo.finance.xchange where pair in ($CURRPAIRS)&format=json&env=store://datatables.org/alltableswithkeys";


var leadStr = "(^|\\b|\\s)+((\\+|-|\u2212|\u2013|\u2010|\u002D)?\\s*((\\d{1,3},)*(\\d+(\\.\\d+)?)|(\\.\\d+)|((\\d+)\\s+(\\d+)\\/(\\d+))|((\\d+)\\/(\\d+))|(?:(\\d*)\\s*(FRACTION))))(\\s*|&ndash;|&mdash;|-|\u2014|\u2013|\u2212|\u2010)?(";
var trailStr = ")(s?)\\b";

// var qqRegexObj = /(^|\b|\s)+((((\+|-|\u2212|\u2013|\u2010|\u002D)?((\d{1,3},)*(\d+(\.\d+)?)|(\.\d+)|((\d+)\s+(\d+)\/(\d+))|((\d+)\/(\d+))))(\s*|&ndash;|&mdash;|-|\u2014|\u2013|\u2212|\u2010)?('|′|feet|foot|ft)\s?)(((\d{1,3},)*(\d+(\.\d+)?)|(\.\d+)|((\d+)\s+(\d+)\/(\d+))|((\d+)\/(\d+)))(\s*|&ndash;|&mdash;|-|\u2014|\u2013|\u2212|\u2010)?("|in|inch|inches)(\W|$)))|(((\+|-|\u2212|\u2013|\u2010|\u002D)?((\d{1,3},)*(\d+(\.\d+)?)|(\.\d+)|((\d+)\s+(\d+)\/(\d+))|((\d+)\/(\d+))))(\s*|&ndash;|&mdash;|-|\u2014|\u2013|\u2212|\u2010)?('|′|"|in|inch|inches|feet|foot|ft)(\W|$))/i
var qqRegexStr = "(^|\\b|\\s)+((((\\+|-|\u2212|\u2013|\u2010|\u002D)?((\\d{1,3},)*(\\d+(\\.\\d+)?)|(\\.\\d+)|((\\d+)\\s+(\\d+)\\/(\\d+))|((\\d+)\\/(\\d+))|(?:(\\d*)\\s*(FRACTION))))(\\s*|&ndash;|&mdash;|-|\u2014|\u2013|\u2212|\u2010)?('|′|feet|foot|ft)\\s?)(((\\d{1,3},)*(\\d+(\\.\\d+)?)|(\\.\\d+)|((\\d+)\\s+(\\d+)\\/(\\d+))|((\\d+)\\/(\\d+))|(?:(\\d*)\\s*(FRACTION)))(\\s*|&ndash;|&mdash;|-|\u2014|\u2013|\u2212|\u2010)?(\"|in|inch|inches)(\\W|$)))|(((\\+|-|\u2212|\u2013|\u2010|\u002D)?((\\d{1,3},)*(\\d+(\\.\\d+)?)|(\\.\\d+)|((\\d+)\\s+(\\d+)\\/(\\d+))|((\\d+)\\/(\\d+))|(?:(\\d*)\\s*(FRACTION))))(\\s*|&ndash;|&mdash;|-|\u2014|\u2013|\u2212|\u2010)?('|′|\"|in|inch|inches|feet|foot|ft)(\\W|$))";

var currencyPreStr = "(^|\\b|\\s)+((\\+|-|\\u2212|\\u2013|\\u2010|\\u002D)?\\s*((";
var currencyMidStr = ")(\\s*)((\\d{1,3},)*(\\d+(\\.\\d+)?)|(\\.\\d+)|((\\d+)\\s+(\\d+)\\/(\\d+))|((\\d+)\\/(\\d+))|(?:(\\d*)\\s*(FRACTION)))(?:(\\s*)(m|mn|million|millions|b|bn|billion|billions))?)|(((\\d{1,3},)*(\\d+(\\.\\d+)?)|(\\.\\d+)|((\\d+)\\s+(\\d+)\\/(\\d+))|((\\d+)\\/(\\d+))|(?:(\\d*)\\s*(FRACTION)))(\\s*)(";
var currencyTrailStr = ")))($|[\\s-_\\.,'\"!\\?&%:;+]+)";

var coreStrings = {
  browserBtn: {
    onTitle: chrome.i18n.getMessage("browserBtn_onTitle"),
    offTitle: chrome.i18n.getMessage("browserBtn_offTitle"),
    errorTitle: chrome.i18n.getMessage("browserBtn_errorTitle"),
    whitelistTitle: chrome.i18n.getMessage("browserBtn_whitelistTitle"),
    onBadge: chrome.i18n.getMessage("browserBtn_onBadge"),
    offBadge: chrome.i18n.getMessage("browserBtn_offBadge"),
    onColor: chrome.i18n.getMessage("browserBtn_onColor"),
    offColor: chrome.i18n.getMessage("browserBtn_offColor"),
  }
};

var freshScale = {
  'fresh': [0, chrome.i18n.getMessage("soy_freshness_fresh")],
  'ripe': [1, chrome.i18n.getMessage("soy_freshness_ripe")],
  'stale': [2, chrome.i18n.getMessage("soy_freshness_stale")],
  'NA': [3, chrome.i18n.getMessage("soy_freshness_na")]
};

var unitObj = {
  'distance': {
    'metric': ['feet','foot','ft','furlong','in','inch','inches','league','mile','mi','mph','thou','yard','yd','yrd','mpg'],
    // 'metric': ['furlong','league','mile','mi','mph','thou','yard','yd','yrd','mpg'],
    'imperial':['millimetre','centimetre','metre','kilometre','millimeter','centimeter','meter','kilometer','mm','cm','m','km','kmph','km\\\/h','km\\\/l','kmpl'],
    'none':[]
  },
  'area': {
    'metric': ['acre','ft2','in2','sq feet','sq foot','sqft','sq ft','sq\\sft','sq in','sq inch', 'square feet', 'square foot'],
    'imperial':['sq cm','sq m','sq km','square centimetre','square metre','square kilometre','square centimeter','square meter','square kilometer'],
    'none':[]
  },
  'volume': {
    'metric': ['barrel','bbl','bu','bushel','cu ft','cubic foot','cubic inch','fl oz','fluid ounce','ft3','gallon','in cu','in3','oil barrel','oil bbl','US gal','US gallon'],
    'imperial':['mL','L','millilitre','litre','milliliter','liter'],
    'none':[]
  },
  'weight': {
    'metric': ['dr','dram','lb','gross ton','long ton','metric ton','metric tonne','net ton','ounce','oz t','oz','pound','short ton','stone','st','ton','tonne','troy ounce','t','weight ton'],
    'imperial':['g','kg','gram','kilogram'],
    'none':[]
  },
  'energy': {
    'metric': ['british thermal unit','btu','cal','calorie','kcal','kilocalorie'],
    'imperial':['J','kJ','joule','kilojoule'],
    'none':[]
  },
  'power': {
    'metric': ['horsepower','hp'],
    'imperial':['W','kW','watt','kilowatt'],
    'none':[]
  },
  'temperature': {
    'metric':['F','Fahrenheit','&deg;F','&deg;Fahrenheit','&#176;F','&#176;Fahrenheit','\xB0F','\xB0Fahrenheit','degrees F','degrees Fahrenheit'],
    'imperial': ['C','Celsius','&deg;C','&deg;Celsius','&#176;C','&#176;Celsius','\xB0C','\xB0Celsius','degrees C','degrees Celsius'],
    'none':[]
  },
  'torque': {
    'metric': ['lbft', 'lb\u00B7ft', 'lb-ft'],
    'imperial':['Nm','N\u00B7m', 'N-m'],
    'none':[]
  }
};


var rules = {
  'thou' : [0.0000000254, 'kilometre'],
  'inch' : [0.0000254, 'kilometre'],
  'inches' : [0.0000254, 'kilometre'],
  'in' : [0.0000254, 'kilometre'],
  '\"' : [0.0000254, 'kilometre'],
  'foot' : [0.0003048, 'kilometre'],
  'feet' : [0.0003048, 'kilometre'],
  'ft' : [0.0003048, 'kilometre'],
  "\'" : [0.0003048, 'kilometre'],
  "\′" : [0.0003048, 'kilometre'],
  'yard' : [0.0009144, 'kilometre'],
  'yrd' : [0.0009144, 'kilometre'],
  'yd' : [0.0009144, 'kilometre'],
  'furlong' : [0.201168, 'kilometre'],
  'league' : [4.828032, 'kilometre'],
  'mile' : [1.609344, 'kilometre'],
  'mi' : [1.609344, 'kilometre'],
  'mph' : [1.609344, 'km\/h'],
  'mpg' : [0.425143707, 'km\/l'],
  'fluid ounce' : [0.0284130625, 'litre'],
  'fl oz' : [0.0284130625, 'litre'],
  'gallon' : [4.54609188, 'litre'],
  'dram' : [0.0017718451953, 'kilogram'],
  'dr' : [0.0017718451953, 'kg'],
  'troy ounce' : [0.0311034768, 'kilogram'],
  'oz t' : [0.0311034768, 'kg'],
  'ounce' : [0.028349523125, 'kilogram'],
  'oz' : [0.028349523125, 'kg'],
  'pound' : [0.45359237, 'kilogram'],
  'lb' : [0.45359237, 'kg'],
  'stone' : [6.35029318, 'kilogram'],
  'st' : [6.35029318, 'kg'],
  'ton' : [907.18474, 'kilogram'],
  't' : [907.18474, 'kg'],
  'net ton' : [907.18474, 'kilogram'],
  'short ton' : [907.18474, 'kilogram'],
  'gross ton' : [1016.0469088, 'kilogram'],
  'weight ton' : [1016.0469088, 'kilogram'],
  'long ton' : [1016.0469088, 'kilogram'],
  'tonne' : [1000, 'kilogram'],
  'metric ton' : [1000, 'kilogram'],
  'metric tonne' : [1000, 'kilogram'],
  'sq inch' : [0.00000000064516, 'sq kilometre'],
  'sq in' : [0.00000000064516, 'sq km'],
  'in2' : [0.00000000064516, 'km2'],
  'sq foot' : [0.00000009290341, 'sq kilometre'],
  'sq ft' : [0.00000009290341, 'sq km'],
  'sqft' : [0.00000009290341, 'sq km'],
  'sq feet' : [0.00000009290341, 'sq kilometre'],
  'square feet' : [0.00000009290341, 'sq kilometre'],
  'square foot' : [0.00000009290341, 'sq kilometre'],
  'ft2' : [0.00000009290341, 'km2'],
  'acre' : [0.0040468564224, 'sq km'],
  'cubic inch' : [0.016387064, 'litre'],
  'in cu' : [0.016387064, 'L'],
  'in3' : [0.016387064, 'L'],
  'cubic foot' : [28.31685, 'litre'],
  'cu ft' : [28.31685, 'L'],
  'ft3' : [28.31685, 'L'],
  'us gallon' : [3.785412, 'litre'],
  'us gal' : [3.785412, 'L'],
  'barrel' : [119.2405, 'litre'],
  'bbl' : [119.2405, 'L'],
  'oil barrel' : [158.9873, 'litre'],
  'oil bbl' : [158.9873, 'L'],
  'bushel' : [35.23907, 'litre'],
  'bu' : [35.23907, 'L'],
  'british thermal unit' : [1.055, 'kilojoule'],
  'btu' : [1.055, 'kJ'],
  'calorie' : [0.004184, 'kilojoule'],
  'cal' : [0.004184, 'kJ'],
  'kilocalorie' : [4.184, 'kilojoule'],
  'kcal' : [4.184, 'kJ'],
  'horsepower' : [0.7457, 'kiloWatt'],
  'hp' : [0.7457, 'kW'],
  'millimetre' : [0.000000621371192, 'mile'],
  'millimeter' : [0.000000621371192, 'mile'],
  'centimetre' : [0.00000621371192, 'mile'],
  'centimeter' : [0.00000621371192, 'mile'],
  'metre' : [0.000621371192, 'mile'],
  'meter' : [0.000621371192, 'mile'],
  'kilometre' : [0.621371192, 'mile'],
  'kilometer' : [0.621371192, 'mile'],
  'mm' : [0.000000621371192, 'mile'],
  'cm' : [0.00000621371192, 'mile'],
  'm' : [0.000621371192, 'mile'],
  'km' : [0.621371192, 'mile'],
  'j' : [0.000239005736, 'kcal'],
  'kj' : [0.239005736, 'kcal'],
  'joule' : [0.000239005736, 'kilocalorie'],
  'kilojoule' : [0.239005736, 'kilocalorie'],
  'g' : [0.000000984206528, 't'],
  'kg' : [0.000984206527611, 't'],
  'gram' : [0.000000984206528, 'ton'],
  'kilogram' : [0.000984206527611, 'ton'],
  'mL' : [0.0000353146667, 'cu ft'],
  'L' : [0.0353146667, 'cu ft'],
  'millilitre' : [0.0000353146667, 'cubic feet'],
  'litre' : [0.0353146667, 'cubic feet'],
  'milliliter' : [0.0000353146667, 'cubic feet'],
  'liter' : [0.0353146667, 'cubic feet'],
  'kmph' : [0.621371192, 'mph'],
  'km\/h' : [0.621371192, 'mph'],
  'kmpl' : [2.35214583, 'mpg'],
  'km\/l' : [2.35214583, 'mpg'],
  'sq cm' : [0.15500031, 'sq inch'],
  'sq m' : [10.7639104, 'sq ft'],
  'sq km' : [0.386102159, 'sq mile'],
  'cm2' : [0.15500031, 'sq inch'],
  'm2' : [10.7639104, 'sq ft'],
  'km2' : [0.386102159, 'sq mile'],
  'square centimetre' : [0.15500031, 'sq inch'],
  'square centimeter' : [0.15500031, 'sq inch'],
  'square metre' : [10.7639104, 'sq ft'],
  'square meter' : [10.7639104, 'sq ft'],
  'square kilometre' : [0.386102159, 'sq mile'],
  'square kilometer' : [0.386102159, 'sq mile'],
  'w' : [0.001340482573727, 'hp'],
  'kw' : [1.340482573726542, 'hp'],
  'watt' : [0.001340482573727, 'horsepower'],
  'kilowatt' : [1.340482573726542, 'horsepower'],
  '\xB0celsius' : [0, '\xB0fahrenheit'],
  '\xB0c' : [0, '\xB0f'],
  '\xB0fahrenheit' : [0, '\xB0celsius'],
  '\xB0f' : [0, '\xB0c'],
  '°celsius' : [0, '°Fahrenheit'],
  '°c' : [0, '°F'],
  '°fahrenheit' : [0, '°Celsius'],
  '°f' : [0, '°C'],
  'celsius' : [0, 'Fahrenheit'],
  'c' : [0, 'F'],
  'fahrenheit' : [0, 'Celsius'],
  'f' : [0, 'C'],
  'degrees celsius' : [0, 'degrees Fahrenheit'],
  'degrees c' : [0, 'degrees F'],
  'degrees fahrenheit' : [0, 'degrees Celsius'],
  'degrees f' : [0, 'degrees C'],
  'lbft' : [1.35581795, 'Nm'],
  'lb-ft' : [1.35581795, 'N-m'],
  'lb\u00B7ft' : [1.35581795, 'N\u00B7m'],
  'nm' : [0.7375621483695506, 'lbft'],
  'n-m' : [0.7375621483695506, 'lb-ft'],
  'n\u00B7m' : [0.7375621483695506, 'lb\u00B7ft'],
  'gbp' : [1, 'gbp'],
  '£' : [1, 'gbp'],
  '&pound;' : [1, 'gbp'],
  '\xA3' : [1, 'gbp'],
  'usd' : [1, 'usd'],
  '\$' : [1, 'usd'],
  '\x24' : [1, 'usd'],
  'eur' : [1, 'eur'],
  '€' : [1, 'eur'],
  '&euro;' : [1, 'eur'],
  '\u20AC' : [1, 'eur'],
  'jpy' : [1, 'jpy'],
  'yen' : [1, 'jpy'],
  '¥' : [1, 'jpy'],
  '&yen;' : [1, 'jpy'],
  '\xA5' : [1, 'jpy'],
  'inr' : [1, 'inr'],
  '₹' : [1, 'inr'],
  '&#8377;' : [1, 'inr'],
  '\u20B9' : [1, 'inr'],
  'cny' : [1, 'cny'],
  'CN&yen;' : [1, 'cny'],
  'CN¥' : [1, 'cny'],
  'CN\xA5' : [1, 'cny'],
  'aud' : [1, 'aud'],
  'vnd' : [1, 'vnd'],
  'cad' : [1, 'cad'],
  'hkd' : [1, 'hkd'],
  'nzd' : [1, 'nzd'],
  'brl' : [1, 'brl'],
  'r$' : [1, 'brl'],
  'idr' : [1, 'idr'],
  'rp' : [1, 'idr'],
  'zar': [1, 'zar'  ],
  'rub': [1, 'rub'  ],
  'sgd': [1, 'sgd'  ],
  'bgn': [1, 'bgn'  ],
  'thb': [1, 'thb'  ],
  'huf': [1, 'huf'  ],
  'nok': [1, 'nok'  ],
  'mxn': [1, 'mxn'  ],
  'dkk': [1, 'dkk'  ],
  'myr': [1, 'myr'  ],
  'pln': [1, 'pln'  ],
  'z\u0142': [1, 'pln'  ],
  'z\u0142oty': [1, 'pln'],
  'php': [1, 'php'  ],
  '\u20B1': [1, 'php'],
  'czk': [1, 'czk'  ],
  'K\u010D': [1, 'czk'],
  'aed': [1, 'aed'  ],
  'twd': [1, 'twd'  ],
  'krw': [1, 'krw'  ],
  '\u20A9': [1, 'krw'],
  '\uFFE6': [1, 'krw'],
  'ils': [1, 'ils'  ],
  '\u20AA': [1, 'ils'],
  'ars': [1, 'ars'  ],
  'clp': [1, 'clp'  ],
  'egp': [1, 'egp'  ],
  'E\xA3': [1, 'egp'],
  'LE': [1, 'egp'],
  'try': [1, 'try'  ],
  '\u20BA': [1, 'try'],
  'ron': [1, 'ron'  ],
  'sar': [1, 'sar'  ],
  'pkr': [1, 'pkr'  ],
  'cop': [1, 'cop'  ],
  'mad': [1, 'mad'  ],
  'hrk': [1, 'hrk'  ],
  'kn': [1, 'hrk'  ],
  'jmd': [1, 'jmd'  ],
  'dop': [1, 'dop'  ],
  'pen': [1, 'pen'  ],
  'sek': [1, 'sek'  ],
  'sfr': [1, 'chf'  ],
  'chf': [1, 'chf'  ],
  'kwd': [1, 'kwd'  ],
  'kd': [1, 'kwd'  ],
  'btc': [1, 'btc'  ],
  'xbt': [1, 'btc'  ],
  '\u0042\u20e6': [1, 'btc'  ],
};


var drilldown = {
  'inch' : [1000, 'thou'],
  'feet' : [12, 'inch'],
  'yard' : [3, 'feet'],
  'yrd' : [3, 'feet'],
  'mile' : [1760, 'yard'],
  'mi' : [1760, 'yd'],
  'in' : [1000, 'thou'],
  'ft' : [12, 'in'],
  'yd' : [3, 'ft'],
  'kcal' : [1000, 'cal'],
  'kilocalorie' : [1000, 'calorie'],
  'lb' : [16, 'oz'],
  'st' : [14, 'lb'],
  't' : [160, 'st'],
  'pound' : [16, 'ounce'],
  'stone' : [14, 'pound'],
  'ton' : [160, 'stone'],
  'cu ft' : [1728, 'in cu'],
  'cubic feet' : [1728, 'cubic inch'],
  'centimetre' : [10, 'millimetre'],
  'centimeter' : [10, 'millimetre'],
  'metre' : [100, 'centimetre'],
  'meter' : [100, 'centimetre'],
  'kilometre' : [1000, 'metre'],
  'kilometer' : [1000, 'metre'],
  'g' : [1000, 'mg'],
  'kg' : [1000, 'g'],
  'gram' : [1000, 'milligram'],
  'kilogram' : [1000, 'gram'],
  'sq centimetre' : [100, 'sq millimetre'],
  'sq metre' : [10000, 'sq centimetre'],
  'sq kilometre' : [1000000, 'sq metre'],
  'sq centimeter' : [100, 'sq millimetre'],
  'sq meter' : [10000, 'sq centimetre'],
  'sq kilometer' : [1000000, 'sq metre'],
  'sq cm' : [100, 'sq mm'],
  'sq m' : [10000, 'sq cm'],
  'sq km' : [1000000, 'sq m'],
  'cm2' : [10000, 'mm2'],
  'm2' : [10000, 'cm2'],
  'km2' : [1000000, 'm2'],
  'litre' : [1000, 'millilitre'],
  'liter' : [1000, 'millilitre'],
  'L' : [1000, 'mL'],
  'kilojoule' : [1000, 'joule'],
  'kJ' : [1000, 'J'],
  'kilowatt' : [1000, 'watt'],
  'kW' : [1000, 'W'],
};


var fractions = {
  '\u00BC' : [0.25, '&#188;'],
  '\u00BD' : [0.5, '&#189;'],
  '\u00BE' : [0.75, '&#190;'],
  '\u2150' : [1/7, '&#8528;'],
  '\u2151' : [1/9, '&#8529;'],
  '\u2152' : [0.1, '&#8530;'],
  '\u2153' : [1/3, '&#8531;'],
  '\u2154' : [2/3, '&#8532;'],
  '\u2155' : [0.2, '&#8533;'],
  '\u2156' : [0.4, '&#8534;'],
  '\u2157' : [0.6, '&#8535;'],
  '\u2158' : [0.8, '&#8536;'],
  '\u2159' : [1/6, '&#8537;'],
  '\u215A' : [5/6, '&#8538;'],
  '\u215B' : [0.125, '&#8539;'],
  '\u215C' : [0.375, '&#8540;'],
  '\u215D' : [0.625, '&#8541;'],
  '\u215E' : [0.875, '&#8542;']
};



var colourdivtext = {
  'defaultColour' : ['Default', "#FFFACD", 'defaultColour'],
  'specialColour' : ['#663399Becca', "#663399", 'specialColour'],
  'lightYellow' : ['&nbsp;', "lightyellow", 'lightYellow'],
  'lightGray' : ['&nbsp;', "lightgray", 'lightGray'],
  'paleGreen' : ['&nbsp;', "palegreen", 'paleGreen'],
  'lightBlue' : ['&nbsp;', "lightblue", 'lightBlue'],
  'azure' : ['&nbsp;', "azure", 'azure'],
  'lightSalmon' : ['&nbsp;', "lightsalmon", 'lightSalmon'],
  'noColour' : ['None', "transparent", 'noColour'],
};

// Currencies that use the dollar symbol, their currency code and their national domain hosts
var dollarCurrencies = {
  // 'usd': ['usd', ] default is USD
  'ar': ['ars'],
  'au': ['aud'],
  'ca': ['cad'],
  'cl': ['clp'],
  'co': ['cop'],
  'do': ['dop'],
  'hk': ['hkd'],
  'jm': ['jmd'],
  'nz': ['nzd'],
  'br': ['brl'],
  // 'com': ['usd']
};

//Currently 3char codes and ascii symbols. Also add unicode and html codes to list
var currencySymbols = {
  'gbp': [
      'gbp',
      // '£',
      '&pound;',
      '\xA3'
  ],
  'eur': [
      'eur',
      // '€',
      '&euro;',
      '\u20AC'
  ],
  'jpy': [
      'jpy',
      'yen',
      // '¥',
      '&yen;',
      '\xA5'
  ],
  'inr': [
      'inr',
      // '₹',
      '&#8377;',
      '\u20B9'
  ],
  'cny': [
      'cny',
      // 'CN¥',
      'CN\\s*\xA5'
  ],
  'aud': [
      'aud',
      '\\$',
      'au\\s*\\$'
  ],
  'vnd': [
      'vnd',
      '&#8363;'
  ],
  'cad': [
      'cad',
      '\\$',
      'ca\\s*\\$'
  ],
  'hkd': [
      'hkd',
      '\\$',
      'hk\\s*\\$'
  ],
  'nzd': [
      'nzd',
      '\\$',
      'nz\\s*\\$'
  ],
  'brl': [
      'brl',
      'r\\s*\\$'
  ],
  'idr': [
      'idr',
      'Rp'
  ],
  'zar': ['zar'  ],
  'rub': ['rub'  ],
  'sgd': ['sgd'  ],
  'bgn': ['bgn'  ],
  'thb': [
      'thb',
      '\u0E3F'
  ],
  'huf': ['huf'  ],
  'nok': ['nok'  ],
  'mxn': ['mxn'  ],
  'dkk': ['dkk'  ],
  'sek': ['sek'  ],
  'kwd': [
      'kwd',
      'kd'
  ],
  'chf': [
      'chf',
      'sfr'
  ],
  'myr': ['myr'  ],
  'pln': [
      'pln',
      'z\u0142',
      'z\u0142oty'
  ],
  'php': [
      'php',
      '\u20B1'
  ],
  'czk': [
      'czk',
      'K\u010D'
  ],
  'aed': ['aed'  ],
  'twd': ['twd'  ],
  'krw': [
      'krw',
      '\u20A9',
      '\uFFE6'
  ],
  'ils': [
      'ils',
      '\u20AA'
  ],
  'ars': [
      '\\$',
      'ars'
  ],
  'clp': [
      '\\$',
      'clp'
  ],
  'egp': [
      'egp',
      'E\xA3',
      'LE'
  ],
  'try': [
      'try',
      '\u20BA'
  ],
  'ron': ['ron'  ],
  'sar': ['sar'  ],
  'pkr': ['pkr'  ],
  'cop': [
      '\\$',
      'cop'
  ],
  'mad': ['mad'  ],
  'hrk': [
      'hrk',
      'kn'
  ],
  'jmd': [
      '\\$',
      'jmd'
  ],
  'dop': [
      '\\$',
      'dop'
  ],
  'pen': ['pen'  ],
  'btc': [
      "\u0042\u20e6",
      'btc',
      'xbt'
  ],
  'usd': [  //at end so it appears last in the regex and lets other XY$ currencies catch first.
      'usd',
      '\\$',
      // '\x24'
  ],
};

var currencyStrings = {
  'Argentine Peso, ARS, AR$' : 'ars',
  'Australian Dollar, AUD, AU$' : 'aud',
  'Brazilian Real, BRL, R$' : 'brl',
  'Bulgarian Lev, BGN' : 'bgn',
  'Canadian Dollar, CA$, CAD' : 'cad',
  'Chilean Peso, CLP, CL$' : 'clp',
  'Chinese Renminbi, Yuan, CN\xA5, CNY' : 'cny',
  'Colombian Peso, COP, CO$' : 'cop',
  'Croatian Kuna, HRK, kn' : 'hrk',
  'Czech Koruna, CZK, K\u010D' : 'czk',
  'Danish Krone, DKK' : 'dkk',
  'Dominican Peso, DOP, RD$' : 'dop',
  'Egyptian Pound, E\xA3, EGP, L.E., LE' : 'egp',
  'Euro, EUR, \u20AC' : 'eur',
  'GB Pound Sterling, GBP, \xA3, British Pound' : 'gbp',
  'Hong Kong Dollar, HKD, HK$' : 'hkd',
  'Hungarian Forint, HUF, Ft' : 'huf',
  'Indian Rupee, INR, \u20B9' : 'inr',
  'Indonesian Rupiah, IDR, Rp' : 'idr',
  'Israeli New Sheqel, ILS, \u20AA' : 'ils',
  'Jamaican Dollar, JMD, JM$' : 'jmd',
  'Japanese Yen, JPY, \xA5' : 'jpy',
  'Kuwaiti Dinar, KWD, KD' : 'kwd',
  'Malaysian Ringgit, MYR, RM' : 'myr',
  'Mexican Peso, MXN' : 'mxn',
  'Moroccan Dirham, MAD' : 'mad',
  'New Taiwan Dollar, TWD, TW$' : 'twd',
  'New Zealand Dollar, NZD, NZ$' : 'nzd',
  'Norweigian Krone, NOK' : 'nok',
  'Pakistani Rupee, PKR' : 'pkr',
  'Peruvian Nuevo Sol, PEN, S/.' : 'pen',
  'Philippine Peso, PHP, \u20B1' : 'php',
  'Polish zloty, z\u0142oty, PLN, z\u0142' : 'pln',
  'Romanian Leu, RON, L' : 'ron',
  'Russian Ruble, RUB' : 'rub',
  'Saudi Riyal, SAR, SR' : 'sar',
  'Singapore Dollar, SG$, SGD' : 'sgd',
  'South African Rand, SA Rand, ZAR' : 'zar',
  'South Korean Won, KRW, \u20A9, \uFFE6' : 'krw',
  'Swedish Krona, SEK, kr' : 'sek',
  'Swiss Franc, CHF, SFr' : 'chf',
  'Thai Baht, THB, \u0E3F' : 'thb',
  'Turkish Lira, TRY, TL, \u20BA' : 'try',
  'UAE Dirham, AED, United Arab Emirates Dirham' : 'aed',
  'US Dollar, United States of America Dollar, USD, \x24' : 'usd',
  'Vietnamese Dong, VND, \u20AB' : 'vnd',
  'Bitcoin, BTC, XBT, \u0042\u20e6' : 'btc',
};

var currencyBase = {
  'none': ['none', '', ''],
  'gbp': ['usd', 'GBP', '\xA3'],
  'eur': ['usd', 'EUR', '\u20AC'],
  'jpy': ['usd', 'JPY', '\xA5'],
  'inr': ['usd', 'INR', '\u20B9'],
  'cny': ['usd', 'CNY', 'CN\xA5'],
  'aud': ['usd', 'AUD', 'AU$'],
  'vnd': ['inr', 'VND', '\u20AB'],
  'cad': ['usd', 'CAD', 'CA$'],
  'hkd': ['usd', 'HKD', 'HK$'],
  'nzd': ['usd', 'NZD', 'NZ$'],
  'brl': ['usd', 'BRL', 'R$'],
  'idr': ['inr', 'IDR', 'Rp'],
  'zar': ['usd', 'ZAR', 'ZAR'],
  'rub': ['usd', 'RUB', 'RUB'],
  'sgd': ['usd', 'SGD', 'SGD'],
  'bgn': ['usd', 'BGN', 'BGN'],
  'thb': ['usd', 'THB', 'THB'],
  'huf': ['usd', 'HUF', 'HUF'],
  'nok': ['usd', 'NOK', 'NOK'],
  'mxn': ['usd', 'MXN', 'MXN'],
  'dkk': ['usd', 'DKK', 'DKK'],
  'sek': ['usd', 'SEK', 'SEK'],
  'kwd': ['usd', 'KWD', 'KD'],
  'chf': ['usd', 'CHF', 'SFr'],
  'myr': ['usd', 'MYR', 'MYR'],
  'pln': ['usd', 'PLN', 'PLN'],
  'php': ['usd', 'PHP', 'PHP'],
  'czk': ['usd', 'CZK', 'CZK'],
  'aed': ['usd', 'AED', 'AED'],
  'twd': ['usd', 'TWD', 'TWD'],
  'krw': ['inr', 'KRW', 'KRW'],
  'ils': ['usd', 'ILS', 'ILS'],
  'ars': ['usd', 'ARS', 'ARS'],
  'clp': ['usd', 'CLP', 'CLP'],
  'egp': ['usd', 'EGP', 'EGP'],
  'try': ['usd', 'TRY', 'TRY'],
  'ron': ['usd', 'RON', 'RON'],
  'sar': ['usd', 'SAR', 'SAR'],
  'pkr': ['usd', 'PKR', 'PKR'],
  'cop': ['inr', 'COP', 'COP'],
  'mad': ['usd', 'MAD', 'MAD'],
  'hrk': ['usd', 'HRK', 'Kn'],
  'jmd': ['usd', 'JMD', 'JMD'],
  'dop': ['usd', 'DOP', 'DOP'],
  'pen': ['usd', 'PEN', 'PEN'],
  'btc': ['usd', 'BTC', '\u0042\u20e6'],
  'usd': ['usd', 'USD', '$'],
};


var tzStrings = {
  'Hong Kong Time' : 'hkt',
  'Australia Time' : 'aut',
  'South Africa Time' : 'sat',
};

var tzBase = {
  'none': ['none', '', 'None'],
  'bst': ['bst', 'BST', 'British Time'],
  'cet': ['cet', 'CET', 'Central Europe Time'],
  'pst': ['pst', 'PST', 'Pacific Time (US)'],
  'et': ['et', 'EST', 'Eastern Time (US)'],
  'mt': ['mt', 'MST', 'Mountain Time (US)'],
  'cst': ['cst', 'CST', 'Central Time (US)'],
  'ist': ['ist', 'IST', 'India Time'],
  'jst': ['jst', 'JST', 'Japan Time'],
  'ct': ['ct', 'CT', 'China Time'],
  'gmt': ['gmt', 'UTC', 'UTC/UCT/GMT'],
  'hkt': ['hkt', 'HKT', 'Hong Kong Time'],
  'aut': ['aut', 'AUT', 'Australia Time'],
  'sat': ['sat', 'SAT', 'South Africa Time'],
};


var fracArr = [];

for(var a in fractions){
  fracArr.push(a);
}
var fracStr = fracArr.join('|');
qqRegexStr = qqRegexStr.replace(/FRACTION/g,fracStr);
var qqRegexObj = RegExp(qqRegexStr,"i");


function unitRegex(){

  var unitArr = unitObj["distance"][lsVars["us"]["distance"]].concat(
    unitObj["area"][lsVars["us"]["area"]],
    unitObj["volume"][lsVars["us"]["volume"]],
    unitObj["torque"][lsVars["us"]["torque"]],
    unitObj["weight"][lsVars["us"]["weight"]],
    unitObj["energy"][lsVars["us"]["energy"]],
    unitObj["power"][lsVars["us"]["power"]],
    unitObj["temperature"][lsVars["us"]["temperature"]]
  );

  var tempRegexString = leadStr + unitArr.join('|') + trailStr;
  tempRegexString = tempRegexString.replace(/FRACTION/g,fracStr);
  return tempRegexString;
}


function currencyRegex(){
  var tempCurrArr = [];
  
  for(var key in currencySymbols){
    if(key !== lsVars["currency"]){
      tempCurrArr = tempCurrArr.concat(currencySymbols[key]);
    }
  }
  
  var tempRegexString = currencyPreStr + tempCurrArr.join('|') + currencyMidStr + tempCurrArr.join('|') + currencyTrailStr;
  tempRegexString = tempRegexString.replace(/FRACTION/g,fracStr);
  return tempRegexString;
}


function tzRegex(){
  return "";
  var tempCurrArr = [];
  
  for(var key in currencySymbols){
    if(key !== lsVars["currency"]){
      tempCurrArr = tempCurrArr.concat(currencySymbols[key]);
    }
  }
  
  var tempRegexString = currencyPreStr + tempCurrArr.join('|') + currencyMidStr + tempCurrArr.join('|') + currencyTrailStr;
  tempRegexString = tempRegexString.replace(/FRACTION/g,fracStr);
  return tempRegexString;
}


function makeWhitelistRegex(){
  return $.map(JSON.parse(localStorage["whitelist"]), function(value, index){
    return ".*"+value+".*";
  }).join('|');
}


Storage.prototype.setObject = function(key, value) {
    this.setItem(key, JSON.stringify(value));
};

Storage.prototype.getObject = function(key) {
    var value = this.getItem(key);
    return value && JSON.parse(value);
};


// If home currency exchange rate is NA, set browser icon to error, else set browser icon to regular
// Used in BgScript & CurrRetreiver
function setBrowserIcon(){
  var newHomeCurrencyState;
  var currHomeCurrencyState = localStorage["homecurrencystate"];
  
  if(arguments && arguments[0]){
    newHomeCurrencyState = arguments[0];
  } else {
    newHomeCurrencyState = exchangeRates.getRate(currencyBase[lsVars["currency"]][0]+lsVars["currency"]).status;
  }
  
  if(newHomeCurrencyState == "NA" && currHomeCurrencyState != "na"){
    chrome.browserAction.setIcon({
      "path": {
        "19": "img/icon-error-19.png",
        "38": "img/icon-error-38.png"
      }
    });
    chrome.browserAction.setTitle({title: coreStrings.browserBtn.errorTitle});
    localStorage["homecurrencystate"] = "na";
  } else if(newHomeCurrencyState != "NA" && currHomeCurrencyState == "na"){
    chrome.browserAction.setIcon({
      "path": {
        "19": "img/icon19-noborder.png",
        "38": "img/icon38-noborder.png"
      }
    });
    chrome.browserAction.setTitle({title: coreStrings.browserBtn[localStorage["state"]+"Title"]});
    localStorage["homecurrencystate"] = "notNA";
  }
}


function checkWhitelist(tabUrl){
  var wl = arguments[1] ? arguments[1] : localStorage["whitelistRegex"];
  
  if(wl !== ""){
    var matches = tabUrl.match(RegExp(wl,'i'));
    
    if(matches) return true;
    else return false;
  } else {
    return false;
  }
}



//Track event - log to Google Analytics
function trackButton(btn, status) {
  if(arguments && arguments[2]){
    tracker.sendEvent(btn, status, arguments[2]);
  } else {
    tracker.sendEvent(btn, status);
  }
}


// function lsGet(getObj, callback){
//   if(typeof(getObj) === "function"){
//     callback = getObj;
//     getObj = undefined;
//   }
//   chrome.storage.local.get(getObj, callback);
// }

// function lsSet(setObj, callback){
//   chrome.storage.local.set(setObj, callback);
// }

// function lsClear(callback){
//   chrome.storage.local.clear(callback);
// }

// function ssGet(getObj, callback){
//   if(typeof(getObj) === "function"){
//     callback = getObj;
//     getObj = undefined;
//   }
//   chrome.storage.sync.get(getObj, callback);
// }

// function ssSet(setObj, callback){
//   chrome.storage.sync.set(setObj, callback);
// }

// function ssClear(callback){
//   chrome.storage.sync.clear(callback);
// }

// setup sGet and sSet
// default ls, if localStorage isn't defined yet
// var sGet, sSet, sClear;
// if(localStorage["syncSettings"] === "true"){
//   sGet = ssGet;
//   sSet = ssSet;
//   sClear = ssClear;
// } else {
//   sGet = lsGet;
//   sSet = lsSet;
//   sClear = lsClear;
// }

// window.addEventListener("storage", function(e){
//   // console.log(e);
//   if(e.key === "syncSettings"){
//     if(e.newValue === "true"){
//       sGet = ssGet;
//       sSet = ssSet;
//       sClear = ssClear;
//       // lsGet(function(ls){
//       //   lsClear(function(){
//       //     ssClear(function(){
//       //       ssSet(ls);
//       //     });
//       //   });
//       // });
//     } else {
//       sGet = lsGet;
//       sSet = lsSet;
//       sClear = lsClear;
//       // ssGet(function(ls){
//       //   ssClear(function(){
//       //     lsClear(function(){
//       //       lsSet(ls);
//       //     });
//       //   });
//       // });
//     }
//   }
// }, false);


//Update all tabs with updated extension settings
function propagateSettings(){
  var tabPluginState;
  chrome.windows.getAll({"populate": true}, function(winds){
    for(var i = 0; i<winds.length;i++){
      for(var j = 0; j<winds[i]["tabs"].length;j++){
        
        // If tab is whitelisted, send whitelisted = false, pluginState = off
        var whitelisted = checkWhitelist(winds[i]["tabs"][j].url);
        if(whitelisted){
          tabPluginState = "off";
          chrome.browserAction.setTitle({"title": coreStrings.browserBtn.offTitle, "tabId": winds[i]["tabs"][j].id});
          chrome.browserAction.setIcon({
            "path": {
              "19": "img/icon-whitelist-19.png",
              "38": "img/icon-whitelist-38.png"
            },
            "tabId": winds[i]["tabs"][j].id
          });
        } else tabPluginState = localStorage["state"];
        
        chrome.tabs.sendMessage(winds[i]["tabs"][j].id, {
          "type": "all",
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
    }
  });
}

function propagateSetting(obj){
  chrome.windows.getAll({"populate": true}, function(winds){
    for(var i = 0; i<winds.length;i++){
      for(var j = 0; j<winds[i]["tabs"].length;j++){
        if(obj.type === "whitelist"){
          // If tab is whitelisted, send whitelisted = false, pluginState = off
          var whitelisted = checkWhitelist(winds[i]["tabs"][j].url);
          if(whitelisted){
            chrome.browserAction.setTitle({"title": coreStrings.browserBtn.offTitle, "tabId": winds[i]["tabs"][j].id});
            chrome.browserAction.setIcon({
              "path": {
                "19": "img/icon-whitelist-19.png",
                "38": "img/icon-whitelist-38.png"
              },
              "tabId": winds[i]["tabs"][j].id
            });
          } else {
            chrome.browserAction.setTitle({"title": coreStrings.browserBtn.onTitle, "tabId": winds[i]["tabs"][j].id});
            chrome.browserAction.setIcon({
              "path": {
                "19": "img/icon19-noborder.png",
                "38": "img/icon38-noborder.png"
              },
              "tabId": winds[i]["tabs"][j].id
            });
          }
        }
        chrome.tabs.sendMessage(winds[i]["tabs"][j].id, obj);
      }
    }
  });
}

