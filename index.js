// server.js handles express requirements
var app = require('./server/server.js');
var mysql = require('./server/config/db');


var port = 8000; // will be dynamic to handle deployment
var url = 'localhost'; // will be dynamic to handle deploymen


app.listen(port, url);

console.log('Listening on port: ', port);