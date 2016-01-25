'use strict';

module.exports = function(stringToSearch, stringToFind) {
  if (arguments.length != 2) {
    return 'YOU ARE STUPID';
  } else if (typeof stringToSearch !== 'string') {
    return 'Provide a string to search stupid';
  } else if (typeof stringToFind !== 'string') {
    return 'Provide a string to find stupid';
  } else if (stringToSearch.toLowerCase().indexOf(stringToFind.toLowerCase()) > -1) {
    return true;
  } else {
    return false;
  };
};
