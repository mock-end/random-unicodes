'use strict';

var clamp         = require('clamp');
var padStart      = require('pad-start');
var toUpper       = require('to-upper');
var toLength      = require('to-length');
var toString      = require('to-str');
var randomNatural = require('random-natural');

function fixme(val) {
  if (typeof val === 'number') {
    return val;
  } else {
    val = toString(val).replace(/^\\u/, '0x');
    return toLength(val);
  }
}

module.exports = function (min, max) {

  // unicode range: http://billposer.org/Linguistics/Computation/UnicodeRanges.html

  var length = arguments.length;

  if (length === 0) {
    min = 0;
    max = 1114109;
  } else if (length === 1) {
    max = fixme(min);
    min = 0;
  } else {
    min = fixme(min);
    max = fixme(max);
  }

  min = clamp(min, 0, 1114109);
  max = clamp(max, 0, 1114109);

  var int = randomNatural(min, max);
  var hex = int.toString(16);

  hex = padStart(hex, 4, 0);

  return '\\u' + toUpper(hex);
};
