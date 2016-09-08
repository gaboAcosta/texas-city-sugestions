
const
  express = require('express'),
  router = express.Router(),
  controller = require('./texas.controller');

router.get('/', controller.getTexasCitiesSuggestions);

module.exports = router;