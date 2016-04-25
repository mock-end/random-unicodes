'use strict';

var expect = require('chai').expect;


describe('random-unicode: ', function () {

  var randomUnicode = require('../../');

  it('randomUnicode()', function () {
    expect(randomUnicode()).to.be.a('string');
    expect(randomUnicode()).to.be.match(/^\\u[0-9A-F]{4,6}$/);
  });

  it('randomUnicode({ max: "\\uFFFF" })', function () {
    var count = 100;

    while (count--) {
      expect(randomUnicode({ max: '\\uFFFF' })).to.be.match(/^\\u[0-9A-F]{4}$/);
    }
  });

  it('randomUnicode({ max: 65535 })', function () {
    var count = 100;

    while (count--) {
      expect(randomUnicode({ max: 65535 })).to.be.match(/^\\u[0-9A-F]{4}$/);
    }
  });

  it('randomUnicode({min: "\\uFFFF", max: "\\uFFFF"})', function () {
    var count = 100;

    while (count--) {
      expect(randomUnicode({
        min: '\\uFFFF',
        max: '\\uFFFF'
      })).to.be.equal('\\uFFFF')
    }
  });
});
