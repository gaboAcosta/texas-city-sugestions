
(function () {
  "use strict";

  const
    citySuggestionModel = require('./model'),
    util = require('util');

  class CitySuggestionsFactory {

    static getCitySuggestionArray(cityArray, options){

      const
        cities = Array.isArray(cityArray) ? cityArray : [],
        suggestions = [];

      cities.map((city) => {

        const
          suggestion = new citySuggestionModel(city),
          parsedSuggestion = this.parseSuggestion(suggestion, options);

        if(parsedSuggestion.score > 0){
          suggestions.push(parsedSuggestion);
        }

      });

      suggestions.sort(function (a, b) {
        return b.score - a.score;
      });

      return suggestions;

    }

    static setNameSearch(suggestion, options){
      if(util.isString(options.name)){
        suggestion.searchName = options.name;
      }
    }

    static setLongitudeSearch(suggestion, options){
      if(!isNaN(options.longitude)){
        suggestion.searchLongitude = options.longitude;
      }
    }

    static setLatitudeSearch(suggestion, options){
      if(!isNaN(options.latitude)){
        suggestion.searchLatitude = options.latitude;
      }
    }

    static parseSuggestion(suggestion, options){

      this.setNameSearch(suggestion, options);
      this.setLongitudeSearch(suggestion, options);
      this.setLatitudeSearch(suggestion, options);

      return suggestion.toJSON();

    }

  }

  module.exports = CitySuggestionsFactory;
})();