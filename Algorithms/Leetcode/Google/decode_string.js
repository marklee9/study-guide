// Given an encoded string, return it's decoded string.

// The encoding rule is: k[encoded_string], where the encoded_string inside the square brackets is being repeated exactly k times. Note that k is guaranteed to be a positive integer.

// You may assume that the input string is always valid; No extra white spaces, square brackets are well-formed, etc.

// Furthermore, you may assume that the original data does not contain any digits and that digits are only for those repeat numbers, k. For example, there won't be input like 3a or 2[4].

// Examples:

// s = "3[a]2[bc]", return "aaabcbc".
// s = "3[a2[c]]", return "accaccacc".
// s = "2[abc]3[cd]ef", return "abcabccdcdcdef".

var decodeString = function (s) {
  let stack = [
    ["", 1]
  ];

  let num = "";

  let i = 0;
  while (i < s.length) {
    let ch = s[i];

    if (isNum(ch)) {
      num += ch;

    } else if (ch === "[") {
      stack.push(["", Number(num)]);
      num = "";

    } else if (ch === "]") {
      let el = stack.pop();
      for (let j = 0; j < el[1]; j++) stack[stack.length - 1][0] += el[0];

    } else {
      stack[stack.length - 1][0] += ch;
    }

    i++;
  }

  return stack[0][0];

  function isNum(str) {
    return str.charCodeAt() >= 49 && str.charCodeAt() <= 57;
  }
};




