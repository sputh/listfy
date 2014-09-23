/*** ContentView.js ***/

define(function(require, exports, module) {
    var View          = require('famous/core/View');
    var Surface       = require('famous/core/Surface');
    var Transform     = require('famous/core/Transform');
    var StateModifier = require('famous/modifiers/StateModifier');
    var ImageSurface  = require('famous/surfaces/ImageSurface');
    var PageView      = require('views/PageView')
    function ContentView() {
        View.apply(this, arguments);

        _createText.call(this);
    }

    ContentView.prototype = Object.create(View.prototype);
    ContentView.prototype.constructor = ContentView;

    ContentView.DEFAULT_OPTIONS = {
        width: 320,
        height: 55,
        angle: -0.2,
        iconSize: 32,
        iconUrl: 'img/strip-icons/famous.png',
        title: 'Famo.us',
        fontSize: 26,
    };

    function _createText() {
        var textSurface = new Surface({
            size: [true, true],
            content: PageView.input
        });
        this.add(textSurface);
        console.log("createdText!")
    }
    module.exports = ContentView;
});
