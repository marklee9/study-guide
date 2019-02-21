// Write an efficient algorithm that searches for a value in an m x n matrix. This matrix has the following properties:

// Integers in each row are sorted in ascending from left to right.
// Integers in each column are sorted in ascending from top to bottom.
// Example:

// Consider the following matrix:

// [
//   [1,   4,  7, 11, 15],
//   [2,   5,  8, 12, 19],
//   [3,   6,  9, 16, 22],
//   [10, 13, 14, 17, 24],
//   [18, 21, 23, 26, 30]
// ]
// Given target = 5, return true.

// Given target = 20, return false.

function searchMatrix1 (matrix, target) {
  //   BF O(n^2) approach
  for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < matrix[row].length; col++) {
      if (matrix[row][col] === target) return true;
    } 
  }

  return false;
}

function searchMatrix2 (matrix, target) {
//   Slight optimization O(n + m)
  for (let row = 0; row < matrix.length; row++) {
    let arr = matrix[row];
    if (arr[0] <= target && arr[arr.length - 1] >= target) {
  
      for (let col = 0; col < matrix[row].length; col++) {
        if (matrix[row][col] === target) return true;
      }
    }
  }
  
  return false;
}

function searchMatrix3 (matrix, target) {
//  Optimization  O(N + logM) 
    for (let i = 0; i < matrix.length; i++) {
      let arr = matrix[i];
      let start = arr[0], end = arr[arr.length - 1];

      if (start === target) return true;
      if (end === target) return true;

      if (start < target && end > target) {
        let i = bsearch(arr, target);
        if (i !== -1) return true;
      }
    }

    return false;
}

let bsearch = function (arr, x) {
  let start = 0,
    end = arr.length - 1;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);

    if (arr[mid] === x) return arr[mid];
    else if (arr[mid] < x) start = mid + 1;
    else end = mid - 1;
  }

  return -1;
};