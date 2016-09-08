
module.exports = {
  getTexasCities: getTexasCities
}
const rp = require('request-promise-native');

function getTexasCities(){
  "use strict";
  const options = {
    uri: 'http://api.sba.gov/geodata/city_links_for_state_of/TX.json'
  };

  return rp(options).then(function (encodedCities) {
    return JSON.parse(encodedCities);
  });
}