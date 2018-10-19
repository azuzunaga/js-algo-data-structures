// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
  return str.split('').reduce((acc, el) => el + acc, '');
}

// function reverse(str) {
//   let revStr = '';
//   for (let chr of str) {
//     revStr = chr + revStr;
//   }
//   return revStr;
// }

// function reverse(str) {
//   const resultArr = [];
//   str.split('').forEach(el => resultArr.unshift(el));
//   return resultArr.join('');
// }

module.exports = reverse;
