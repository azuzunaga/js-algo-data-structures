// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

function pyramid(n, row = 0, level = '') {
  if (n === row) {
    return;
  }

  const middle = Math.floor((n * 2 - 1) / 2);

  if (n * 2 - 1 === level.length) {
    console.log(level);
    return pyramid(n, row + 1);
  }
  let add = '';
  if (level.length >= middle - row && level.length <= middle + row) {
    add += '#';
  } else {
    add += ' ';
  }
  return pyramid(n, row, level + add);
}

// function pyramid(n) {
//   // Number of rows is equal to n, number of columns is equal to 2*n - 1
//   const middle = Math.floor((n * 2 - 1) / 2);

//   for (let row = 0; row < n; row++) {
//     let level = '';

//     for (let col = 0; col < n * 2 - 1; col++) {
//       if (col >= middle - row && col <= middle + row) {
//         level += '#';
//       } else {
//         level += ' ';
//       }
//     }
//     console.log(level);
//   }
//   return;
// }

module.exports = pyramid;
