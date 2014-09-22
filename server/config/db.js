// this needs to be extracted out so we are not sharing our db information
var mysql = {
  client: 'mysql',
  connection: {
    host     : '127.0.0.1',
    user     : 'root',
    password : '',
    database : 'listify',
    charset  : 'utf8'
  }
};
var knex = require('knex')(mysql);

var db = require('bookshelf')(knex);

db.knex.schema.hasTable('nfl').then(function(exists) {
  if (!exists) {
    db.knex.schema.createTable('nfl', function (schedule) {
      schedule.increments('id').primary();
      schedule.string('date', 100);
      schedule.string('hometeam', 100);
      schedule.string('awayteam', 100);
      schedule.string('channel', 100);
    }).then(function() {
      console.log('nfl table created');
    });
  }
});

module.exports = db;