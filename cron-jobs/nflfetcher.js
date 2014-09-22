var NFL = require('sportsdata').NFL;
var nflData = require('../server/nfl/nflModel');

var apiKey = 'gzwk495a6tuuhjsg2zk5sumd'; // will store this is separate keys file

var cron = require('cron').CronJob;


// Initialize the required inputs for type of http request to the sportsdata API
var NFLinit = NFL.init('t', 1, apiKey, '2014', 'REG');


var week = 3;

var fetcher = function() {

  week++;
  NFL.getWeeklySchedule(week, function(err, schedule) {
    for (var i = 0; i < schedule.games.game.length; i++) {
      var weeklySchedule = new nflData({
        date: schedule.games.game[i].$.scheduled,
        hometeam: schedule.games.game[i].$.home,
        awayteam: schedule.games.game[i].$.away,
        channel: schedule.games.game[i].broadcast[i].$.network
      })
      weeklySchedule.save()
        .then(function(game) {
          console.log('saved properly');
        })
    }
  });

};

fetcher();
