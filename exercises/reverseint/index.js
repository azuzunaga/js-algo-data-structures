// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
  const reversed = n
    .toString()
    .split('')
    .reverse()
    .join('');
  const revInt = parseInt(reversed);
  return Math.sign(n) === -1 ? revInt * -1 : revInt;
}

// function reverseInt(n) {
//   const stringInt = '' + n;
//   const reversed = stringInt
//     .split('')
//     .reduce((acc, el) => el + acc, '');
//   const revInt = parseInt(reversed);
//   if (stringInt[0] === '-') {
//     return revInt * -1;
//   }
//   return revInt;
// }

module.exports = reverseInt;
