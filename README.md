# clairity [![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][daviddm-image]][daviddm-url] [![Coverage percentage][coveralls-image]][coveralls-url]

Claire's Utility JavaScript functions. :nut_and_bolt::wrench:

Inspired by [1-liners](https://github.com/1-liners/1-liners) - even though they aren't 1-liners.

## Installation

From the command line, on a computer with node installed:

```
npm i clairity
```

## Usage

The package is made up of the following four functions. You can use them one-by-one as shown below:

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

Or you can pull in the entire module and use functions when required.

```
var c = require('clairity');
c.ifThen('4 > 2', 'wah');
```

## Run the tests

Clone the repo, install the dependencies and then from the command line:

```
npm test
```

## Code of conduct

[Here](https://github.com/claireparker/clairity/blob/master/CODE_OF_CONDUCT.md). :star2::couple::sunny:

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
