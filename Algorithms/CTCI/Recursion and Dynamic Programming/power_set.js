/*

Power Set: 

Write a method to return all subsets of a set.

*/


// [[]]
// [[], [1]]
// [[], [1], [2], [1,2]]

function subset(arr) {
  if (!arr.length) return [[]];
  let last = arr[arr.length - 1];
  let prev = subset(arr.slice(0, -1));
  let next = prev.map(e => e.concat([last]));
  return prev.concat(next);
}