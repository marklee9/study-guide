/*

Parens: 

Implement an algorithm to print all valid
(Le., properly opened and closed) combinations of n pairs of parentheses.

EXAMPLE
Input: 3
Output: [ ((())), (()()), (())(), ()(()), ()()() ]

*/

function parens(n){
  let result = [];
  helper(1, 0, "(");
  return result;

  function helper(open, close, acc) {
    if (open === n && close === n) result.push(acc);

    if (open < n) {
      helper(open + 1, close, acc + "(");
    }  
    if (close < open) {
      helper(open, close + 1, acc + ")");
    }
  }
}
