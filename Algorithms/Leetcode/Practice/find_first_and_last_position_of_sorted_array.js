/*

Given an array of integers nums sorted in ascending order, find the starting and ending position of a given target value.

Your algorithm's runtime complexity must be in the order of O(log n).

If the target is not found in the array, return [-1, -1].

Example 1:

Input: nums = [5,7,7,8,8,10], target = 8
Output: [3,4]
Example 2:

Input: nums = [5,7,7,8,8,10], target = 6
Output: [-1,-1]

*/

function searchRange(array, target) {
  let result = [-1, -1];

  let low = 0;
  let high = array.length - 1;
  
  while (low < high) {
    let mid = Math.floor((high + low) / 2);
    if (array[mid] < target) {
      low = mid + 1;
    } else {
      high = mid;
    }
  }

  // when array doesn't have target.
  if (array[low] !== target) return result;
  result[0] = low;

  high = array.length - 1;
  while (low < high) {
    let mid = Math.ceil((high + low) / 2);
    if (array[mid] > target) {
      high = mid - 1;
    } else {
      low = mid;
    }
  }

  result[1] = high;
  return result;
}