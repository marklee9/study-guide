/*

Given a singly linked list L: L0→L1→…→Ln-1→Ln,
reorder it to: L0→Ln→L1→Ln-1→L2→Ln-2→…

You may not modify the values in the list's nodes, only nodes itself may be changed.

Example 1:

Given 1->2->3->4, reorder it to 1->4->2->3.
Example 2:

Given 1->2->3->4->5, reorder it to 1->5->2->4->3.

*/

/*

1. find mid
2. reverse from mid
3. merge

*/

var reorderList = function (head) {
  if (!head || !head.next) return head;

  // 1. find the middle node O(n)
  let slow = head;
  let fast = head.next;

  while (fast && fast.next) {
    fast = fast.next.next;
    slow = slow.next;
  }

  // 2. reverse from middle
  let newHead = null;
  let curr = slow.next;
  slow.next = null;

  while (curr) {
    const next = curr.next;
    curr.next = newHead;
    newHead = curr;
    curr = next;
  }

  // 3. merge mid and head
  let currHead = head;
  let currMid = newHead;

  while (currHead && currMid) {
    const headNext = currHead.next;
    const midNext = currMid.next;

    currHead.next = currMid;
    currMid.next = headNext;

    currHead = headNext;
    currMid = midNext;
  }

  return head;
};