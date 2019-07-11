/*
Given an array A of integers, return the number of non - empty continuous 
subarrays that satisfy the following condition:

The leftmost element of the subarray is not larger than 
other elements in the subarray.


Example 1:

Input: [1, 4, 2, 5, 3]
Output: 11
Explanation: There are 11 valid subarrays: [1], [4], [2], [5], [3], [1, 4], [2, 5], [1, 4, 2], [2, 5, 3], [1, 4, 2, 5], [1, 4, 2, 5, 3].

Example 2:

Input: [3, 2, 1]
Output: 3
Explanation: The 3 valid subarrays are: [3], [2], [1].

Example 3:

Input: [2, 2, 2]
Output: 6
Explanation: There are 6 valid subarrays: [2], [2], [2], [2, 2], [2, 2], [2, 2, 2].
*/

// Brute Force O(N^2)
function vs(nums) {
  let count = nums.length;
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {
      if (nums[j] >= nums[i]) count++;
      else break;
    }
  }
  return count;
}

// Stack, Time: O(n), Space: O(n)
var validSubarrays = function (nums) { 
  let count = 0;
  if (!nums || nums.length === 0) {
    return count;
  }
  const stack = [];
  for (const num of nums) {
    while (stack.length && num < stack[stack.length - 1]) {
      stack.pop();
    }
    stack.push(num);
    count += stack.length;
  }
  return count;
};