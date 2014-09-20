define(function(require, exports, module) {
	var View 				= require('famous/core/View');
	var Engine 			= require("famous/core/Engine");
	var Surface 		= require("famous/core/Surface");
	var GridLayout 	= require("famous/views/GridLayout");	
	
	function GridView(options) {
		console.log(options.dimensions);
		View.apply(this, arguments);

		_createGrid.call(this);
	}
	var grid = new GridLayout({
		dimensions: this.options
	});

	var gridSurfaces = [];
	grid.sequenceFrom(gridSurfaces);

	for(var i = 0; i < 8; i++) {
		gridSurfaces.push(new Surface({
			content: "panel " + (i + 1),
			size: [undefined, undefined],
			properties: {
				backgroundColor: "hsl(" + (i * 360 / 8) + ", 100%, 50%)",
				color: "#404040",
				lineHeight: '200px',
				textAlign: 'center'
			}
		}));
	}
	module.exports = GridView;
});
