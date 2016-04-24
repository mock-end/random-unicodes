# random-unicodes

> Return a random unicode.

[![MIT License](https://img.shields.io/badge/license-MIT_License-green.svg?style=flat-square)](https://github.com/mock-end/random-unicodes/blob/master/LICENSE)

[![build:?](https://img.shields.io/travis/mock-end/random-unicodes/master.svg?style=flat-square)](https://travis-ci.org/mock-end/random-unicodes)
[![coverage:?](https://img.shields.io/coveralls/mock-end/random-unicodes/master.svg?style=flat-square)](https://coveralls.io/github/mock-end/random-unicodes)


## Install

```
$ npm install --save random-unicodes
```

## Usage

> For more use-cases see the [tests](https://github.com/mock-end/random-unicodes/blob/master/test/spec/index.js)

```js
var randomUnicode = require('random-unicodes');

// API
// - randomUnicode();
// - randomUnicode(max);
// - randomUnicode(min, max);
// `min` and `max` should between `0` and `1114109`
// or as unicode, between `'\u0000'` and `'\u10FFFD'`
// ref: http://billposer.org/Linguistics/Computation/UnicodeRanges.html

randomUnicode();
// => \uaf91

randomUnicode(65535);
// => \u00F4

randomUnicode('\\uFFFF');
// => \u00F4

randomUnicode(0, 1114109);
// => \u2F7FF
```


## Contributing

Pull requests and stars are highly welcome.

For bugs and feature requests, please [create an issue](https://github.com/mock-end/random-unicodes/issues/new).
