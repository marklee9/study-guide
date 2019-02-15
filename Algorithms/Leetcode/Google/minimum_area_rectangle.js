// Given a set of points in the xy-plane, determine the minimum area of a rectangle formed from these points, with sides parallel to the x and y axes.

// If there isn't any rectangle, return 0.

 

// Example 1:

// Input: [[1,1],[1,3],[3,1],[3,3],[2,2]]
// Output: 4
// Example 2:

// Input: [[1,1],[1,3],[3,1],[3,3],[4,1],[4,3]]
// Output: 2
 

// Note:

// 1 <= points.length <= 500
// 0 <= points[i][0] <= 40000
// 0 <= points[i][1] <= 40000
// All points are distinct.

var minAreaRect = function (points) {
  let store = {};

  // making map of sets
  for (let [r, c] of points) {
    if (!store[r]) store[r] = new Set();
    store[r].add(c);
  }

  let min = Infinity;

  for (let i = 0; i < points.length; i++) {
    let f = points[i];

    for (let j = 0; j < points.length; j++) {
      let s = points[j];

      if (i === j) continue;

      if (store[f[0]].has(s[1]) && store[s[0]].has(f[1])) {
        let total = Math.abs(f[0] - s[0]) * Math.abs(f[1] - s[1]);
        
        // it is possible to get 0.
        if (total) {
          min = Math.min(min, total);
        }
      }
    }
  }

  return min === Infinity ? 0 : min;
};