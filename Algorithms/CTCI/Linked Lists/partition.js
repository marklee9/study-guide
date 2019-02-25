/*
Partition: 

Write code to partition a linked list around a value x, 
such that all nodes less than x come before all nodes greater 
than or equal to x.If x is contained within the list, the values 
of x only need to be after the elements less than x(see below).

The partition element x can appear anywhere in the "right partition";
it does not need to appear between the left and right partitions.

EXAMPLE
Input: 3 -> 5 -> 8 -> 5 -> 10 -> 2 -> 1,  partition = 5
Output: 3 -> 1 -> 2 -> 10 -> 5 -> 5 -> 8
*/

function partition(node, p) {
  let small, big;
  let sLast, bLast;

  let curr = node;
  while (curr) {
    if (curr.val < p) {
      if (!small) {
        small = curr;
        sLast = curr;
      } else {
        sLast.next = curr;
        sLast = sLast.next;
      }
    } else {
      if (big){
        curr.next = big;
      } else {
        big = curr;
        bLast = curr;
      }
    }
    curr = curr.next;
  }
  
  bLast.next = null;
  sLast.next = big;
  return small;
}

