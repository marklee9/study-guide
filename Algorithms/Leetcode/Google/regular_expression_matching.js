/*

Given an input string (s) and a pattern (p), implement regular expression matching with support for '.' and '*'.

'.' Matches any single character.
'*' Matches zero or more of the preceding element.
The matching should cover the entire input string (not partial).

Note:

s could be empty and contains only lowercase letters a-z.
p could be empty and contains only lowercase letters a-z, and characters like . or *.
Example 1:

Input:
s = "aa"
p = "a"
Output: false
Explanation: "a" does not match the entire string "aa".
Example 2:

Input:
s = "aa"
p = "a*"
Output: true
Explanation: '*' means zero or more of the precedeng element, 'a'. Therefore, by repeating 'a' once, it becomes "aa".
Example 3:

Input:
s = "ab"
p = ".*"
Output: true
Explanation: ".*" means "zero or more (*) of any character (.)".
Example 4:

Input:
s = "aab"
p = "c*a*b"
Output: true
Explanation: c can be repeated 0 times, a can be repeated 1 time. Therefore it matches "aab".
Example 5:

Input:
s = "mississippi"
p = "mis*is*p*."
Output: false

*/

function regExMatching(s, p) {
  let obj = {};
  return helper(0, 0);

  function helper(i, j) {
    if (i === s.length && j === p.length) return true;
    if (i > s.length || j > p.length) return false;

    let key = `${i}-${j}`;

    if (obj[key] !== undefined) return obj[key];

    if (s[i] === p[j] || p[j] === ".") {
      if (p[j + 1] === "*") {
        obj[key] = helper(i + 1, j) || helper(i, j + 2);
      } else {
        obj[key] = helper(i + 1, j + 1);
      }
    } else {
      if (p[j + 1] === "*") {
        obj[key] = helper(i, j + 2);
      } else {
        obj[key] = false;
      }
    }

    return obj[key];
  }
}







*/