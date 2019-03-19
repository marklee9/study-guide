/*

Tic Tac Win: 

Design an algorithm to figure out if someone has won a game of tic-tac-toe.

*/



// [ o, o, x ]
// [ x, x, o ]
// [ x, o, o ]

function won(matrix) {

// check row
  for (let row = 0; row < matrix.length; row++) {
    let rowP = matrix[row][0];
    if (rowP) {
      for (let col = 1; col < matrix[0].length; col++) {
        if (matrix[row][col] !== rowP) break;
        if (matrix[row][col] === rowP && col === 2) return true;
      }
    }
  }

// check col
  for (let col = 0; col < matrix.length; col++) {
    let colP = matrix[0][col];
    if (colP) {
      for (let row = 1; row < matrix.length; row++) {
        if (matrix[row][col] !== colP) break;
        if (matrix[row][col] === colP && row === 2) return true;
      }
    }
  }

// check diagonal
  if (matrix[1][1] === matrix[0][0] && matrix[1][1] === matrix[2][2]) return true;
  if (matrix[1][1] === matrix[2][0] && matrix[1][1] === matrix[0][2]) return true;
  return false;
}