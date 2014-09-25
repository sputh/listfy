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
    // _setEmiters.call(this);
	}

	var spinContext = Engine.createContext();

	GridView.prototype = Object.create(View.prototype);
	GridView.prototype.constructor = GridView;

	var gridArray = [];
	var gridEventHandler = new EventHandler();

  var initialTime = Date.now();
  var flipImageModifier = new Modifier({
  	origin: [0.5, 0.5],
  	transform: function() {
  		return Transform.rotateY(.002 * (Date.now() - initialTime));
  	}
  })

	function _createGrid() {
    // defines Grid Layout
    this.grid = new GridLayout({
    	dimensions: [3, 2]
    });

    // creates an array of all the surfaces of the grid
    this.grid.sequenceFrom(gridArray);

    imgObject = {
    	1: './assets/pic1.jpg',
    	2: './assets/pic2.jpg',
    	3: './assets/pic3.jpg',
    	4: './assets/pic4.jpg',
    	5: './assets/pic5.jpg',
    	6: './assets/pic6.jpg'
    };

    // protects and privatizes gridBox
    var gridBox;

    for(var i = 1; i < 8; i++) {
    	gridBox = new ImageSurface({
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

      gridBox.on('click', function() {
      	console.log(this);
      	// spinContext.add(flipImageModifier).add(gridBox);
      });

    	var gridContext = Engine.createContext()
    	// var gridView = gridContext.add(gridBox);

    	gridArray.push(gridBox);
    }

    // Apply modifier to content
    this.add(this.grid);
    console.log(this.grid);
  }

  function _setEmiters() {
  	for(var i = 0; i < gridArray.length; i++) {
  		var holder = gridArray[i];
  		function _listening() {
  			this.on('click', function() {
  				// on 'click' --> flip image
  				// after 'flipImage' --> blow up
  				gridEventHandler.emit('blowImage');
  				console.log(this);
            // _animateContentIn.call(this);
          }.bind(this))
  		};
  		_listening.call(holder);
  	}
  }

  module.exports = GridView;
});
