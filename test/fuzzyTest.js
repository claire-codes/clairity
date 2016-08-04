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
    
    it("returns true if the letters are not next to each other", function() {
        testString = "toadstool";
        expect(fuzzy(testString, "as")).to.eq(true);
        expect(fuzzy(testString, "toadtool")).to.eq(true);
        expect(fuzzy(testString, "tt")).to.eq(true);
        expect(fuzzy(testString, "tl")).to.eq(true);
    });
    
    it("is case-insensitive", function() {
        testString = "Blackberry";
        expect(fuzzy(testString, "bLACKBERRY")).to.eq(true);
        expect(fuzzy(testString, "Bb")).to.eq(true);
        expect(fuzzy(testString, "bb")).to.eq(true);
        expect(fuzzy(testString, "bB")).to.eq(true);
    })

});
