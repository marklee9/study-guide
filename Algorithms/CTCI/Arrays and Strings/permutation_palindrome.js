/*
Palindrome Permutation: 

Given a string, write a function to check
if it is a permutation of a palindrome.
A palindrome is a word or phrase that is the
same forwards and backwards.A permutation is 
a rearrangement of letters.The palindrome does 
not need to be limited to just dictionary words.

*/

function palperm(string) {
  let obj = {};

  for (let i = 0; i < string.length; i++) {
    let ch = string[i];
    if (!obj[ch]) obj[ch] = 0;
    obj[ch]++;
  }

  let bool = true;
  for (let key in obj) {
    if (obj[key] % 2) {
      if (bool) {
        bool = false;
      } else {
        return false;
      }
    }
  }

  return true;
}