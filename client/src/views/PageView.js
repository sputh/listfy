define(function(require, exports, module) {
	var View            = require('famous/core/View');
	var Surface         = require('famous/core/Surface');
	var Transform       = require('famous/core/Transform');
	var StateModifier   = require('famous/modifiers/StateModifier');
	var HeaderFooter    = require('famous/views/HeaderFooterLayout');
	var ImageSurface    = require('famous/surfaces/ImageSurface');
	var EventHandler    = require('famous/core/EventHandler');
	var ContentView  	  = require('views/ContentView')
	var Modifier   		  = require("famous/core/Modifier");
	var TouchSync   		= require("famous/inputs/TouchSync");
	var Transitionable  = require("famous/transitions/Transitionable");
	var Easing   				= require('famous/transitions/Easing');
	var TouchSync   		= require("famous/inputs/TouchSync");
	var Transitionable 	= require("famous/transitions/Transitionable");
	var Easing 					= require('famous/transitions/Easing');

	var eventHandler 		= new EventHandler();
	var transitionable 	= new Transitionable();

	function PageView() {
		View.apply(this, arguments);

		this.contentToggle = false;

		_createLayout.call(this);
		_createHeader.call(this);
		_createContent.call(this);
		// _createListView.call(this);

		// console.log('this1: ', this)
		_createEventsRouter.call(this);
	}

	PageView.prototype = Object.create(View.prototype);
	PageView.prototype.constructor = PageView;

	PageView.DEFAULT_OPTIONS = {
		headerSize: 44
	};

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

	function _createContent() {
		this.contentView = new ContentView();
		this.layout.content.add(this.contentView);
	}

	function _createListView() {
		this.contentView = new ContentView();
		// this.contentModifier = new Modifier();
		// this.add(this.contentModifier).add(this.contentView);
		// ({
		// 	// transform: Transform.translate(0, undefined, 50)
		// 	transform: function() {
		// 		return Transform.translate(this.transitionable.get(), 0, 0);
		// 	}.bind(this)
		// });
	}

	// creates a router to allow binding of emitted events to PageView
	function _createEventsRouter () {
		// this will call animateContentIn when 'flipImage' is heard
		// and it will pass in the 'this' that _createEventsRouter is
		// attached to as the paramater for animateContentIn
		eventHandler.on('flipImage', this.animateContentIn.bind(this));
	}

	// animateContentIn will ONLY run if the 'this' it is bound to is 
	// an instance of PageView
	PageView.prototype.animateContentIn = function(e) {
		console.log('in animateContentIn')
		console.log(e);
		// this.showNewView();
		// this.layout.content.set(gridView[0]);
		// transitionable.setTransform(Transform.translate(0,0,0), {
		// 	duration: 400,
		// 	curve: Easing.outCubic
		// });
	}

	PageView.prototype.showNewView = function() {
		this.contentModifier.setTransform(Transform.translate(0,0,0), {
			duration: 400,
			curve: 'easeOut'
		});
		console.log('finish transforming');
	};

	function _setListeners() {
		this.contentView.on('contentToggle', this.toggleContent.bind(this));
	}

	PageView.prototype.toggleContent = function() {
		this.contentToggle ? this.showList() : this.showGrid();
	};

	PageView.prototype.showList = function() {

	};

	PageView.prototype.showGrid = function() {

	};

module.exports = PageView;
})