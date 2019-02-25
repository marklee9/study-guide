/*
Return Kth to Last:

Implement an algorithm to find the kth to last element of a singly linked list.
*/

// O(n) time, O(n) space
function removeKth(node, k) {
  let arr = [];

  let curr = node;
  while (curr) {
    arr.push(curr);
    curr = curr.next;
  }

  let prev = arr[k - 1];
  prev.next = prev.next.next;
}

// O(n) time, O(1) space
function removeKth2(head, n) {
  const dummy = new Node();
  dummy.next = head;

  let fast = dummy;
  let slow = dummy;

  while (fast && n >= 0) {
    fast = fast.next;
    n--;
  }

  while (fast) {
    fast = fast.next;
    slow = slow.next;
  }

  slow.next = slow.next.next;
  return dummy.next;
}