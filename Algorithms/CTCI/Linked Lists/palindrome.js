/*
Palindrome: 

Implement a function to check if a linked list is a palindrome.
*/

// reverse and compare with the original
function ListNode(){}

function palindrome(list) {
  return isEqual(list, reverse(list));

  function isEqual(one, two) {
    while (one && two) {
      if (one.val !== two.val) return false;
      one = one.next;
      two = two.next;
    }
    return one && two;
  }

  function reverse(node) {
    let head = null;

    while (node) {
      let n = new ListNode(node.val);
      n.next = head;
      head = n;
      node = node.next;
    }

    return head;
  }
}

