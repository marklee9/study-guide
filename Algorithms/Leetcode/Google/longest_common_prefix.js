// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".

// Example 1:

// Input: ["flower","flow","flight"]
// Output: "fl"
// Example 2:

// Input: ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.
// Note:

// All given inputs are in lowercase letters a-z.

var longestCommonPrefix = function (strs) {
  if (!strs.length) return "";
  let first = strs[0];
  let result = "";

  let i = 0;
  while (true) {
    let ch = first[i];

    for (let str of strs) {
      if (!str[i]) return result;
      if (str[i] !== ch) return result;
    }
    
    result += ch;
    i++;
  }
};