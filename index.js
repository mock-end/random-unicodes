'use strict';

var clamp         = require('clamp');
var padStart      = require('pad-start');
var toUpper       = require('to-upper');
var toLength      = require('to-length');
var toString      = require('to-str');
var randomNatural = require('random-natural');


var MAX = 1114109;

function fixme(val) {
  if (typeof val === 'number') {
    return val;
  } else {
    val = toString(val).replace(/^\\u/, '0x');
    return toLength(val);
  }
}

module.exports = function (options) {

  // unicode range: http://billposer.org/Linguistics/Computation/UnicodeRanges.html

  if (options) {
    options.min = fixme(options.min);
    options.max = fixme(options.max);
  } else {
    options = {
      min: 0,
      max: MAX
    };
  }

  options.min = clamp(options.min, 0, MAX);
  options.max = clamp(options.max, 0, MAX);

  options.inspected = true;

  var int = randomNatural(options);
  var hex = int.toString(16);

  hex = padStart(hex, 4, 0);

  return '\\u' + toUpper(hex);
};
