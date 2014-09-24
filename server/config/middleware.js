var bodyParser = require('body-parser');

module.exports = function(app, express) {
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({extended: true}));
  app.use(express.static(__dirname + '/../../client'));

  // create express router for each API
  var nflSchedule = express.Router();
  var ncaafSchedule = express.Router();
  var mlbSchedule = express.Router();
  // ***** ADD new router here

  // define which routes are assigned to each route
  app.use('/nfl', nflSchedule);
  app.use('/ncaaf', ncaafSchedule);
  app.use('/mlb', mlbSchedule);
  // ***** ADD base route for each API here


  // wlidcard requests get routed to home
  app.get('/*', function(req, res) {
    res.redirect('/');
  });

  // invoke exported router using express router for each individual API
  require('../nfl/nflRoutes')(nflSchedule);
  require('../ncaaf/ncaafRoutes')(ncaafSchedule);
  require('../mlb/mlbRoutes')(mlbSchedule);
  // ***** ADD controller and route files and export them here
};