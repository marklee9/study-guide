/*

Given two words word1 and word2, find the minimum number of 
operations required to convert word1 to word2.
You have the following 3 operations permitted on a word:

Insert a character
Delete a character
Replace a character
Example 1:

Input: word1 = "horse", word2 = "ros"
Output: 3

Explanation:
horse -> rorse (replace 'h' with 'r')
rorse -> rose (remove 'r')
rose -> ros (remove 'e')


Example 2:

Input: word1 = "intention", word2 = "execution"
Output: 5

Explanation:
intention -> inention (remove 't')
inention -> enention (replace 'i' with 'e')
enention -> exention (replace 'n' with 'x')
exention -> exection (replace 'n' with 'c')
exection -> execution (insert 'u')

*/

function editDistance(word1, word2) {
  let dp = [...Array(word1.length + 1)].map(e => Array(word2.length + 1).fill(0));

  for (let r = 0; r <= word1.length; r++) dp[r][0] = r;
  for (let c = 0; c <= word2.length; c++) dp[0][c] = c;

  for (let row = 1; row < dp.length; row++) {
    for (let col = 1; col < dp[0].length; col++) {
      if (word1[row - 1] === word2[col - 1]) {
        dp[row][col] = dp[row - 1][col - 1];
      } else {
        dp[row][col] = Math.min(dp[row - 1][col], dp[row][col - 1], dp[row - 1][col - 1]) + 1;
      }
    }
  }

  return dp[dp.length - 1][dp[0].length - 1];
}