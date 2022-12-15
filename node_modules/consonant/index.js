const consonants = ['b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 's', 't', 'v', 'w', 'x', 'y', 'z'];

function validate(s) {
  if (typeof s !== 'string') {
    throw new TypeError(`Expected string, received ${typeof s}.`);
  }
}

function isConsonant(c) {
  if (c.length > 1) return includesConsonant(c);
  validate(c);
  return consonants.indexOf(c.toLowerCase()) !== -1;
}

function y(b) {
  if (b === true) {
    if (consonants.indexOf('y') === -1) consonants.push('y');
  } else if (b === false) {
    consonants.splice(consonants.indexOf('y'), 1);
  }
  return this;
}

function includesConsonant(s) {
  validate(s);

  for (let i = 0; i < s.length; i += 1) {
    if (isConsonant(s.charAt(i))) return true;
  }
  return false;
}

function startsWithConsonant(s) {
  validate(s);
  return consonants.some(v => s.toLowerCase().startsWith(v));
}

function endsWithConsonant(s) {
  validate(s);
  return consonants.some(v => s.toLowerCase().endsWith(v));
}

module.exports = {
  consonants,
  y,
  isConsonant,
  includesConsonant,
  startsWithConsonant,
  endsWithConsonant,
};
