var NFL = require('sportsdata').NFL;
var nflData = require('../server/nfl/nflModel');
var db = require('../server/config/db');

var apiKey = 'gzwk495a6tuuhjsg2zk5sumd'; // will store this is separate keys file

var cron = require('cron').CronJob;


// Initialize the required inputs for type of http request to the sportsdata API
var NFLinit = NFL.init('t', 1, apiKey, '2014', 'REG');


var week = 4;

// runs job every Tuesday at 2am
new cron('00 00 2 * * 2', function() {
  db.knex('nfl').truncate()
    .then(function() {
      NFL.getWeeklySchedule(week, function(err, schedule) {
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
}, null, true, "America/Los_Angeles");
