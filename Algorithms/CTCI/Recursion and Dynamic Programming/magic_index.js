/*

Magic Index: 

A magic index in an array A[1. .. n-1] is defined to be an index 
such that A[i] i. Given a sorted array of distinct integers, 
write a method to find a magic index, if one exists, in array A.

FOLLOW UP
What if the values are not distinct?

*/

// brute force 

// O(N) time, no space  that works for follow-up question too.
function magicIndex(array){
  for (let i = 0; i < array.length; i++) {
    if (array[i] === i) return i;
  }
  return -1;
}

// bsearching O(logN), no space
function magicIndex(array) {
  let low = 0, high = array.length - 1;
  
  while (low < high) {
    let mid = Math.floor((high + low) / 2);
    if (array[mid] === mid){
      return mid;
    } else if (array[mid] < mid) {
      low = mid;
    } else {
      high = mid;
    }
  }

  return -1;
}