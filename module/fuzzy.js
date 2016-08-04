'use strict';
var _ = require("underscore");


module.exports = function(candidate, partial) {
    var match = false,
        partial = partial.toLowerCase(),
        candidate = candidate.toLowerCase(),
        partialCounter = 0;

    for (var i = 0, len = candidate.length; i < len; i++) {
        if (candidate[i] === partial[partialCounter]) {
            partialCounter++;
            if (partialCounter === partial.length) {
                match = true;
                break;
            }
        }
    }

    return match;
};