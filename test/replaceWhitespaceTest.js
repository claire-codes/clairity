var expect = require('chai').expect;
var replaceWhitespace = require('../index').replaceWhitespace;

describe("#replaceWhitespace", function() {
  var result;

  it("replaces whitespace in string with a specified character", function() {
    result = replaceWhitespace('foo bar', '-');
    expect(result).to.equal('foo-bar');
  });

  it("replaces multiple instances of whitespace in string with a specified character", function() {
    result = replaceWhitespace('bish bash bosh', '$');
    expect(result).to.equal('bish$bash$bosh');
  });

  it("strips extra whitespace while replacing", function() {
    result = replaceWhitespace(' foo bar ', '%');
    expect(result).to.equal('foo%bar');
  });

  it("concatenates runs of whitespace to one replacement character", function() {
    result = replaceWhitespace(' foo    bar bash  ', '^');
    expect(result).to.equal('foo^bar^bash');
  });

  it("removes whitespace if no replacement is provided", function() {
    result = replaceWhitespace(' ooby dooby   doo  ');
    expect(result).to.equal('oobydoobydoo');
  });

  it("doesn't like numbers unless they're strings", function() {
    result = replaceWhitespace('l r','8');
    expect(result).to.equal('l8r');
    result = replaceWhitespace('l r',8);
    expect(result).to.equal('lr');
  });

  it("just removes whitespace for non-string replacement", function() {
    result = replaceWhitespace('fiddle   sticks', 9);
    expect(result).to.equal('fiddlesticks');
    result = replaceWhitespace('fiddle   sticks', []);
    expect(result).to.equal('fiddlesticks');
    result = replaceWhitespace('fiddle   sticks', {});
    expect(result).to.equal('fiddlesticks');
    result = replaceWhitespace('fiddle   sticks', true);
    expect(result).to.equal('fiddlesticks');
    result = replaceWhitespace('fiddle   sticks', false);
    expect(result).to.equal('fiddlesticks');
    result = replaceWhitespace('fiddle   sticks', null);
    expect(result).to.equal('fiddlesticks');
    result = replaceWhitespace('fiddle   sticks', undefined);
    expect(result).to.equal('fiddlesticks');
    result = replaceWhitespace('fiddle   sticks', NaN);
    expect(result).to.equal('fiddlesticks');
  });
});
