// sports API handled here
var NFL = require('./nflModel');


// ******* ERROR, END OF WEEK/END OF SUNDAY GAMES ARE PUSHED A DAY FORWARD
// NFL.getWeeklySchedule(3, function(err, schedule) {
//   schedule.games.game[12];
// });


module.exports = {
  // ****** GET REQUESTS WILL PULL DATA FROM SERVER, NOT FROM API
  // API requests will be made via cron job
  test: function(req, res) {
    console.log('pull data from the server');
  }


};