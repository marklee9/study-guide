/*

Given a non - negative integer, you could swap two digits 
at most once to get the maximum valued number.
Return the maximum valued number you could get.

Example 1:

Input: 2736
Output: 7236

Explanation: Swap the number 2 and the number 7

Example 2:

Input: 9973
Output: 9973

Explanation: No swap.

*/

function maxSwap(num){
  let str = String(num);

  for (let i = 0; i < str.length; i++) {
    let max = str[i]; 
    let index = i;      

    for (let x = str.length - 1; x > i; x--) {
      if (str[x] > max) {
        max = str[x];
        index = x;
      }
    }

    if (max !== str[i]) {
      let arr = str.split("");
      let temp = arr[i];
      arr[i] = arr[index];
      arr[index] = temp;

      return Number(arr.join(""));
    }
  }
  return num;
}