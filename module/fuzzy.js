'use strict';
var _ = require("underscore");


module.exports = function(candidate, partial) {
    var match = false;
    if (candidate.indexOf(partial) > -1) {
        match = true;
    }
    
  return match;
};
