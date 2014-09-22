var mysql = {
  client: 'mysql',
  connection: {
    host     : '127.0.0.1',
    user     : 'root',
    password : '',
    database : 'nite-out',
    charset  : 'utf8'
  }
};
var knex = require('knex')(mysql);

var db = require('bookshelf')(knex);


