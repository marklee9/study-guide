/*

Intersection: 

Given two straight line segments (represented as a start point and an end point)' 
compute the point of intersection, if any.

*/

// O(1) time, O(1) space
function intersection(line1, line2) {
  let s1 = findSlope(line1[0], line1[1]);
  let s2 = findSlope(line2[0], line2[1]);
  let b1 = findB(s1, line1[0]);
  let b2 = findB(s2, line2[0]);

  let x = (b1 - b2) * (s2 - s1);
  let y = s2 * x - b2;
  return [x, y];
}

function findSlope(pos1, pos2) {
  let [x1, y1] = pos1;
  let [x2, y2] = pos2;
  return (y2 - y1) / (x2 - x1);
}

function findB(slope, pos) {
  return pos[1] - (slope * pos[0]);
}

