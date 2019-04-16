/*

Given s1, s2, s3, find whether s3 is formed by the interleaving of s1 and s2.

Example 1:

Input: s1 = "aabcc", s2 = "dbbca", s3 = "aadbbcbcac"
Output: true


Example 2:

Input: s1 = "aabcc", s2 = "dbbca", s3 = "aadbbbaccc"
Output: false

*/

var isInterleave = function (s1, s2, s3) {
  let queue = [[0, 0, 0]];
  let set = new Set();

  while (queue.length) {
    let [one, two, three] = queue.shift();
    if (set.has(`${one}-${two}`)) continue;   // Skipping any duplicates.
    set.add(`${one}-${two}`);

    if (three === s3.length && one === s1.length && two === s2.length) return true;
    
    if (one < s1.length && s3[three] === s1[one]) queue.push([one + 1, two, three + 1]);
    if (two < s2.length && s3[three] === s2[two]) queue.push([one, two + 1, three + 1]);
  }

  return false;
};