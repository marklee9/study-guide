/*

Write an efficient algorithm that searches for a value in an m x n matrix. This matrix has the following properties:

Integers in each row are sorted from left to right.
The first integer of each row is greater than the last integer of the previous row.
Example 1:

Input:
matrix = [
  [1,   3,  5,  7],
  [10, 11, 16, 20],
  [23, 30, 34, 50]
]
target = 3
Output: true
Example 2:

Input:
matrix = [
  [1,   3,  5,  7],
  [10, 11, 16, 20],
  [23, 30, 34, 50]
]
target = 13
Output: false

*/

// Treating as 1D array b-search
const searchMatrix = (matrix, target) => {
  if (!matrix.length || !matrix[0].length) return false;

  let rows = matrix.length;
  let rowLength = matrix[0].length;
  let low = 0;
  let high = rows * rowLength - 1;

  while (low <= high) {
    let i = Math.floor((low + high) / 2);
    let row = Math.floor(i / rowLength);
    let col = i % rowLength;

    if (matrix[row][col] === target) return true;
    if (matrix[row][col] < target) low = i + 1;
    if (matrix[row][col] > target) high = i - 1;
  }

  return false;
};
