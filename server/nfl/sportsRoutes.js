var sportsController = require('./sportsController');

// exporting to middleware and invoked using express route
module.exports = function(app) {

  app.get('/', sportsController.test); // delete later, just a test

};