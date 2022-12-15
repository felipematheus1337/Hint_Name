import test from 'ava';

const consonant = require('./index');

test('fail isConsonant', (t) => {
  t.is(consonant.isConsonant('a'), false);
});

test('succeed isConsonant', (t) => {
  t.is(consonant.isConsonant('x'), true);
});

test('fail includesConsonant', (t) => {
  t.is(consonant.includesConsonant('aeiou'), false);
});

test('disable y flag with y flag already off', (t) => {
  t.is(consonant.y(false).isConsonant('y'), false);
});

test('enable y flag with y flag already on', (t) => {
  const c = consonant.consonants;
  t.is(consonant.y(true).consonants, c);
});

test('fail isConsonant with y flag off', (t) => {
  t.is(consonant.y(false).isConsonant('y'), false);
});

test('succeed includesConsonant with y flag', (t) => {
  t.is(consonant.y(false).includesConsonant('rhythms'), true);
});

test('fail startsWithConsonant', (t) => {
  t.is(consonant.startsWithConsonant('alpha'), false);
});

test('succeed endsWithConsonant', (t) => {
  t.is(consonant.endsWithConsonant('super'), true);
});

test('pass string to isConsonant', (t) => {
  t.is(consonant.isConsonant('alpha'), true);
});
