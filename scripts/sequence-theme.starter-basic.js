/**
 * Theme Name: Starter Basic
 * Version: 1.0.0
 * Theme URL: http://sequencejs.com/themes/starter-basic/
 *
 * Use this blank theme to start building your own themes. Steps are stacked on
 * top of each other so only the content will animate.
 *
 * This theme is powered by Sequence.js - The
 * responsive CSS animation framework for creating unique sliders,
 * presentations, banners, and other step-based applications.
 *
 * Author: Ian Lunn
 * Author URL: http://ianlunn.co.uk/
 *
 * Theme License: http://sequencejs.com/licenses/#free-theme
 * Sequence.js Licenses: http://sequencejs.com/licenses/
 *
 * Copyright © 2015 Ian Lunn Design Limited unless otherwise stated.
 */

// Get the Sequence element
var sequenceElement1 = document.getElementById("sequence1");
var mySequence1 = sequence(sequenceElement1);

var sequenceElement2 = document.getElementById("sequence2");
var mySequence2 = sequence(sequenceElement2);

var sequenceElement3 = document.getElementById("sequence3");
var mySequence3 = sequence(sequenceElement3);

var sequenceElement4 = document.getElementById("sequence4");
var mySequence4 = sequence(sequenceElement4);

var sequenceElement5 = document.getElementById("sequence5");
var mySequence5 = sequence(sequenceElement5);
// Place your Sequence options here to override defaults
// See: http://sequencejs.com/documentation/#options
var options = {

}

// Launch Sequence on the element, and with the options we specified above

var mySequence = sequence(sequenceElement, options);

