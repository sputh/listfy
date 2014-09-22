var db = require('../config/db');

var NFL = db.Model.extend({
  tableName: 'nfl',

  initialize: function() {
    console.log('worked');
  }
});

module.exports = NFL;