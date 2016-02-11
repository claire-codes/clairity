var expect = require('chai').expect;
var replaceWhitespace = require('../index').replaceWhitespace;

describe("#replaceWhitespace", function() {
  it("replaces whitespace in string with a specified character", function() {
    var result = replaceWhitespace('foo bar', '-');
    expect(result).to.equal('foo-bar');
  });
  it("replaces multiple instances of whitespace in string with a specified character", function() {
    var result = replaceWhitespace('bish bash bosh', '$');
    expect(result).to.equal('bish$bash$bosh');
  });
  it("strips extra whitespace while replacing", function() {
    var result = replaceWhitespace(' foo bar ', '%');
    expect(result).to.equal('foo%bar');
  });
  it("concatenates runs of whitespace to one replacement character", function() {
    var result = replaceWhitespace(' foo    bar bash  ', '^');
    expect(result).to.equal('foo^bar^bash');
  });
  it("removes whitespace if no replacement is provided", function() {
    var result = replaceWhitespace(' ooby dooby   doo  ');
    expect(result).to.equal('oobydoobydoo');
  });
  // Test for non strings
});
