var nflController = require('./nflController');

// exporting to middleware and invoked using express route
module.exports = function(app) {

  app.get('/', nflController.fetchWeeklySchedule); // delete later, just a test

};