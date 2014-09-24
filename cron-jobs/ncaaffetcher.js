var cron = require('cron').CronJob;
var NCAAF = require('sportsdata').NCAAF;
var ncaafData = require('../server/ncaaf/ncaafModel');
var db = require('../server/config/db');

var apiKey = 'huwkschxnrvkqsme9y5bzktj'; // will store this is separate keys file


// Initialize the required inputs for type of http request to the sportsdata API
var NCAAFinit = NCAAF.init('t', 1, '2014', 'REG', apiKey);

// // Creating weekly associations based on date of cron job
// // Weeks in ncaaf are shifts down (i.e. 0 is considered an index)
var weeks = {
  '922': 5,
  '929': 6,
  '106': 7,
  '1013': 8,
  '1020': 9,
  '1027': 10,
  '113': 11,
  '1110': 12,
  '1117': 13,
  '1124': 14,
  '121': 15
};


var date = new Date();
var week = (date.getMonth() + 1).toString() + date.getDate().toString();

// runs job every Monday at 2am
new cron('00 25 15 * * 1', function() {
  db.knex('ncaaf').truncate()
    .then(function() {
      NCAAF.getWeeklySchedule(weeks[week], function(err, schedule) {
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
}, null, true, "America/Los_Angeles");
