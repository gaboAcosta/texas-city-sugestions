(function () {
  "use strict";

  module.exports = {
    getTexasCitiesSuggestions: getTexasCitiesSuggestions
  };

  const
    service = require('./service'),
    _ = require('lodash');

  function getTexasCitiesSuggestions(req, res){

    const options = {
      name: _.get(req, 'query.q'),
      longitude: _.get(req, 'query.longitude'),
      latitude: _.get(req, 'query.latitude'),
    };

    service.getTexasCities(options).then(cities => {
      res.status(200).send({suggestions: cities});
    }).catch(function (err) {
      res.status(500).send(err);
    });

  }

})();