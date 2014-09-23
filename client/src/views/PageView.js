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
	var GridView  		  = require('views/GridView')
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
		console.log('this', this);

		// _setListeners.call(this);
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
			dimensions: [3, 2]
		});

		var gridView = [];
		grid.sequenceFrom(gridView);

		imgObject = {
			1: './assets/pic1.jpg',
			2: './assets/pic2.jpg',
			3: './assets/pic3.jpg',
			4: './assets/pic4.jpg',
			5: './assets/pic5.jpg',
			6: './assets/pic6.jpg'
		};

		for(var i = 1; i < 8; i++) {
			this.gridBox = new Surface({
	  		// content: imgObject[1+i],
	  		content: i,
	  		size: [undefined, undefined],
	  		properties: {
	  			backgroundImage: 'url('+	imgObject[i] + ')',
	  			backgroundRepeat: 'no-repeat',
	  			backgroundSize: '100% 100%',
	  			// backgroundColor: "hsl(" + (i * 300 / 6) + ","+ (i * 10) + "%, "+ (i * 18) +"%)",
	  			color: "#404040",
	  			lineHeight: '200px',
	  			textAlign: 'center',
	  			class: i
	  		}
	  	});

	  	gridView.push(this.gridBox);
	  }

	  function _setListeners() {
		  for(var i = 0; i < gridView.length; i++) {
		  	var holder = gridView[i];
		  	// console.log(gridView[i]);
		  	function _listening() {
		  		this.on('click', function() {
		  		  this.eventHandler.downstream.push('flipBoard');
		  			console.log(this.content);
		  		}.bind(this))
		  	};
		  	_listening.call(holder);
		  }
	  }
	  console.log(gridView);
	  _setListeners.call(this);

	  // this.contentModifier = new Modifier({
	  // 	transform: Transform.translate(0, this.options.screenHeight, 50)
	  // });
this.layout.content.add(grid);
}


PageView.prototype.animateContentIn = function(e) {
	console.log('animateContentIn');

	this.options.index = e.index;

}

module.exports = PageView;
})