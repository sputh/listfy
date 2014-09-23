var cron = require('cron').CronJob;
var MLB = require('sportsdata').MLB;
var mlbData = require('../server/mlb/mlbModel');
var db = require('../server/config/db');

var apiKey = '2gd29am3rvjjfad22p8xqssv'; // will store this is separate keys file

// Initialize the required inputs for type of http request to the sportsdata API
var MLBinit = MLB.init('t', 4, apiKey, '2014');

var date = new Date();
// runs job everyday at
new cron('00 00 2 * * *', function() {
  db.knex('mlb').truncate()
    .then(function() {
      MLB.getStandings(function(err, schedule) {
        for (var i = 0; i < schedule.standings.league.length; i++) {
          for (var j = 0; j < schedule.standings.league[i].division.length; j++) {
            for (var k = 0; k < schedule.standings.league[i].division[j].team.length; k++) {
              var mlbStandings = new mlbData({
                date: (date.getMonth()+1) + '-' + date.getDate() + '-' + date.getFullYear(),
                league: schedule.standings.league[i].$.id,
                division: schedule.standings.league[i].division[j].$.id,
                team: schedule.standings.league[i].division[j].team[k].$.name,
                wins: schedule.standings.league[i].division[j].team[k].$.win,
                losses: schedule.standings.league[i].division[j].team[k].$.loss,
                gamesbehind: schedule.standings.league[i].division[j].team[k].$.games_back
              })
              mlbStandings.save()
                .then(function(game) {
                  console.log('saved properly');
                })
            }
          }
        }
      });
    })
}, null, true, "America/Los_Angeles");