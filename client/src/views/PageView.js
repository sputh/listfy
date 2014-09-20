define(function(require, exports, module) {
	var View            = require('famous/core/View');
	var Surface         = require('famous/core/Surface');
	var Transform       = require('famous/core/Transform');
	var StateModifier   = require('famous/modifiers/StateModifier');
	var HeaderFooter    = require('famous/views/HeaderFooterLayout');
	var ImageSurface    = require('famous/surfaces/ImageSurface');
	var InputSurface 		= require('famous/surfaces/InputSurface');
	var FastClick 			= require('famous/inputs/FastClick');
	var ContentView  	  = require('views/ContentView')
	var Modifier   		  = require("famous/core/Modifier");
	var TouchSync   		= require("famous/inputs/TouchSync");
	var Transitionable  = require("famous/transitions/Transitionable");
	var Easing   				= require('famous/transitions/Easing');
	var GridLayout 			= require("famous/views/GridLayout");
	var Modifier    = require("famous/core/Modifier");
	var TouchSync   = require("famous/inputs/TouchSync");
	var Transitionable = require("famous/transitions/Transitionable");
	var Easing = require('famous/transitions/Easing');

	function PageView() {
		View.apply(this, arguments);

		_createLayout.call(this);
		_createHeader.call(this);
		_createBody.call(this);

	}

	PageView.prototype = Object.create(View.prototype);
	PageView.prototype.constructor = PageView;

	PageView.DEFAULT_OPTIONS = {
		headerSize: 44
	};

	var position = new Transitionable([0,0]);
	var sync = new TouchSync();

	function _createLayout() {
		this.layout = new HeaderFooter({
			headerSize: this.options.headerSize
		});

		var layoutModifier = new StateModifier({
			transform: Transform.translate(0, 0, 0.1)
		});
		this.add(layoutModifier).add(this.layout);
	}

	function _createHeader() {
		var backgroundSurface = new Surface({
			content: "L I S T I F Y",
			properties: {
				backgroundColor: "#9797A3",
				textAlign: "center",
			}
		});

		this.layout.header.add(backgroundSurface);
	}

	function _createBody() {
	  var grid = new GridLayout({
	  	dimensions: [4, 2]
	  });

	  var surfaces = [];
	  grid.sequenceFrom(surfaces);

	  for(var i = 0; i < 50; i++) {
	  	surfaces.push(new Surface({
	  		content: "panel " + (i + 1),
	  		size: [undefined, undefined],
	  		properties: {
	  			backgroundColor: "hsl(" + (i * 360 / 50) + ", 100%, 50%)",
	  			color: "#404040",
	  			lineHeight: '200px',
	  			textAlign: 'center'
	  		}
	  	}));
	  }
	  var backgroundSurface = new Surface({
			content: "L I S T I F Y",
			properties: {
				backgroundColor: "#9787A3",
				textAlign: "center",
			}
		});

		this.layout.content.add(backgroundSurface);
		this.layout.content.add(grid);
	}
	module.exports = PageView;
})