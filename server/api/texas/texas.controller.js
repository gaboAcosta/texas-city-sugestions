

module.exports = {
  getTexasCitiesSuggestions: getTexasCitiesSuggestions
};

const service = require('./texas.service');

function getTexasCitiesSuggestions(req, res){
  "use strict";
  service.getTexasCities(req.query).then(cities => {
    res.status(200).send(cities);
  }).catch(function (err) {
    res.status(500).send(err);
  });


}