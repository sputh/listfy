var nflController = require('./nflController');

// exporting to middleware and invoked using express route
module.exports = function(app) {

  app.get('/', nflController.test); // delete later, just a test

};