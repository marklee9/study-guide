/*
Rotate Matrix: 
Given an image represented by an NxN matrix, where each pixel 
in the image is 4 bytes, write a method to rotate the image by 
90 degrees. Can you do this in place ?

*/

// Not in-place
var rotate = function (matrix) {
  let solution = [];

  for (let i = 0; i < matrix.length; i++) {
    solution.push([]);
  }

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix.length; j++) {
      solution[j][matrix.length - i - 1] = matrix[i][j];
    }
  }

  for (let i = 0; i < solution.length; i++) {
    for (let j = 0; j < solution.length; j++) {
      matrix[i][j] = solution[i][j];
    }
  }
};

// in-place
var rotate = function (matrix) {
  matrix.reverse();

  for (let i = 0; i < matrix.length; i++) {
    for (let j = i; j < matrix.length; j++) {
      [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
    }
  }
};

