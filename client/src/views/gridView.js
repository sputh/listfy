define(function(require, exports, module) {
	var Engine = require("famous/core/Engine");
	var Surface = require("famous/core/Surface");
	var GridLayout = require("famous/views/GridLayout");	
	
	function GridView() {
		View.apply(this, arguments);

		_createLayout.call(this);
		_createHeader.call(this);
		_createBody.call(this);

	}
	var grid = new GridLayout({
		dimensions: [2, 2]
	});

	var surfaces = [];
	grid.sequenceFrom(surfaces);

	for(var i = 0; i < 8; i++) {
		surfaces.push(new Surface({
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
}
