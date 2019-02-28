/*

Given a 2D board and a word, find if the word exists in the grid.

The word can be constructed from letters of sequentially adjacent cell, where "adjacent" cells are those horizontally or vertically neighboring. The same letter cell may not be used more than once.

Example:

board =
[
  ['A','B','C','E'],
  ['S','F','C','S'],
  ['A','D','E','E']
]

Given word = "ABCCED", return true.
Given word = "SEE", return true.
Given word = "ABCB", return false.

*/

function exist(board, word) {
  if (!board || !board.length) return null;
  let set = new Set();

  for (let row = 0; row < board.length; row++) {
    for (let col = 0; col < board[0].length; col++) {
      let ans = dfs([row, col], 0, set);
      if (ans) return ans;
    }
  }
  return false;

  function dfs(pos, i, set) {
    let [row, col] = pos;
    
    if (set.has(`${row}-${col}`)) return false;
    set.add(`${row}-${col}`);
    
    if (i === word.length - 1 && board[row][col] === word[i]) return true;

    if (board[row][col] === word[i]) {
      if (row - 1 >= 0) {
        let ans = dfs([row - 1, col], i + 1, set);
        if (ans) return ans;
      }
      
      if (row + 1 < board.length) {
        let ans = dfs([row + 1, col], i + 1, set);
        if (ans) return ans;
      }
  
      if (col - 1 >= 0) {
        let ans = dfs([row, col - 1], i + 1, set);
        if (ans) return ans;
      }
  
      if (col + 1 < board[0].length) {
        let ans = dfs([row, col + 1], i + 1, set);
        if (ans) return ans;
      }
    }

    set.delete(`${row}-${col}`);
    return false;
  }
}