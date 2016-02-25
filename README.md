# clairity [![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][daviddm-image]][daviddm-url] [![Coverage percentage][coveralls-image]][coveralls-url]

Claire's Utility JS functions.

Inspired by [1-liners](https://github.com/1-liners/1-liners) - even though they aren't 1-liners.

## Usage

```
var ifThen = require('clairity').ifThen;
ifThen('3 > 4', 'foo');
// 'foo'
```
```
var howMany = require('clairity').howMany;
howMany(['a', 'b', 'a'], 'a');
// 2
```
```
var itContains = require('clairity').itContains;
itContains('foobar' 'oo');
// true
```
```
var replaceWhitespace = require('clairity').replaceWhitespace;
replaceWhitespace('foo bar', '-');
// 'foo-bar'
```

Or you can pull in the entire module and use functions when you want.

```
var c = require('clairity');
c.ifThen('4 > 2', 'wah');
```

## License

[MIT © Claire Parker](https://github.com/claireparker/clairity/blob/master/LICENSE)

[npm-image]: https://badge.fury.io/js/clairity.svg
[npm-url]: https://npmjs.org/package/clairity
[travis-image]: https://travis-ci.org/claireparker/clairity.svg?branch=master
[travis-url]: https://travis-ci.org/claireparker/clairity
[daviddm-image]: https://david-dm.org/claireparker/clairity.svg?theme=shields.io
[daviddm-url]: https://david-dm.org/claireparker/clairity
[coveralls-image]: https://coveralls.io/repos/claireparker/clairity/badge.svg
[coveralls-url]: https://coveralls.io/r/claireparker/clairity
