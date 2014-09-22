var db = require('../config/db');

var NCAAF = db.Model.extend({
  tableName: 'ncaaf',

});

module.exports = NCAAF;