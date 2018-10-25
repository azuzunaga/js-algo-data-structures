// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  const strCount = {};
  str.split('').forEach(char => {
    if (strCount[char]) {
      strCount[char] += 1;
    } else {
      strCount[char] = 1;
    }
  });

  const maxCount = Math.max(...Object.values(strCount));
  const maxIdx = Object.values(strCount).indexOf(maxCount);

  return Object.keys(strCount)[maxIdx];
}

module.exports = maxChar;
