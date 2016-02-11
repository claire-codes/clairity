'use strict';
var _ = require("underscore");

/**
 * Replaces whitespace with whatever character is provided.
 * Will concatenate consecutive runs of whitespace with one replacement character.
 * Trims whitespace from the beginning and end of the string.
 *
 * @param {string} str The string to do the replacing on.
 * @param {str} replace The character to replace the whitespace with.
 * @return {str} The original str without whitespace.
 */
module.exports = function(str, replace) {
  // not amazing, what about other falseys or non-strings?
  if (replace === undefined) {
    replace = '';
  }
  str = str.trim();
  return str.replace(new RegExp('\\s', 'g'), replace);
};
