// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
  const result_arr = [];
  str.split('').forEach(el => result_arr.unshift(el));
  return result_arr.join('');
}

module.exports = reverse;
