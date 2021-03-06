/*

Given a sequence of words, check whether it forms a valid word square.

A sequence of words forms a valid word square
if the kth row and column read the exact same string, where 0≤ k < max(numRows, numColumns).

Note:
The number of words given is at least 1 and does not exceed 500.
Word length will be at least 1 and does not exceed 500.
Each word contains only lowercase English alphabet a - z.
Example 1:

  Input: [
    "abcd",
    "bnrt",
    "crmy",
    "dtye"
  ]

Output:
  true

*/

function vws(words) {
  for (let row = 0; row < words.length; row++) {
    if (words[row] !== colWord(row)) return false;
  }
  return true;

  function colWord(row) {
    let str = "";
    let i = 0;
    while (words[i] && words[i][row]) {
      str += words[i][row];
      i++;
    }
    return str;
  }
}
