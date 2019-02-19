function mergeSort(arr, cb){
  if (arr.length <= 1) return arr;

  if (!cb) cb = (a, b) => {
    return a - b;
  };

  let mid = Math.floor(arr.length / 2);
  let left = arr.slice(0,mid);
  let right = arr.slice(mid);

  return merge1(mergeSort(left, cb), mergeSort(right, cb), cb);

  function merge1(arr1, arr2, callback) {
    let result = [];

    while (arr1.length && arr2.length) {
      if (callback(arr1[0], arr2[0]) < 0) {
        result.push(arr1.shift());
      } else {
        result.push(arr2.shift());
      }
    }

    result = result.concat(arr1, arr2);
    return result;
  }
}

Array.prototype.mergeSort = function (callback) {
  if (!callback) {
    callback = (a, b) => {
      return a - b;
    };
  }

  let mid = Math.floor(this.length / 2);
  let left = this.slice(0, mid);
  let right = this.slice(mid);

  if (this.length <= 1) return this;

  return merge(left.mergeSort(callback), right.mergeSort(callback), callback);
};

function merge(arr1, arr2, callback) {
  let result = [];

  while (arr1.length && arr2.length) {
    if (callback(arr1[0], arr2[0]) < 0) {
      result.push(arr1.shift());
    } else {
      result.push(arr2.shift());
    }
  }
  result = result.concat(arr1).concat(arr2);
  return result;
}