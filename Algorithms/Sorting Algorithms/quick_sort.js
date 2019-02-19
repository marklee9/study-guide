Array.prototype.quickSort = function (cb) {
  if (this.length <= 1) return this;

  if (!cb) cb = (a, b) => {
      return a - b;
  };

  const pivot = this[0];
  let left = this.slice(1).filter((el) => cb(el, pivot) < 0);
  let right = this.slice(1).filter((el) => cb(el, pivot) >= 0);

  left = left.quickSort(cb);
  right = right.quickSort(cb);

  return left.concat([pivot], right);
};


function quickSort(arr, cb) {
  if (!cb) cb = (a, b) => {
    return a - b;
  };

  let pivot = arr[0];
  let left = arr.slice(1).filter((el) => cb(el, pivot) < 0);
  let right = arr.slice(1).filter((el) => cb(el, pivot) < 0);

  left = quickSort(left, cb);
  right = quickSort(right, cb);

  return left.concat([pivot], right);
}
