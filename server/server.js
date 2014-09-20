var express = require('express');

var app = express();

// middleware requires 2 arguments, the object returned from express and the express method
require('./config/middleware.js')(app, express);

// exporting express method for index.js
module.exports = app;