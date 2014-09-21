// sports API handled here
var NFL = require('sportsdata').NFL;

var apiKey = 'gzwk495a6tuuhjsg2zk5sumd'; // will store this is separate keys file


// ****** THIS WILL GO INTO THE CRON JOB AND PULL WEEKLY SCHEDULES EVERY 
// initialize nfl information
// required, initializing this way is enough
var NFLinit = NFL.init('t', 1, apiKey, '2014', 'REG');

// ******* ERROR, END OF WEEK/END OF SUNDAY GAMES ARE PUSHED A DAY FORWARD
NFL.getWeeklySchedule(3, function(err, schedule) {
  console.log(schedule.games.game[12]);
})


module.exports = {
  // ****** GET REQUESTS WILL PULL DATA FROM SERVER, NOT FROM API
  // API requests will be made via cron job




  test: function(req, res) {
    res.redirect('/');
    console.log('worked')
  },


};