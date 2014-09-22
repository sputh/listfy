var db = require('../config/db');

var NFL = db.Model.extend({
  tableName: 'nfl',

});

module.exports = NFL;