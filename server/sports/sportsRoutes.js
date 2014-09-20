var sportsController = require('./sportsController');

// exporting to middleware and invoked using express route
module.exports = function(app) {

  app.get('/', function(req, res) {
    res.redirect('/');
    console.log('redirected');
  });

};