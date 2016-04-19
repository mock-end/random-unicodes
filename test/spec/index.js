'use strict';

var expect = require('chai').expect;


describe('random-unicode: ', function () {

  var randomUnicode = require('../../');

  it('randomUnicode()', function () {
    expect(randomUnicode()).to.be.a('string');
    expect(randomUnicode()).to.be.match(/^\\u[0-9A-F]{4,6}$/);
  });

  it('randomUnicode("\\uFFFF")', function () {
    expect(randomUnicode('\\uFFFF')).to.be.match(/^\\u[0-9A-F]{4}$/);
  });

  it('randomUnicode(65535)', function () {
    expect(randomUnicode(65535)).to.be.match(/^\\u[0-9A-F]{4}$/);
  });

  it('randomUnicode("\\uFFFF", "\\uFFFF")', function () {
    expect(randomUnicode('\\uFFFF', '\\uFFFF')).to.be.equal('\\uFFFF')
  });
});
