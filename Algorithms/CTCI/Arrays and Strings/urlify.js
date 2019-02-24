/* 
URLify: Write a method to replace all spaces 
in a string with '%20: You may assume that the 
string has sufficient space at the end to hold 
the additional characters, and that you are given 
the "true" length of the string. 
*/


// O(2n)
function urlify (string) {
  let arr = string.split(" ");
  return arr.join("%20");
}

// O(n)
function urlify2 (string) {
  let result = "";

  let i = 0;
  while (i < string.length) {
    let ch = string[i];

    if (ch === " "){
      result += "%20";
      
    } else {
      result += ch;
    }

    i++;
  }

  return result;
}