var ifThen = require('./module/ifThen');

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
    ifThen: ifThen
  }
})();
