// Given a non - empty string s, you may delete at most one character.Judge whether you can make it a palindrome.

// Example 1:
//   Input: "aba"
// Output: True

// Example 2:
// Input: "abca"
// Output: True

// Explanation: You could delete the character 'c'.

function validPalindrome(string) {
  let i = 0;
  let j = string.length - 1;

  while (i < j) {
    if (string[i] !== string[j]) {
      return isPal(i + 1, j) || isPal(i, j - 1);
    }
    i++;
    j--;
  }

  return true;

  function isPal(one, two) {
    while (one < two) {
      if (string[one] !== string[two]) return false;
      i++;
      j--;
    }
    return true;
  }
}