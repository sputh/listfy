define(function(require, exports, module) {
  var View            = require('famous/core/View');
  var Surface         = require('famous/core/Surface');
  var Modifier        = require('famous/core/Modifier');
  var Transform       = require('famous/core/Transform');
  var StateModifier   = require('famous/modifiers/StateModifier');
  var Easing          = require('famous/transitions/Easing');
  var Transitionable  = require('famous/transitions/Transitionable');
  var GenericSync     = require('famous/inputs/GenericSync');
  var MouseSync       = require('famous/inputs/MouseSync');
  var TouchSync       = require('famous/inputs/TouchSync');
  GenericSync.register({'mouse': MouseSync, 'touch': TouchSync});

  var PageView = require('views/PageView');

  function AppView() {
  	View.apply(this, arguments);

  	_createPageView.call(this);
    // _setListeners.call(this);
  }

  AppView.prototype = Object.create(View.prototype);
  AppView.prototype.constructor = AppView;

  AppView.DEFAULT_OPTIONS = {};

  function _createPageView() {
  	this.pageView = new PageView();
  	this.pageModifier = new Modifier({
  		Transform: function() {
  			return Transform.translate(this.pageViewPos.get(), 0, 0);
  		}.bind(this)
  	});
  	this.add(this.pageView);
  }

  function _setListeners() {
    this.pageView.on('click', function() {
      console.log('app clicked!');
    });
  }

  module.exports = AppView;
})