'use strict';
var _ = require("underscore");

/**
 * Returns a count of how many times an element appears within an array.
 * Returns null on error.
 *
 * @param {array} arr The array to search within.
 * @param {any} el The valid array element to search for occurences.
 * @return {number} The total number of times that the element appears in the array.
 */
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
