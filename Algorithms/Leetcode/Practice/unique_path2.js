/*

A robot is located at the top-left corner of a m x n grid 
(marked 'Start' in the diagram below). The robot can only move 
either down or right at any point in time. The robot is trying 
to reach the bottom-right corner of the grid.

Now consider if some obstacles are added to the grids. How many 
unique paths would there be?

An obstacle and empty space is marked as 1 and 0 respectively in the grid.

Note: m and n will be at most 100.

Example 1:

Input:
[
  [0,0,0],
  [0,1,0],
  [0,0,0]
]

Output: 2

Explanation:
There is one obstacle in the middle of the 3x3 grid above.
There are two ways to reach the bottom-right corner:
1. Right -> Right -> Down -> Down
2. Down -> Down -> Right -> Right

*/

function uniquePath(grid) {
  if (grid[0][0] === 1) return 0; 
  let store = [...Array(grid.length)].map(e => Array(grid[0].length).fill(0));

  store[0][0] = 1;

  for (let row = 0; row < grid.length; row++) {
    for (let col = 0; col < grid[0].length; col++) {
      if (row === 0 && col === 0) continue;

      if (grid[row][col] === 0) {
        let left = store[row][col - 1] || 0;
        let top = store[row - 1] ? store[row - 1][col] : 0;

        store[row][col] = top + left;
      }
    }
  }

  return store[store.length - 1][store[0].length - 1];
}