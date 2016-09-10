
const
  rp = require('request-promise-native'),
  CitySuggestionsFactory = require('../../common/city/collection.factory');

function getTexasCities(options){
  "use strict";
  return fetchCities().then(cities => {
    return createSuggestions(cities, options);
  });
}

function fetchCities(){
  "use strict";
  const options = {
    uri: 'http://api.sba.gov/geodata/city_links_for_state_of/TX.json'
  };

  return rp(options).then(function (encodedCities) {
    return JSON.parse(encodedCities);
  });
}

function createSuggestions(cities, options){
  "use strict";
  return CitySuggestionsFactory.getCitySuggestionArray(cities, options);
}


module.exports = {
  getTexasCities: getTexasCities
}