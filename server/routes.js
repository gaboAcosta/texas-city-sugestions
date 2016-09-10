(function(){
  "use strict";

  module.exports = function (app) {
    app.use('/suggestions', require('./api/texas'));
  }

})();