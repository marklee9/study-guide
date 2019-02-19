// Given a collection of intervals, merge all overlapping intervals.

// Example 1:

// Input: [[1,3],[2,6],[8,10],[15,18]]
// Output: [[1,6],[8,10],[15,18]]
// Explanation: Since intervals [1,3] and [2,6] overlaps, merge them into [1,6].
// Example 2:

// Input: [[1,4],[4,5]]
// Output: [[1,5]]
// Explanation: Intervals [1,4] and [4,5] are considered overlapping.

var merge = function (intervals) {
  let sorted = intervals.sort((a, b) => a.start - b.start);

  let i = 0;
  while (i < sorted.length - 1) {
    let j = i + 1;
    let first = sorted[i];
    let second = sorted[j];

    if (first.end >= second.start) {
      first.start = Math.min(first.start, second.start);
      first.end = Math.max(first.end, second.end);

      sorted.splice(j, 1);
      continue;
    }

    i++;
  }

  return sorted;
};