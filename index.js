var ifThen = require('./module/ifThen');
var itContains = require('./module/itContains');
var howMany = require('./module/howMany');
var replaceWhitespace = require('./module/replaceWhitespace');

module.exports = (function() {
  return {
    howMany: howMany,
    ifThen: ifThen,
    itContains: itContains,
    replaceWhitespace: replaceWhitespace
  }
})();
