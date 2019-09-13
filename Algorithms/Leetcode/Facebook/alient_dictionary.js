/*

In an alien language, surprisingly they also use english lowercase letters, but possibly in a different order. The order of the alphabet is some permutation of lowercase letters.

Given a sequence of words written in the alien language, and the order of the alphabet, return true if and only if the given words are sorted lexicographicaly in this alien language.



Example 1:

Input: words = ["hello","leetcode"], order = "hlabcdefgijkmnopqrstuvwxyz"
Output: true
Explanation: As 'h' comes before 'l' in this language, then the sequence is sorted.
Example 2:

Input: words = ["word","world","row"], order = "worldabcefghijkmnpqstuvxyz"
Output: false
Explanation: As 'd' comes after 'l' in this language, then words[0] > words[1], hence the sequence is unsorted.
Example 3:

Input: words = ["apple","app"], order = "abcdefghijklmnopqrstuvwxyz"
Output: false
Explanation: The first three characters "app" match, and the second string is shorter (in size.) According to lexicographical rules "apple" > "app", because 'l' > '∅', where '∅' is defined as the blank character which is less than any other character (More info).


Note:

1 <= words.length <= 100
1 <= words[i].length <= 20
order.length == 26
All characters in words[i] and order are english lowercase letters.

*/

/*
  Explanation: Just like English has alphabet, (a, b, c ,d ...) 
  Alien has alphabets but in different order. (h, l, a, c...)
  We need to make sure the array is sorted alien-alphabetically.
*/

// Recursive solution
const isAlienSorted = function (words, order) {
  for (let i = 0; i < words.length - 1; i++) {
    let curr = words[i];
    let next = words[i + 1];
    if (!isSorted(curr, next, 0, order)) return false;
  }
  return true;
};

function isSorted(a, b, idx, order) {
  let firstOrder = order.indexOf(a[idx]);
  let secondOrder = order.indexOf(b[idx]);

  if (firstOrder > secondOrder) {
    return false;

  } else if (a[idx] && b[idx] && firstOrder === secondOrder) {
    return isSorted(a, b, idx + 1, order);

  } else {
    return true;
  }
} 

// Iterative solution
function isAlienSorted2(words, order) {
  let alph = {};
  for (let i = 0; i < order.length; i++) alph[order[i]] = i;

  let i = 0;
  while (i < words.length - 1){
    let first = words[i];
    let second = words[i + 1];

    let a = 0;
    let b = 0;
    let flag = true;
    while (a < first.length && b < second.length) {
      let diff = alph[first[a]] - alph[second[b]];
      
      if (diff > 0) {
        return false;
      } else if (diff < 0) {
        flag = false;
        break;
      }

      a++;
      b++;
    }
    i++;
    if (flag && first.length > second.length) return false;
  }

  return true;
}
