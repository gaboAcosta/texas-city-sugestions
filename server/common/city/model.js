(function () {
  "use strict";


  class CitySuggestionModel {
    /**
     * @returns {number}
     */
    get NAME_SCORE_PERCENTAGE(){ return 40; } ;
    /**
     * @returns {number}
     */
    get LONGITUDE_SCORE_PERCENTAGE(){ return 30; };
    /**
     * @returns {number}
     */
    get LATITUDE_SCORE_PERCENTAGE(){ return 30; };

    get searchName(){
      return this._searchName;
    }

    set searchName(searchName){
      this._searchName = searchName;
    }

    get searchLongitude(){
      return this._searchLongitude;
    }

    set searchLongitude(longitude){
      this._searchLongitude = parseFloat(longitude);
    }

    get searchLatitude(){
      return this._searchLatitude;
    }

    set searchLatitude(longitude){
      this._searchLatitude = parseFloat(longitude);
    }

    constructor(cityJson){
      this.name = cityJson.name;
      this.longitude = parseFloat(cityJson.primary_longitude);
      this.latitude = parseFloat(cityJson.primary_latitude);
    }

    toJSON(){
      return {
        name: this.name,
        longitude: this.longitude,
        latitude: this.latitude,
        score: this.getScore()
      }
    }

    getScore(){
      return (this.getNameScore() + this.getLongitudeScore() + this.getLatitudeScore()) / 100;
    }

    getNameScore(){
      let score = 0;
      if(this.searchName){
        if(this.name.toLowerCase().indexOf(this.searchName.toLowerCase()) !== -1){
          score = 1;
        };
      }
      return (score * this.NAME_SCORE_PERCENTAGE);
    }

    getAbsoluteDifference(a, b){
      return Math.abs((a - b)).toFixed(2);
    }

    isAcceptableDifference(a, b){
      return this.getAbsoluteDifference(a, b) < 0.2;
    }

    getDistanceScore(a, b){
      let score = 0;
      if(this.isAcceptableDifference(a, b)){
        const difference = this.getAbsoluteDifference(a, b);
        if(difference <= 0.1){
          score = 1;
        } else {
          score = 0.5;
        }
      }
      return score;
    }
    getLongitudeScore(){
      let score = 0;
      if(this.searchLongitude){
        score = this.getDistanceScore(this.searchLongitude, this.longitude);
      }
      return (score * this.LONGITUDE_SCORE_PERCENTAGE);
    }
    getLatitudeScore(){
      let score = 0;
      if(this.searchLatitude){
        score = this.getDistanceScore(this.searchLatitude, this.latitude);
      }
      return (score * this.LATITUDE_SCORE_PERCENTAGE);
    }
  }

  module.exports = CitySuggestionModel;
})();