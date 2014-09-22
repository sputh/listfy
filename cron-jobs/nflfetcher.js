var NFL = require('sportsdata').NFL;
var nflData = require('./nflModel');

var apiKey = 'gzwk495a6tuuhjsg2zk5sumd'; // will store this is separate keys file

var cron = require('cron').CronJob;


// Initialize the required inputs for type of http request to the sportsdata API
var NFLinit = NFL.init('t', 1, apiKey, '2014', 'REG');


  var week = 3;
  save: function(req, res) {
    NFL.getWeeklySchedule(week, function(err, schedule) {
      var weeklySchedule = new nflData({
        date: schedule.games.game[0].$.scheduled,
        hometeam: schedule.games.game[0].$.home,
        awayteam: schedule.games.game[0].$.away,
        channel: schedule.games.game[0].broadcast[0].$.network
      })
      weeklySchedule.save()
        .then(function(game) {
          console.log('saved properly');
          res.send(weeklySchedule);
        })
    });
  }
