/*

Smallest Difference: 

Given two arrays of integers, compute the pair of values 
(one value in each array) with the smallest (non-negative) 
difference. Return the difference.

EXAMPLE
Input {1, 3, 15, 11, 2}, {23, 127, 235, 19, 8}
Output 3. That is, the pair (11, 8).

*/

// O(AlogA + BlogB) time.
// much faster than O(n^2).
function smallestDifference(arr1, arr2){
  let min = Infinity;

  let sorted1 = arr1.sort((a, b) => a - b);
  let sorted2 = arr2.sort((a, b) => a - b);

  let i = 0, j = 0;
  while (i < arr1.length && j < arr2.length) {
    let diff = Math.abs(arr1[i] - arr2[j]);
    min = Math.min(min, diff);
    arr1[i] < arr2[j] ? i++ : j++;
  }
  return min;
}