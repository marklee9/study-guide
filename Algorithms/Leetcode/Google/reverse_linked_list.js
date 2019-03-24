// Reverse a singly linked list.

// Example:

// Input: 1 - > 2 - > 3 - > 4 - > 5 - > NULL
// Output: 5 - > 4 - > 3 - > 2 - > 1 - > NULL

// Follow up:
//   A linked list can be reversed either iteratively or recursively.Could you implement both ?

// recursive
var reverseList1 = function(head) {
  if (!head || !head.next) return head;

  var newHead = reverseList2(head.next);
  head.next.next = head;
  head.next = null;
  return newHead;
};

// iterative
var reverseList2 = function (head) {
  let prev = null;
  let current = head;

  while (current) {
    let nextNode = current.next;
    current.next = prev;
    prev = current;
    current = nextNode;
  }

  return prev;
};

var reverseList3 = function(head) {
  if (!head) return head;
  let prev = head;
  let curr = head;

  while (curr.next) {
    let next = curr.next;
    curr.next = next.next;
    next.next = prev;
    prev = next;
  }

  return prev;
};
