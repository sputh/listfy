// sports API handled here
var NFL = require('sportsdata').NFL;
var nflData = require('./nflModel');

var apiKey = 'gzwk495a6tuuhjsg2zk5sumd'; // will store this is separate keys file


// ****** THIS WILL GO INTO THE CRON JOB AND PULL WEEKLY SCHEDULES EVERY 
// initialize nfl information
// required, initializing this way is enough
var NFLinit = NFL.init('t', 1, apiKey, '2014', 'REG');

// ******* ERROR, END OF WEEK/END OF SUNDAY GAMES ARE PUSHED A DAY FORWARD
// NFL.getWeeklySchedule(3, function(err, schedule) {
//   schedule.games.game[12];
// });

var week = 3;
module.exports = {
  // ****** GET REQUESTS WILL PULL DATA FROM SERVER, NOT FROM API
  // API requests will be made via cron job

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
  },



  test: function(req, res) {
    NFL.getWeeklySchedule(3, function(err, schedule) {
      console.log(schedule.games.game[0].broadcast[0].$.network);
    });
  }


};