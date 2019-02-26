/*
Loop Detection: 

Given a circular linked list, implement an algorithm that 
returns the node at the beginning of the loop.

EXAMPLE
Input: A - > B - > C - > D - > E - > C Output: C
*/

// using space. both finds loop and 
function startOfLoop(head) {
  let set = new Set();

  while (head) {
    if (set.has(head.val)) return head;
    set.add(head.val);
    head = head.next;
  }

  return -1;
}

function startOfLoop2(head) {
  let slow = head, fast = head;

  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  if (!fast || !fast.next) return null; // doesn't have loop

  slow = head;
  while (slow !== fast) {
    slow = slow.next;
    fast = fast.next;
  }

  return fast;
}