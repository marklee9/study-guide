// Given an array of integers, return indices of the two numbers such that they add up to a specific target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// Example:

// Given nums = [2, 7, 11, 15], target = 9,

// Because nums[0] + nums[1] = 2 + 7 = 9,
// return [0, 1].

// Time : O(n), Space : O(n)
var twoSum = function (nums, target) {
  let cache = {};

  for (let i = 0; i < nums.length; i++) {
    let el = nums[i];
    let diff = target - el;

    if (cache[diff] !== undefined) {
      return [cache[diff], i];
    } else {
      cache[el] = i;
    }
  }
};

var twoSum2 = function (nums, target) {
  let cache = {};
  for (let i = 0; i < nums.length; i++) {
    if (cache[target - nums[i]] !== undefined) return [cache[target - nums[i]], i];
    cache[nums[i]] = i;
  }
};