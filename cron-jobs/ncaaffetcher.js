var cron = require('cron').CronJob;
var NCAAF = require('sportsdata').NCAAF;
var ncaafData = require('../server/ncaaf/ncaafModel');
var db = require('../server/config/db');

var apiKey = 'huwkschxnrvkqsme9y5bzktj'; // will store this is separate keys file


// Initialize the required inputs for type of http request to the sportsdata API
var NCAAFinit = NCAAF.init('t', 1, '2014', 'REG', apiKey);

// // Creating weekly associations based on date of cron job
// // Weeks in ncaaf are shifts down (i.e. 0 is considered an index)
// var weeks = {
//   '922': 5,
//   '930': 5,
//   '107': 6,
//   '1014': 7,
//   '1021': 8,
//   '1028': 9,
//   '114': 10,
//   '1111': 11,
//   '1118': 12,
//   '1125': 13,
//   '122': 14
// };

// // When cron job runs, it will check the current date and return the associated week
// var date = new Date();
// var week = (date.getMonth() + 1).toString() + (date.getDate() + 1).toString();

// runs job every Tuesday at 2am
new cron('00 00 2 * * 2', function() {
  db.knex('ncaaf').truncate()
    .then(function() {
      NCAAF.getWeeklySchedule(5, function(err, schedule) {
        // for (var i = 0; i < schedule.games.game.length; i++) {
          var weeklySchedule = new ncaafData({
            date: schedule.games.game[i].$.scheduled.slice(0, schedule.games.game[i].$.scheduled.indexOf('T')),
            hometeam: schedule.games.game[i].$.home,
            awayteam: schedule.games.game[i].$.away,
            channel: schedule.games.game[i].broadcast[0].$.network
          })
          weeklySchedule.save()
            .then(function(game) {
              console.log('saved properly');
            })
        });
    })
}, null, true, "America/Los_Angeles");

function test() {
  db.knex('ncaaf').truncate()
    .then(function() {
      NCAAF.getWeeklySchedule(5, function(err, schedule) {
        for (var i = 0; i < schedule.games.game.length; i++) {
          var weeklySchedule = new ncaafData({
            date: schedule.games.game[i].$.scheduled.slice(0, schedule.games.game[i].$.scheduled.indexOf('T')),
            hometeam: schedule.games.game[i].$.home,
            awayteam: schedule.games.game[i].$.away,
            channel: schedule.games.game[i].broadcast[0].$.network
          })
          weeklySchedule.save()
            .then(function(game) {
              console.log('saved properly');
            })
        }
      });
    })
}

test();