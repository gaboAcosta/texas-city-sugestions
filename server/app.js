const
  express = require('express'),
  app = express(),
  routes =require('./routes')(app);



app.listen(3000, function () {
  console.log('Listening on port 3000!');
});
