/*
One Away: 

There are three types of edits that can be performed
on strings: insert a character, remove a character, 
or replace a character.Given two strings, write a
function to check if they are one edit(or zero edits) away.

EXAMPLE
pale, ple -> true 
pales, pale -> true 
pale, bale -> true 
pale, bae - > false

*/

function oneWay(str1, str2) {
// compare lengths and if they differ by 1 use helper func.
  let difference = str1.length - str2.length;
  if (Math.abs(difference) > 1) return false;

  if (difference === 0) {
    return sameLength(str1, str2);
  } else if (difference === - 1){
    return oneDiff(str1, str2);
  } else {
    return oneDiff(str2, str1);
  }
  
  function sameLength(one, two) {
    let bool = true;

    for (let i = 0; i < one.length; i++) {
      if (one[i] !== two[i]) {
        if (bool) {
          bool = false;
        } else {
          return false;
        }
      }
    }

    return true;
  }

  function oneDiff(short, long){
    let i = 0, j = 0;
    let bool = true;

    while (i < short.length && j < long.length) {
      let s = short[i], l = long[j];

      if (s !== l) {
        if (bool) {
          i--;
          bool = false;
        } else {
          return false;
        }
      }

      i++;
      j++;
    }
    return true;
  }
}
