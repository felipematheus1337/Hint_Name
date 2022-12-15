# Consonant [![npm version](https://badge.fury.io/js/consonant.svg)](https://badge.fury.io/js/consonant)

Tiny library for working with consonants.

## Install

```
$ npm install consonant
```

## Usage

```js
const consonant = require('consonant');

const { consonants } = consonant;
//=> ['b', 'c', 'd', 'f', ...]

const { isConsonant } = consonant;
isConsonant('x');
//=> true

const { includesConsonant } = consonant;
includesConsonant('rhythms');
//=> true

const { startsWithConsonant } = consonant;
startsWithConsonant('xylophone');
//=> true

const { endsWithConsonant } = consonant;
endsWithConsonant('persiflage');
//=> false
```

## API

### .consonants

Returns an `array` with a list of consonants.

### .y(`boolean`)

If whether `y` should be included as a consonant.

### .isConsonant(`string`)

If string is a single character, returns whether the string is a consonant. If string is longer than a single character, calls `.includesConsonant`.

### .includesConsonant(`string`)

Returns whether the string includes consonants.

### .startsWithConsonant(`string`)

Returns whether the string starts with a consonant.

### .endsWithConsonant(`string`)

Returns whether the string ends with a consonant.

#

<p align="center">
  <a href="http://paco.sh"><img src="https://raw.githubusercontent.com/pacocoursey/pacocoursey.github.io/master/footer.png" height="300"></a>
</p>
