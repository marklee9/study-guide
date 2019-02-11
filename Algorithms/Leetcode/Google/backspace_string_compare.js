// Given two strings S and T, return if they are equal when both are typed into empty text editors. # means a backspace character.

// Example 1:

// Input: S = "ab#c", T = "ad#c"
// Output: true
// Explanation: Both S and T become "ac".
// Example 2:

// Input: S = "ab##", T = "c#d#"
// Output: true
// Explanation: Both S and T become "".
// Example 3:

// Input: S = "a##c", T = "#a#c"
// Output: true
// Explanation: Both S and T become "c".
// Example 4:

// Input: S = "a#c", T = "b"
// Output: false
// Explanation: S becomes "c" while T becomes "b".



var backspaceCompare = function (S, T) {
  return builder(S) === builder(T);

  function builder(string) {
    let str = "";
    let skip = 0;

    for (let i = string.length - 1; i >= 0; i--) {
      let ch = string[i];

      if (ch === "#") {
        skip++;
        continue;
      }

      if (skip > 0) {
        skip--;
        continue;
      }

      str = ch + str;
    }

    return str;
  }
};