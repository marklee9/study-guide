/*

Sorted Search, No Size: 

You are given an array - like data structure Listy which lacks a size method.
it does, however, have an elementAt(i) method that returns the element at 
index i in 0(1) time. If i is beyond the bounds of the data structure, 
it returns - 1. (For this reason, the data structure only supports 
positive integers.) Given a Listy which contains sorted, positive integers, 
find the index at which an element x occurs. If x occurs multiple times, you may
return any index.

*/


// O(2 log N), no space
function sortedSearch(arr, target) {
  let left = 0, right = findIndexLength(arr);

  while (left < right) {
    let mid = Math.floor((right - left) / 2) + left;
    if (arr[mid] === target) return mid;

    if (arr[mid] < target) {
      left = mid;
    } else {
      right = mid;
    }
  }

  // need to find length through bsearch : O(log N);
  function findIndexLength(listy) {
    let low = 0, high = 0;
    let diff = 1;

    while (listy[high]) {
      low = high;
      high += diff;
      diff *= 2;
    }

    while (low < high) {
      let mid = Math.floor((high - low) / 2) + low;
      if (listy[mid]) {
        if (!listy[mid + 1]) return mid;
        low = mid;
      } else {
        high = mid;
      }
    }
  }
}

