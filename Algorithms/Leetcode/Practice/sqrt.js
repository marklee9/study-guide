// Compute and return the square root of x, where x is guaranteed to be a non-negative integer.

// Since the return type is an integer, the decimal digits are truncated and only the integer part of the result is returned.

// Example 1:

// Input: 4
// Output: 2
// Example 2:

// Input: 8
// Output: 2
// Explanation: The square root of 8 is 2.82842..., and since 
//              the decimal part is truncated, 2 is returned.

var mySqrt = function (x) {
  let low = 1,
    high = x;
  while (true) {
    let mid = Math.floor((low + high) / 2);
    let prev = mid - 1;
    let next = mid + 1;

    let prev2 = prev * prev;
    let next2 = next * next;
    let mid2 = mid * mid;

    //  exact numbers
    if (prev2 === x) return prev;
    if (mid2 === x) return mid;
    if (next2 === x) return next;

    //   numbers in-between
    if (prev2 < x && mid2 > x) return prev;
    if (mid2 < x && next2 > x) return mid;

    if (prev2 > x) high = prev;
    if (next2 < x) low = next;
  }
};