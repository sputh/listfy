define(function(require, exports, module) {
  var View            = require('famous/core/View');
  var Modifier        = require('famous/core/Modifier');
  var Transform       = require('famous/core/Transform');
  var StateModifier   = require('famous/modifiers/StateModifier');
  var Easing          = require('famous/transitions/Easing');
  var Transitionable  = require('famous/transitions/Transitionable');
  var GenericSync     = require('famous/inputs/GenericSync');
  var MouseSync       = require('famous/inputs/MouseSync');
  var TouchSync       = require('famous/inputs/TouchSync');
  var FastClick       = require('famous/inputs/FastClick');
  var PageView        = require('views/PageView');

  GenericSync.register({'mouse': MouseSync, 'touch': TouchSync});

  function AppView() {
  	View.apply(this, arguments);

  	_createPageView.call(this);
  }

  AppView.prototype = Object.create(View.prototype);
  AppView.prototype.constructor = AppView;

  AppView.DEFAULT_OPTIONS = {};

  function _createPageView() {
  	this.pageView = new PageView();
    this.pageView.on('flipBoard', this.flipList);
  	this.pageModifier = new Modifier({
  		Transform: function() {
  			return Transform.translate(this.pageViewPos.get(), 0, 0);
  		}.bind(this)
  	});
  	this.add(this.pageModifier).add(this.pageView);
  }

  AppView.prototype.flipList = function() {
    console.log('inAPP');
  }

  module.exports = AppView;
})