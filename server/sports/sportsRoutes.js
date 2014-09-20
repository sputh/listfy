var sportsController = require('./sportsController');

module.exports = function(app) {

  app.get('/', function(req, res) {
    res.redirect('/');
    console.log('redirected');
  });
  
};