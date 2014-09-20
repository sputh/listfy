var bodyParser = require('body-parser');

module.exports = function(app, express) {
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({extended: true}));
  app.use(express.static(__dirname + '/../../client'));

  // create express router for each API
  var sportsSchedule = express.Router();

  // define which routes are assigned to each route
  app.use('/sports', sportsSchedule);

  // wlidcard requests get routed to home
  app.get('/*', function(req, res) {
    res.redirect('/');
  });

  require('../sports/sportsRoutes.js')
};