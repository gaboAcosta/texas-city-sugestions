
const
  express = require('express'),
  router = express.Router(),
  controller = require('./controller');

router.get('/', controller.getTexasCitiesSuggestions);

module.exports = router;