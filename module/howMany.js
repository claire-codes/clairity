'use strict';
var _ = require("underscore");

module.exports = function(arr, el) {
  var count = 0;
  if (arguments.length < 2) {
    return null;
  } else if (!(_.isArray(arr))) {
    return null;
  } else if (!(_.isString(el)) && !(_.isNumber(el))) {
    return null;
  }
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === el) {
      count++
    }
  }
  return count;
};
