/*
Remove Dups: 

Write code to remove duplicates from an unsorted linked list.

FOLLOW UP
How would you solve this problem if a temporary buffer is not allowed ?
*/

// using space O(n), TC : O(n)
function removeDups(node) {
  if (!node) return node;
  let set = new Set();

  let curr = node;
  set.add(curr.val);

  while (curr.next) {
    if (set.has(curr.next.val)) {
      curr.next = curr.next.next;
    } else {
      set.add(curr.next.val);
      curr = curr.next;
    }
  }
}

// no space, O(n^2)
function removeDups2(node) {
  if (!node || !node.next) return node;

  let slow = node;
  let fast = node;           

  while (slow.next) {
    while (fast.next) {
      if (fast.next.val === slow.val) {
        fast.next = fast.next.next;
      } else {
        fast = fast.next;
      }
    }

    slow = slow.next;
    fast = slow;
  }
}