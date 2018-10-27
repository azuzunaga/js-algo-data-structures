// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(array, size) {
  const results = [];
  for (let item of array) {
    let lastArray = results[results.length - 1];
    if (!lastArray || lastArray.length === size) {
      results.push([item]);
    } else {
      lastArray.push(item);
    }
  }
  return results;
}

// function chunk(array, size) {
//   const results = [];
//   let interArray = [];
//   for (let item of array) {
//     if (interArray.length < size) {
//       interArray.push(item);
//     } else {
//       results.push(interArray);
//       interArray = [];
//       interArray.push(item);
//     }
//   }
//   results.push(interArray);
//   return results;
// }

module.exports = chunk;
