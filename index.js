var ifThen = require('./module/ifThen');
var itContains = require('./module/itContains');

module.exports = (function() {
  return {
    // ifThen: function(condition, result) {
    //   if (arguments.length != 2) {
    //     return 'Must provide a condition and result';
    //   }
    //   if (condition) {
    //     return result;
    //   } else {
    //     return undefined;
    //   }
    // }
    ifThen: ifThen,
    itContains: itContains
  }
})();
