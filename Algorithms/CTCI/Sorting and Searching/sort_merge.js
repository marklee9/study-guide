/*

Sorted Merge: 

You are given two sorted arrays, A and B, where A has a large enough 
buffer at the end to hold B. Write a method to merge B into A in sorted order.

*/

// O(A + B) time, O(A + B) space
function sortedMerge(A, B) {
  let result = [];

  while (A.length && B.length) {
    let left = A.shift();
    let right = B.shift();

    if (left < right) {
      result.push(left, right);
    } else {
      result.push(right, left);
    }
  }
  return result.concat(A, B);
}