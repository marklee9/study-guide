/*

Intersection: 

Given two(singly) linked lists, determine if the two lists intersect.
Return the intersecting node. Note that the intersection is defined 
based on reference, not value.That is, if the kth node of the first 
linked list is the exact same node(by reference) as the jth node of 
the second linked list, then they are intersecting.

*/

function intersection(l1, l2) {
  let lenL = 0, lenS = 0;
  let [one, two] = [l1, l2];
  while (one) {
    lenL++;
    one = one.next;
  }

  while (two) {
    lenS++;
    two = two.next;
  }

  let long = l1, short = l2;

  if (lenL < lenS) {
    [long, short]= [l2, l1];
    [lenL, lenS] = [lenS, lenL];
  }

  while (lenL > lenS) {
    long = long.next;
  }

  while (long, short) {
    if (long.val === short.val) return long;
  }

  return -1;
}