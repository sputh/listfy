/*** ContentView.js ***/

define(function (require, exports, module) {
	var View          = require('famous/core/View');
	var Surface       = require('famous/core/Surface');
	var Transform     = require('famous/core/Transform');
	var StateModifier = require('famous/modifiers/StateModifier');
	var Modifier      = require('famous/core/Modifier');
	var PageView      = require('views/PageView');
	var GridView      = require('views/GridView');
	var ListView			= require('views/ListView');

	function ContentView() {
		View.apply(this, arguments);

		this.contentToggle = false;
		// _createListView.call(this);
		_createBoard.call(this);
	}

	var gridEventHandler = GridView.gridEventHandler;
	console.log(gridEventHandler)

	ContentView.prototype = Object.create(View.prototype);
	ContentView.prototype.constructor = ContentView;

	ContentView.DEFAULT_OPTIONS = {};

	function _createBoard() {
		this.board = new GridView();
		this.add(this.board);
	}

	function _createListView() {
		this.board = new ListView();
		this.add(this.board);
	}

	function _setListeners() {
		this.on('blowImage', function() {
			console.log('hi');
		});
	}
	module.exports = ContentView;
});

//     // creates a router to allow binding of emitted events to PageView
//     function _createEventsRouter () {
//         // this will call animateContentIn when 'flipImage' is heard
//         // and it will pass in the 'this' that _createEventsRouter is
//         // attached to as the paramater for animateContentIn
//         eventHandler.on('flipImage', this.animateContentIn.bind(this));
//       }

//     // animateContentIn will ONLY run if the 'this' it is bound to is 
//     // an instance of PageView
//     PageView.prototype.animateContentIn = function(e) {
//     	console.log('in animateContentIn')
//     	console.log(e);
//         // this.showNewView();
//         // this.layout.content.set(gridView[0]);
//         // transitionable.setTransform(Transform.translate(0,0,0), {
//         //  duration: 400,
//         //  curve: Easing.outCubic
//         // });
// }

// PageView.prototype.showNewView = function() {
// 	this.contentModifier.setTransform(Transform.translate(0,0,0), {
// 		duration: 400,
// 		curve: 'easeOut'
// 	});
// 	console.log('finish transforming');
// };

// function _setListeners() {
// 	this.contentView.on('contentToggle', this.toggleContent.bind(this));
// }

// PageView.prototype.toggleContent = function() {
// 	this.contentToggle ? this.showList() : this.showGrid();
// };

// PageView.prototype.showList = function() {

// };

// PageView.prototype.showGrid = function() {

// };
