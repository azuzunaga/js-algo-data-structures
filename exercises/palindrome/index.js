// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindrome(str) {
  return str
    .split('')
    .every((chr, i) => (chr === str[str.length - 1 - i]));
}

// function palindrome(str) {
//   const revStr = str
//     .split('')
//     .reduce((acc, el) => acc = el + acc, '');
//   return str === revStr;
// }

module.exports = palindrome;
