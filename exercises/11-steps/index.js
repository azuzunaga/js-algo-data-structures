// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

function steps(n) {
  let chars = '';
  let charsCounter = 1;
  while (charsCounter <= n) {
    let spaces = '';
    let spaceCounter = n - charsCounter;
    while (spaceCounter >= 1) {
      spaces += ' ';
      spaceCounter -= 1;
    }
    chars += '#';
    charsCounter += 1;
    console.log(chars + spaces);
  }
  return;
}

module.exports = steps;
