'use strict';
var _ = require("underscore");

/**
 * Returns Boolean indicating whether a string is contained within another, ignoring case.
 *
 * @param {string} stringToSearch The string being searched within.
 * @param {string} stringToFind The string to find within the previous argument.
 * @return {boolean} Whether match exists.
 */
module.exports = function(stringToSearch, stringToFind) {
  if (arguments.length != 2) {
    return 'YOU ARE STUPID';
  } else if (!(_.isString(stringToSearch))) {
    return 'Provide a string to search stupid';
  } else if (!(_.isString(stringToFind))) {
    return 'Provide a string to find stupid';
  } else if (stringToSearch.toLowerCase().indexOf(stringToFind.toLowerCase()) > -1) {
    return true;
  } else {
    return false;
  };
};
