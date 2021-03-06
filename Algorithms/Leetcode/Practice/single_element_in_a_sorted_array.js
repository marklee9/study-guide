/*

Given a sorted array consisting of only integers where every 
element appears twice except for one element which appears once. 
Find this single element that appears only once.

Example 1:
Input: [1,1,2,3,3,4,4,8,8]
Output: 2

Example 2:
Input: [3,3,7,7,10,11,11]
Output: 10

Note: Your solution should run in O(log n) time and O(1) space.

*/

var singleNonDuplicate = function(nums) {
  let start = 0;
  let end = nums.length - 1;

  while (start < end) {
    let mid = Math.floor((start + end) / 2);

    // found single, return it.
    if (nums[mid] !== nums[mid - 1] && nums[mid] !== nums[mid + 1]) return nums[mid];

    // covering edge cases.
    if (mid === nums.length - 1) return nums[mid];
    if (mid === 0) return nums[mid];

    // if mid is even then the single number is on the right;
    if (mid % 2 === 0) {
      if (nums[mid] === nums[mid + 1]) {
        start = mid + 1;
        continue;
      }
      if (nums[mid] === nums[mid - 1]) end = mid - 1;

    } else {
      if (nums[mid] === nums[mid + 1]) {
        end = mid - 1;
        continue;
      }

      if (nums[mid] === nums[mid - 1]) start = mid + 1;
    }
  }
  return nums[start];
};