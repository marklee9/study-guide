// Given a set of non-overlapping intervals, insert a new interval into the intervals (merge if necessary).

// You may assume that the intervals were initially sorted according to their start times.

// Example 1:

// Input: intervals = [[1,3],[6,9]], newInterval = [2,5]
// Output: [[1,5],[6,9]]
// Example 2:

// Input: intervals = [[1,2],[3,5],[6,7],[8,10],[12,16]], newInterval = [4,8]
// Output: [[1,2],[3,10],[12,16]]
// Explanation: Because the new interval [4,8] overlaps with [3,5],[6,7],[8,10].

var insert = function (intervals, newInterval) {
  if (!intervals.length) return [newInterval];
  let result = [];

  let curr = newInterval;
  let isCurrIn = false;

  while (intervals.length) {
    let int = intervals.shift();
    let { start, end } = int;
    let { start: ns, end: ne } = curr;

    if (end < ns) {
      result.push(int);

    } else if (ne >= end || ne >= start) {
      curr.start = Math.min(start, ns);
      curr.end = Math.max(end, ne);

    } else {
      if (!isCurrIn) {
        result.push(curr);
        isCurrIn = true;
      }
      result.push(int);
    }
  }
  
  if (!isCurrIn) result.push(curr);
  return result;
};