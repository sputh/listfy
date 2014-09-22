var cron = require('cron').CronJob;
var NFL = require('sportsdata').NFL;
var nflData = require('../server/nfl/nflModel');
var db = require('../server/config/db');

var apiKey = 'gzwk495a6tuuhjsg2zk5sumd'; // will store this is separate keys file


// Initialize the required inputs for type of http request to the sportsdata API
var NFLinit = NFL.init('t', 1, apiKey, '2014', 'REG');

// Creating weekly associations based on date of cron job
var weeks = {
  '923': 4,
  '930': 5,
  '107': 6,
  '1014': 7,
  '1021': 8,
  '1028': 9,
  '114': 10,
  '1111': 11,
  '1118': 12,
  '1125': 13,
  '122': 14
};

var date = new Date();
var week = (date.getMonth() + 1).toString() + (date.getDate() + 1).toString();

// runs job every Tuesday at 2am
// new cron('00 00 2 * * 2', function() {
//   db.knex('nfl').truncate()
//     .then(function() {
//       NFL.getWeeklySchedule(weeks[week], function(err, schedule) {
//         for (var i = 0; i < schedule.games.game.length; i++) {
//           var weeklySchedule = new nflData({
//             date: schedule.games.game[i].$.scheduled,
//             hometeam: schedule.games.game[i].$.home,
//             awayteam: schedule.games.game[i].$.away,
//             channel: schedule.games.game[i].broadcast[0].$.network
//           })
//           weeklySchedule.save()
//             .then(function(game) {
//               console.log('saved properly');
//             })
//         }
//       });
//     })
// }, null, true, "America/Los_Angeles");

function test() {
  db.knex('nfl').truncate()
  .then(function() {
    NFL.getWeeklySchedule(weeks[week], function(err, schedule) {
      for (var i = 0; i < schedule.games.game.length; i++) {
        var weeklySchedule = new nflData({
          date: schedule.games.game[i].$.scheduled,
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