// Given an array nums of n integers, are there elements a, b, c in nums such that a + b + c = 0? Find all unique triplets in the array which gives the sum of zero.

// Note:

// The solution set must not contain duplicate triplets.

// Example:

// Given array nums = [-1, 0, 1, 2, -1, -4],

// A solution set is:
// [
//   [-1, 0, 1],
//   [-1, -1, 2]
// ]


// normal way of doing it will cause duplicates.
var threeSum = function (nums) {
  var result = [];
  if (nums.length < 3) return result;
  let array = nums.sort((a, b) => a - b);

  for (let i = 0; i < array.length - 2; i++) {
    if (array[i] > 0) return result;
    if (i > 0 && array[i] === array[i - 1]) continue; //avoiding duplicates

    let j = i + 1;
    let k = array.length - 1;

    while (j < k) {
      if (nums[i] + nums[j] + nums[k] === 0) {
        result.push([nums[i], nums[j], nums[k]]);
        j++;
        k--;
        while (j < k && nums[j] === nums[j - 1]) j++; //avoiding duplicates
        while (j < k && nums[k] === nums[k + 1]) k--; //avoiding duplicates

      } else if (nums[i] + nums[j] + nums[k] > 0) {
        k--;
      } else {
        j++;
      }
    }
  }
  return result;
};