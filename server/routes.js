(function(){
  "use strict";

  module.exports = function (app) {
    app.use('/api/texas', require('./api/texas'));
  }

})();