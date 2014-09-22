var ncaafController = require('./ncaafController');

module.exports = function(app) {

  app.get('/', ncaafController.test);
  
}