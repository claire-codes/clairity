'use strict';
var _ = require("underscore");

/**
 * Replaces whitespace with whatever character is provided.
 * Will concatenate consecutive runs of whitespace with one replacement character.
 * Trims whitespace from the beginning and end of the string.
 *
 * @param {string} str The string to do the replacing on.
 * @param {str} replacement The character to replace the whitespace with.
 * @return {str} The original str without whitespace.
 */
module.exports = function(str, replacement) {
  if (!(_.isString(replacement))) {
    replacement = '';
  }
  str = str.trim();
  str = str.replace(/(\s)+/, ' ');
  return str.replace(new RegExp('\\s', 'g'), replacement);
};
