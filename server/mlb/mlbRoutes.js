var mlbController = require('./mlbController');

module.exports = function(app) {
  app.get('/', mlbController.test);
};