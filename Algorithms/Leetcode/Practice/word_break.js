// Given a non-empty string s and a dictionary wordDict containing a list of non-empty words, determine if s can be segmented into a space-separated sequence of one or more dictionary words.

// Note:

// The same word in the dictionary may be reused multiple times in the segmentation.
// You may assume the dictionary does not contain duplicate words.
// Example 1:

// Input: s = "leetcode", wordDict = ["leet", "code"]
// Output: true
// Explanation: Return true because "leetcode" can be segmented as "leet code".
// Example 2:

// Input: s = "applepenapple", wordDict = ["apple", "pen"]
// Output: true
// Explanation: Return true because "applepenapple" can be segmented as "apple pen apple".
//              Note that you are allowed to reuse a dictionary word.
// Example 3:

// Input: s = "catsandog", wordDict = ["cats", "dog", "sand", "and", "cat"]
// Output: false

// BFS approach
var wordBreak = function (s, wordDict) {
  let queue = [s];
  let set = new Set();

  while (queue.length) {
    let el = queue.shift();

    for (let word of wordDict) {
      if (el.indexOf(word) === 0) {
        let newEl = el.slice(word.length);
        if (newEl === "") return true;

        if (!set.has(newEl)) {
          queue.push(newEl);
          set.add(newEl);
        }
      } 
    }
  }

  return false;
};

// DP approach
