/*

Given an integer n, return 1 - n in lexicographical order.

For example, given 13, return: [1,10,11,12,13,2,3,4,5,6,7,8,9].

Please optimize your algorithm to use less time and space. 
The input size may be as large as 5,000,000.

*/

// short, brute-force but NlogN approach.
function lexicalOrder(n) {
  let result = [...Array(n + 1)].map((el, i) => i);
  result.shift();
  return result.sort();
}

// dfs, linear approach.
function lexicalOrder2(n) {
  let result = [];
  for (let i = 1; i < 10; i++) dfs(i);
  return result;
  
  function dfs(number) {
    if (number > n) return;
    result.push(number);
    for (let i = 0; i < 10; i++) dfs(number * 10 + i);
  }
}