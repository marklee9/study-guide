/*

Eight Queens: 

Write an algorithm to print all ways of arranging eight queens on 
an 8x8 chess board so that none of them share the same row, column, 
or diagonal. In this case, "diagonal" means all diagonals, not just 
the two that bisect the board.

*/


function eightQueens(gridSize) {
  let result = [];

  function dfs(row, res) {
    if (row === gridSize) {
      return result.push(res);

    } else {
      for (let col = 0; col < gridSize; col++) {
        // place it only if it is valid place.
        if (isValid(row, col, res)) {
          res[row] = col;   //place queen
          dfs(row + 1, res);
        }
      }
    } 
  }
  
  function isValid(row, col, res) {
    // check if that position we want to place it is okay with the current res.
    for (let r = 0; r < row; r++) {
      let c = res[r];

      if (col === c) return false;

      let rowDistance = Math.abs(row - r);
      let colDistance = Math.abs(col - c);
      if (colDistance === rowDistance) return false;
    }
    return true;
  }
}

