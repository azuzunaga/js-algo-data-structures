// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

function matrix(n) {
  const results = [...Array(n)].map(e => Array(n));
  let [start_row, end_row] = [0, n - 1];
  let [start_col, end_col] = [0, n - 1];
  let [current_row, current_col] = [start_row, start_col];
  const goal = n * n;
  let num = 1;
  while (num <= goal) {
    console.log(current_row, current_col);
    results[current_row][current_col] = num;
    console.log(results);

    if (current_col === end_col && current_row !== end_row) {
      current_row++;
    } else if (current_row === end_row && current_row !== start_row) {
      start_row++;
      current_col--;
    } else if (current_row === end_row || current_row > start_row) {
      current_row--;
    } else if (current_col <= end_col && current_row <= end_row) {
      current_col++;
    }
    num++;
  }
  return results;
}

module.exports = matrix;
