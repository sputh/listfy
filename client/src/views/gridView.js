/*** GridView.js ***/

define(function(require, exports, module) {
	var View 					= require('famous/core/View');
	var Engine 				= require("famous/core/Engine");
	var Surface 			= require("famous/core/Surface");
	var ImageSurface  = require('famous/surfaces/ImageSurface');
	var GridLayout 		= require("famous/views/GridLayout");
	var Modifier      = require("famous/core/Modifier");
	var Transform     = require('famous/core/Transform');
	var EventHandler  = require('famous/core/EventHandler');
	
	function GridView(options) {
		View.apply(this, arguments);

		_createGrid.call(this);
    _setEmiters.call(this);
	}

	GridView.prototype = Object.create(View.prototype);
	GridView.prototype.constructor = GridView;

	var gridView = [];
	var eventHandler = new EventHandler();

	function _createGrid() {
    // defines Grid Layout
    this.grid = new GridLayout({
    	dimensions: [3, 2]
    });

    this.contentModifier = new Modifier({
    	duration: 400,
    	curve: 'easeOut',
    	transform: Transform.translate(0,0,0)
    });

    // creates an array of all the surfaces of the grid
    this.grid.sequenceFrom(gridView);

    imgObject = {
    	1: './assets/pic1.jpg',
    	2: './assets/pic2.jpg',
    	3: './assets/pic3.jpg',
    	4: './assets/pic4.jpg',
    	5: './assets/pic5.jpg',
    	6: './assets/pic6.jpg'
    };

    // protects and privatizes gridArray
    var gridArray;

    for(var i = 1; i < 8; i++) {
    	gridArray = new ImageSurface({
        // content: imgObject[1+i],
        content: imgObject[i],
        index: i,
        size: [undefined, undefined],
        properties: {
        	lineHeight: '200px',
        	textAlign: 'center',
        	class: i
        }
      });
    	gridView.push(gridArray);
    }

    // Apply modifier to content
    this.add(this.contentModifier).add(this.grid);
  }

  function _setEmiters() {
  	for(var i = 0; i < gridView.length; i++) {
  		var holder = gridView[i];
  		function _listening() {
  			this.on('click', function() {
  				eventHandler.emit('flipImage');
  				console.log(this);
            // _animateContentIn.call(this);
          }.bind(this))
  		};
  		_listening.call(holder);
  	}
  }

  module.exports = GridView;
});
