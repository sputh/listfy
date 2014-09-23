var MLB = require('./mlbModel');
var db = require('../config/db');

module.exports = {
  fetchMLBStandings: function(req, res) {
    db.knex.select().table('mlb')
      .then(function(data) {
        res.send(data);
      })
  }
};