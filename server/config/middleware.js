var bodyParser = require('body-parser');

module.exports = function(app, express) {
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({extended: true}));
  app.use(express.static(__dirname + '/../../client'));

  // create express router for each API
  var nflSchedule = express.Router();
  // ***** ADD new router here

  // define which routes are assigned to each route
  app.use('/nfl', nflSchedule);
  // ***** ADD base route for each API here


  // wlidcard requests get routed to home
  app.get('/*', function(req, res) {
    res.redirect('/');
  });

  // invoke exported router using express router for each
  // individual API
  require('../nfl/nflRoutes.js')(nflSchedule);
  // ***** ADD controller and route files and export them here
};