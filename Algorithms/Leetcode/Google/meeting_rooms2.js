/*
Meeting Rooms II

Given an array of meeting time intervals consisting of start and end 
times [[s1,e1],[s2,e2],...] (si < ei), find the minimum number of 
conference rooms required.

Example 1:

Input: [[0, 30],[5, 10],[15, 20]]
Output: 2

Example 2:
Input: [[7,10],[2,4]]
Output: 1

*/

var minMeetingRooms = function (intervals) {
  let starts = intervals.concat().sort((a, b) => a.start - b.start);
  var ends = intervals.concat().sort((a, b) => a.end - b.end);

  var rooms = 0;
  var end = 0;

  for (var i = 0; i < intervals.length; i++) {
    if (starts[i].start < ends[end].end) {
      rooms++;
    } else {
      end++;
    }
  }
  return rooms;
};