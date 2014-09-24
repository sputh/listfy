// sports API handled here
var NFL = require('./nflModel');
var db = require('../config/db');



// ******* ERROR, END OF WEEK/END OF SUNDAY GAMES ARE PUSHED A DAY FORWARD
//         Alter the json data on the client side?


module.exports = {
  fetchWeeklySchedule: function(req, res) {
    db.knex.select().table('nfl')
      .then(function(data) {
        res.send(data);
      })
  }
};