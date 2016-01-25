'use strict';

var expect = require('chai').expect;
var itContains = require('../index').itContains;

describe('#itContains', function() {
  it('returns true if the string contains search term', function() {
    expect(itContains('foobar', 'ooba')).to.be.true;
    expect(itContains('foobar', 'OOBA')).to.be.true;
    expect(itContains('FOOBAR', 'ooba')).to.be.true;
    expect(itContains('foobar', 'foobar')).to.be.true;
    expect(itContains('foobar', 'foo')).to.be.true;
    expect(itContains('foobar', 'bar')).to.be.true;
  });

  it('returns false if the string does not contain the search term', function() {
    expect(itContains('foobar', 'foo bar')).to.be.false;
    expect(itContains('foobar', 'foof')).to.be.false;
    expect(itContains('foobar', 'foobars')).to.be.false;
  });

  it('has a shit if the arguments aren\'t strings', function() {
    // expect(itContains('foobar', '')).to.equal('Provide a string to find stupid')
    expect(itContains('foobar', 123)).to.equal('Provide a string to find stupid')
    expect(itContains('foobar', null)).to.equal('Provide a string to find stupid')
    expect(itContains('foobar', undefined)).to.equal('Provide a string to find stupid')
    expect(itContains('foobar', true)).to.equal('Provide a string to find stupid')
    expect(itContains('foobar', false)).to.equal('Provide a string to find stupid')
    expect(itContains('foobar', /foobar/)).to.equal('Provide a string to find stupid')
  });

  it('tells you how stupid you are if you provide incorrect arguments', function() {
    expect(itContains()).to.equal('YOU ARE STUPID');
    expect(itContains('foo')).to.equal('YOU ARE STUPID');
    expect(itContains('foo', 'bar', 'baz')).to.equal('YOU ARE STUPID');
  });
})
