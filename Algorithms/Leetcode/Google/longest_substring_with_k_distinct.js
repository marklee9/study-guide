// Given a string, find the length of the longest substring T that contains at most k distinct characters.

// Example 1:

// Input: s = "eceba", k = 2
// Output: 3
// Explanation: T is "ece" which its length is 3.
// Example 2:

// Input: s = "aa", k = 1
// Output: 2
// Explanation: T is "aa" which its length is 2.

var lengthOfLongestSubstringKDistinct = function (s, k) {
  if (s.length < k) return s.length;

  let start = 0;
  let end = 0;
  
  let map = new Map();
  let max = 0;

  while (end < s.length) {
    if (map.size <= k) {
      map.set(s[end], end);
    }

    if (map.size === k + 1) {
      let delIndex = Math.min(...map.values());
      map.delete(s[delIndex]);
      start = delIndex + 1;
    }

    end++;
    max = Math.max(max, end - start);
  }

  return max;
};