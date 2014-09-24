/*** ListView.js ***/

define(function(require, exports, module) {
  var View            = require('famous/core/View');
  var Surface         = require('famous/core/Surface');
  var Transform       = require('famous/core/Transform');
  var StateModifier   = require('famous/modifiers/StateModifier');
  var ImageSurface    = require('famous/surfaces/ImageSurface');
  var Modifier        = require("famous/core/Modifier");

  function ListView() {
    View.apply(this, arguments);

    _createContent.call(this);

  }

  ListView.prototype = Object.create(View.prototype);
  ListView.prototype.constructor = ListView;

  ListView.DEFAULT_OPTIONS = {};

  function _createContent() {
    var background = new ImageSurface({content: './assets/puppies.jpeg'});
    this..add(background);
  }

module.exports = ListView;
})