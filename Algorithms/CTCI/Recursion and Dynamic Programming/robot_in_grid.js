/*

Robot in a Grid: 

Imagine a robot sitting on the upper left corner of grid with 
r rows and c columns. The robot can only move in two directions, 
right and down, but certain cells are "off limits"
such that the robot cannot step on them. 

Design an algorithm to find a path
for the robot from the top left to the bottom right.

*/

function robot(matrix) {
  let cache = [...Array(matrix.length)].map(e => Array(matrix[0].length).fill(false));
  cache[0][0] = true;

  for (let row = 0; row < cache.length; row++) {
    for (let col = 0; col < cache[0].length; col++) {

      // checking up and if matrix is 0
      if (row > 0 && cache[row - 1][col] && matrix[row][col] === 0) {
        cache[row][col] = true;
      }
      // checking left and if matrix is 0
      if (col > 0 && cache[row][col - 1] && matrix[row][col] === 0) {
        cache[row][col] = true;
      }

    }
  }

  return cache[cache.length - 1][cache[0].length - 1];
}



