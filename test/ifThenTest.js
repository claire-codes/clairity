'use strict';

var expect = require('chai').expect;
var ifThen = require('../module/ifThen');

describe('#ifThen', function() {
  it('if-condition is true returns 2nd argument', function() {
    expect(ifThen(true, true)).to.be.true;
    expect(ifThen(true, false)).to.be.false;
    expect(ifThen('meh', 'smeh')).to.equal('smeh');
    expect(ifThen([], 42)).to.equal(42);
    expect(ifThen({}, 42)).to.equal(42);
    expect(ifThen((2 < 3), 'ja')).to.equal('ja');
  });

  it('if-condition is false returns undefined', function() {
    expect(ifThen(false, 'foo')).to.be.undefined;
    expect(ifThen('', 'foo')).to.be.undefined;
    expect(ifThen(0, 'foo')).to.be.undefined;
    expect(ifThen(undefined, 'foo')).to.be.undefined;
    expect(ifThen(null, 'foo')).to.be.undefined;
    expect(ifThen(NaN, 'foo')).to.be.undefined;
    expect(ifThen((3 < 2), 'bar')).to.be.undefined;
  });

  it('only one argument returns an error message', function() {
    expect(ifThen('floop')).to.equal('Must provide a condition and result');
  });

  it('no arguments returns an error message', function() {
    expect(ifThen()).to.equal('Must provide a condition and result');
  });
});
