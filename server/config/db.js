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

db.knex.schema.hasTable('ncaaf').then(function(exists) {
  if (!exists) {
    db.knex.schema.createTable('ncaaf', function (schedule) {
      schedule.increments('id').primary();
      schedule.string('date', 100);
      schedule.string('hometeam', 100);
      schedule.string('awayteam', 100);
      schedule.string('channel', 100);
    }).then(function() {
      console.log('ncaaf table created');
    });
  }
});

db.knex.schema.hasTable('mlb').then(function(exists) {
  if (!exists) {
    db.knex.schema.createTable('mlb', function (schedule) {
      schedule.increments('id').primary();
      schedule.string('date', 100);
      schedule.string('league', 100);
      schedule.string('division', 100);
      schedule.string('team', 100);
      schedule.string('wins', 100);
      schedule.string('losses', 100);
      schedule.string('gamesbehind', 100);
    }).then(function() {
      console.log('mlb table created');
    });
  }
});

module.exports = db;
