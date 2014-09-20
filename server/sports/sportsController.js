// sports API handled here
var NFL = require('sportsdata');

var apiKey = 'gzwk495a6tuuhjsg2zk5sumd'; // will store this is separate keys file

var NFLinit = NFL.init('t', 1, )

module.exports = {
  test: function(req, res) {
    res.redirect('/');
    console.log('worked')
  },


};