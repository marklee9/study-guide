/*

Given n non-negative integers representing the histogram's bar 
height where the width of each bar is 1, find the area of largest 
rectangle in the histogram.

Example:

Input: [2,1,5,6,2,3]
Output: 10

*/

// linear approach
function largestRectangleArea(arr) {
  let max = 0;
  let stack = [];

  let i = 0;
  while (i < arr.length) {

    // if empty or greater, push to the stack
    if (!stack.length || arr[stack[stack.length - 1]] <= arr[i]) {
      stack.push(i++);
    } else {

    // if not pop and calculate the area
      let width = stack.pop();
      let height = stack.length ? i - stack[stack.length - 1] - 1 : i;
      max = Math.max(max, width * height);
    }
  }

  // take care of the left overs
  while (stack.length) {
    let width = stack.pop();
    let height = stack.length ? i - stack[stack.length - 1] - 1 : i;
    max = Math.max(max, width * height);
  }
  
  return max;
}