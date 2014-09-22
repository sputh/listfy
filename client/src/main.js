/*** main.js ***/

define(function(require, exports, module) {
	var Engine = require('famous/core/Engine');
	var AppView = require('views/AppView');
	
	var Surface = require("famous/core/Surface");
	var GridLayout = require("famous/views/GridLayout");

	var mainContext = Engine.createContext();
  var appView = new AppView();

  mainContext.add(appView);
});