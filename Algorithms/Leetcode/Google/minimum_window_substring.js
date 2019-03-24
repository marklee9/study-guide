/*

Given a string S and a string T, find the minimum window in S which will contain all the characters in T in complexity O(n).

Example:

Input: S = "ADOBECODEBANC", T = "ABC"
Output: "BANC"
Note:

If there is no such window in S that covers all characters in T, return the empty string "".
If there is such window, you are guaranteed that there will always be only one unique minimum window in S.


*/

function minWindow(str, t) {
  let obj = {};
  for (let i = 0; i < t.length; i++) {
    if (!obj[t[i]]) obj[t[i]] = 0;
    obj[t[i]]++;
  }
  
  let s = 0, e = 0;
  let count = t.length;
  let start;
  let min = Infinity;

  while (e < str.length) {
    if (obj[str[e]] > 0) count--;
    obj[str[e]]--;
    e++;


    while (count === 0) {
      if (min > e - s) {
        min = e - s;
        start = s;
      }

      if (obj[str[s]] === 0) count++;
      obj[str[s]]++;
      s++;
    }
  }

  return min === Infinity ? '' : str.substr(start, min);
}
