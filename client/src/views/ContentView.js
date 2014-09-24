/*** ContentView.js ***/

define(function(require, exports, module) {
  var View          = require('famous/core/View');
  var Surface       = require('famous/core/Surface');
  var Transform     = require('famous/core/Transform');
  var StateModifier = require('famous/modifiers/StateModifier');
  var PageView      = require('views/PageView')
  var GridView          = require('views/GridView')
  var Modifier      = require("famous/core/Modifier");

  // defines grid view on the same scope as PageView to allow accessibility
  var gridView = [];

  function ContentView() {
    View.apply(this, arguments);

    _createBoard.call(this);
    }

    ContentView.prototype = Object.create(View.prototype);
    ContentView.prototype.constructor = ContentView;

    ContentView.DEFAULT_OPTIONS = {};
    
    function _createBoard() {
        this.board = new GridView();
        this.add(this.board);
    }
    
    module.exports = ContentView;
});
