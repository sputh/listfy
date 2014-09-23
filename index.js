// server.js handles express requirements
var app = require('./server/server.js');
var mysql = require('./server/config/db');


var port = process.env.PORT || 8000;
var url = process.env.URL || 'localhost';


app.listen(port, url);

console.log('Listening on port: ', port);