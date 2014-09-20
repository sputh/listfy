var app = require('./server/server.js');

var port = 8000;
var url = 'localhost';

app.listen(port, url);

console.log('Listening on port: ', port);