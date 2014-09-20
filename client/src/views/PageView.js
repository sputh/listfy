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
		this.bodySurface = new Surface({
			content: "To-Do List",
			size: [undefined, undefined],
			properties: {
				textAlign: "center",
				backgroundColor:"#D5D5DA"
			}
		});
		this.layout.content.add(this.bodySurface);
	}

	sync.on('update', function(data) {
		var currentPosition = position.get();
		position.set([
			currentPosition[0] + data.delta[0],
			currentPosition[1] + data.delta[1]
			]);
	});

	sync.on('end', function(data) {
		var currentPosition = position.get();
		position.set([
			currentPosition[0] + data.delta[0],
			currentPosition[1] + data.delta[1]
			]);
	});

	function _createText() {
		var textSurface = new Surface({
			size: [true, true],
			content: this.input,
			properties: {
				fontSize: "250%",
				backgroundColor: "#F5F5F6"
			}
		});

		var stateModifier = new StateModifier();

		var positionModifier = new Modifier({
			transform : function(){
				var currentPosition = position.get();
				console.log(currentPosition)
				return Transform.translate(currentPosition[0], currentPosition[1], 0);
			}
		});

		console.log("createdText!")
		textSurface.pipe(sync);
		this.layout.content.add(stateModifier).add(positionModifier).add(textSurface);
	  stateModifier.setTransform(
	  Transform.translate(100, 400, 0),
	  { duration : 5000, curve: Easing.OutBack }
);
	}


	var centerModifier = new Modifier({origin : [0.5, 0.5]});

	PageView.prototype.addTextToBody = function() {
		PageView.prototype.input = this.textInput.getValue();
		if (this.input) {
			console.log("input: ",this.input);
			// add input to body content in grid layout?
			_createText.call(this);
		}
	};

	module.exports = PageView;
})