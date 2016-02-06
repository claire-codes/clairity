'use strict';

/**
 * Evaluates whether a condition is true.
 * Returns the provided result if true.
 * Returns undefined if false.
 *
 * @param {any} condition to evaluate
 * @param {boolean} result to return if condition is truthy
 */

module.exports = function(condition, result) {
  if (arguments.length != 2) {
    return 'Must provide a condition and result';
  }
  if (condition) {
    return result;
  } else {
    return undefined;
  }
};
