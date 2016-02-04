var expect = require('chai').expect;
var howMany = require('../index').howMany;

describe("#howMany", function() {
    var testArray;
    it("an array of all the same element", function() {
        testArray = ['foo', 'foo', 'foo'];
        expect(howMany(testArray, 'foo')).to.equal(3);
        expect(howMany(testArray, 'Foo')).to.equal(0);
    });

    it("an array with one element", function() {
        testArray = ['BAZ'];
        expect(howMany(testArray, 'BAZ')).to.equal(1);
        expect(howMany(testArray, 'boz')).to.equal(0);
    });

    it("mixture of elements", function() {
        testArray = ['bar', 'foo', 'foo', 'bar'];
        expect(howMany(testArray, 'foo')).to.equal(2);
    });

    it("none match in array", function() {
        testArray = ['bar', 'bar'];
        expect(howMany(testArray, 'foo')).to.equal(0);
    });

    it("is case-sensitive", function() {
      testArray = ['bosh', 'BOSH', 'Bosh'];
      expect(howMany(testArray, 'bosh')).to.equal(1);
      expect(howMany(testArray, 'BOSH')).to.equal(1);
      expect(howMany(testArray, 'Bosh')).to.equal(1);
    });

    it("just returns 0 if given an empty array", function() {
      testArray = [];
      expect(howMany(testArray, 'blap')).to.equal(0);
    });

    it("can find numbers OK", function() {
      testArray = [41,43,42,42,43,42];
      expect(howMany(testArray, 42)).to.equal(3);
    });

    it("returns null if args are wrong", function() {
      testArray = ['foo','bar'];
      expect(howMany()).to.equal(null);
      expect(howMany(testArray)).to.equal(null);
      expect(howMany('foo')).to.equal(null);
    });

    it("returns null if arg types aren't array & string/number", function() {
      var anArray = [];
      var anObject = {};
      expect(howMany(anArray, anArray)).to.eq(null);
      expect(howMany(anArray, anObject)).to.eq(null);
      expect(howMany(anObject, anArray)).to.eq(null);
    });
});
