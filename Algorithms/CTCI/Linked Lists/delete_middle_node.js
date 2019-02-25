/*
Delete Middle Node: 

Implement an algorithm to delete a node in the middle 
(Le., any node but the first and last node, not necessarily the exact middle)
of a singly linked list, given only access to that node.

SOLUTION

EXAMPLE
Input: the node c from the linked list a -> b -> c -> d -> e -> f
Result: nothing is returned, but the new linked 
        list looks like a -> b -> d -> e -> f
*/

function deleteMiddle(head) {
  let dummy = new Node();
  let one = dummy, two = dummy;
  let prev = null;

  while (two.next) {
    two = two.next.next;
    prev = one;
    one = one.next;
  }
  prev.next = prev.next.next;
}