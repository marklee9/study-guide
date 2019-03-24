/*

Given a string containing just the characters '(' and ')', find the length of the longest valid (well-formed) parentheses substring.

Example 1:

Input: "(()"
Output: 2
Explanation: The longest valid parentheses substring is "()"
Example 2:

Input: ")()())"
Output: 4
Explanation: The longest valid parentheses substring is "()()"

*/


function lvp(string){
  let stack = [];
  let arr = [...Array(string.length)].map(e => 0);

  for (let i = 0; i < string.length; i++) {
    if (string[i] === "(") {
      stack.push(i);
    } else {
      if (stack.length) {
        let p = stack.pop();
        arr[p] = 1;
        arr[i] = 1;
      } else {
        stack = [];
      }
    }
  }

  let max = 0;
  let i = 0;
  while (i < arr.length) {
    if (arr[i]) {
      let res = 0;
      while (arr[i++]) res++;
      max = Math.max(max, res);
    } else {
      i++;
    }
  }

  return max;
}