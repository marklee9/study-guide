/*

Recursive Multiply: 

Write a recursive function to multiply two positive integers 
without using the * operator(or / operator).

You can use addition, subtraction, and bit shifting, but you 
should minimize the number of those operations.

*/

// 5 * 5
// => 5 + 5 + 5 + 5 + 5
// => 10 + 10 + 5

// 5  * 4
// 10 * 2 + 5
// 20 * 1

// recursive
function mult(one, two) {
  if (one === 0 || two === 0) return 0;
  if (one === 1) return two;
  if (two === 1) return one;

  if (two % 2) {
    return one + mult(one + one, (two - 1) / 2);
  }
  return mult(one + one, two / 2);
}
