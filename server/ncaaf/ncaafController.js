var NCAAF = require('./ncaafModel');
var db = require('../config/db');

module.exports = {
  fetchWeeklySchedule: function(req, res) {
    db.knex.select().table('ncaaf')
      .then(function(data) {
        res.send(data);
      })
  }
}