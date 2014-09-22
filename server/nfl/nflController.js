// sports API handled here
var NFL = require('./nflModel');
var db = require('../config/db');



// ******* ERROR, END OF WEEK/END OF SUNDAY GAMES ARE PUSHED A DAY FORWARD
// NFL.getWeeklySchedule(3, function(err, schedule) {
//   schedule.games.game[12];
// });


module.exports = {

  fetchWeeklySchedule: function(req, res) {
    db.knex.select().table('nfl')
      .then(function(data) {
        res.send(data);
      })
  }


};