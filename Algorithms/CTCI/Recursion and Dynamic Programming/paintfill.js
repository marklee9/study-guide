/*

Paint Fill: 

Implement the "paint fill" function that one might see on 
many image editing programs. That is, given a screen
(represented by a two - dimensional array of colors), 
a point, and a new color, fill in the surrounding area 
until the color changes from the original color.

*/

function paintFill(matrix, click, color) {
  let [row, col] = click;
  let originalColor = matrix[row][col];
  dfs(row, col);
  return matrix;

  function dfs(row, col){
    matrix[row][col] = color;
    if (row - 1 >= 0 && matrix[row - 1][col] === originalColor) {
      dfs(row - 1, col);
    }
    if (row + 1 < matrix.length && matrix[row + 1][col] === originalColor) {
      dfs(row + 1, col);
    }
    if (col - 1 >= 0 && matrix[row][col - 1] === originalColor) {
      dfs(row, col - 1);
    }
    if (col + 1 < matrix[0].length && matrix[row][col + 1] === originalColor) {
      dfs(row, col + 1);
    }
  }
}


// cleaning things a bit
function paintFill(matrix, click, color) {
  let [row, col] = click;
  let originalColor = matrix[row][col];
  dfs(row, col);
  return matrix;

  function dfs(row, col) {
    if (row < 0 || row >= matrix.length || col < 0 || col >= matrix[0].length) return;

    if (matrix[row][col] === originalColor) {
      dfs(row - 1, col);
      dfs(row + 1, col);
      dfs(row, col - 1);
      dfs(row, col + 1);
    }
  }
}