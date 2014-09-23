var db = require('../config/db');

var MLB = db.Model.extend({
  tableName: 'mlb'  
});

module.exports = MLB;