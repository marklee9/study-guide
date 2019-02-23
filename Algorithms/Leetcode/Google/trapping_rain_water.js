var trap = function (arr) {
  // find the peek; since it is peek other values will always be lower than this.
  let peek = 0;
  let maxHeight = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > maxHeight) {
      maxHeight = arr[i];
      peek = i;
    }
  }
  
  let result = 0;

  // get left trapped water
  let i = 1;
  let heightL = arr[0];
  while (i < peek) {
    if (arr[i] > heightL) {
      heightL = arr[i];
    } else if (arr[i] < heightL) {
      result += heightL - arr[i];
    }
    i++;
  }

  // get right trapped water
  let j = arr.length - 2;
  let heightR = arr[arr.length - 1];
  while (j > peek) {
    if (arr[j] > heightR) {
      heightR = arr[j];
    } else if (arr[j] < heightR) {
      result += heightR - arr[j];
    }
    j--;
  }

  return result;
};