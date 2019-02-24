/*
Zero Matrix: 

Write an algorithm such that if an element in an MxN matrix is 0,
its entire row and column are set to 0.

Example 1:

  [1, 1, 1]       [1, 0, 1]
  [1, 0, 1]       [0, 0, 0]
  [1, 1, 1]       [1, 0, 1]
*/

function zeroMatrix(matrix) {
  let rowSet = new Set();
  let colSet = new Set();

  for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < matrix[0].length; col++) {
      if (matrix[row][col] === 0) {
        rowSet.add(row);
        colSet.add(col);
      }
    }
  }

  for (let row = 0; row < matrix.length; row++) {
    if (rowSet.has(row)) {
      for (let col = 0; col < matrix[0].length; col++) {
        matrix[row][col] = 0;
      }
    } else {
      for (let col = 0; col < matrix[0].length; col++) {
        if (colSet.has(col)) {
          matrix[row][col] = 0;
        }
      }
    }
  }
}