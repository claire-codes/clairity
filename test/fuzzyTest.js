var expect = require('chai').expect;
var fuzzy = require('../index').fuzzy;

describe("#fuzzy", function() {
    var testString;

    it("returns true if there is a direct partial match", function() {
        testString = "dragonfly";
        expect(fuzzy(testString, "dragonfly")).to.eq(true);
        expect(fuzzy(testString, "dragon")).to.eq(true);
        expect(fuzzy(testString, "fly")).to.eq(true);
        expect(fuzzy(testString, "gon")).to.eq(true);
    });

    xit("returns null if args are wrong", function() {
      testArray = ['foo','bar'];
      expect(howMany()).to.equal(null);
      expect(howMany(testArray)).to.equal(null);
      expect(howMany('foo')).to.equal(null);
    });

    xit("returns null if arg types aren't array & string/number", function() {
      var anArray = [];
      var anObject = {};
      expect(howMany(anArray, anArray)).to.eq(null);
      expect(howMany(anArray, anObject)).to.eq(null);
      expect(howMany(anObject, anArray)).to.eq(null);
    });
});
