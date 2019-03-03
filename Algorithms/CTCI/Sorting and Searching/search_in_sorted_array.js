/*

Search in Rotated Array: 

Given a sorted array of n integers that has been rotated an 
unknown number of times, write code to find an element in the 
array. You may assume that the array was originally sorted in 
increasing order.

EXAMPLE
Input find 5 in {15, 16, 19, 20, 25, 1, 3, 4, 5, 7, 10, 14} 
Output 8 (the index of 5 in the array)

*/

// brute force O(n)

function find1(array, target) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === target) return i;
  }
  return - 1;
}



// Optimized O(log N)
function find2(array, low, high, target) {
  let mid = Math.floor( (low + high) / 2 );

  if (array[mid] === target) return mid;
  if (low > high) return - 1;

  // left is sorted
  if (array[low] < array[mid]) {
    if (target > array[low] && target < array[mid]) {
      return find2(array, low, mid - 1, target);
    } else {
      return find2(array, mid + 1, high, target);
    }
  }

  // right is sorted
  else if (array[low] > array[mid]) {
    if (target < array[high] && target > array[mid]){
      return find2(array, mid + 1, high, target);
    } else {
      return find2(array, low, mid - 1, target);
    }
  }

  // left or right is all repeaters
  else if (array[low] === array[mid]) {

    // right is different, so search it
    if (array[high] !== array[mid]) {
      return find2(array, mid + 1, high, target);

    // we have to search both halves
    } else {
      let result = find2(array, low, mid - 1, target);
      // if not found in left, search right.
      return result === -1 ? find2(array, mid + 1, high, target) : result;
    }
  }

  return -1;
}


function bSearch(){}