/*
Sum Lists: 

You have two numbers represented by a linked list, where each node
contains a single digit. The digits are stored in reverse order, such 
that the 1's digit is at the head of the list. Write a function that 
adds the two numbers and returns the sum as a linked list.

EXAMPLE
Input: (7-> 1 -> 6) + (5 -> 9 -> 2) //=> 617 + 295. 
Output : 2 -> 1 -> 9.               //=> 912.

FOLLOW UP
Suppose the digits are stored in forward order. Repeat the above problem.
*/

function ListNode(){}

// Iterative
function sumListsIter(l1, l2) {
  let one = l1;
  let two = l2;
  let result = new ListNode(1);
  let head = result;

  let plus = false;
  while (one || two) {
    let oneVal = 0, twoVal = 0, total;
    
    if (one) {
      oneVal = one.val;
      one = one.next;
    }
    
    if (two) {
      twoVal = two.val;
      two = two.next;
    }
    
    total = oneVal + twoVal;
    if (plus) total++;
    
    if (total > 9) {
      total %= 10;
      plus = true;
    } else {
      plus = false;
    }
    
    result.val = total;
    if (one || two) {
      result.next = new ListNode(null);
      result = result.next;
    } else {
      if (plus) result.next = new ListNode(1);
      return head;
    }
  }
}

// Recursion
function sumListRecur(l1, l2, plus = false) {
  if (!l1 && !l2 && !plus) return false;

  let one = l1 ? l1.val : 0;
  let two = l2 ? l2.val : 0;
  let next1 = l1 ? l1.next : null;
  let next2 = l2 ? l2.next : null;
  let sum = one + two;

  if (plus) {
    sum += 1;
    plus = false;
  }

  plus = sum > 9 ? true : false;
  sum %= 10;

  let head = new ListNode(sum);

  head.next = sumListRecur(next1, next2, plus);
  return head;
}


/*

FOLLOW UP :
Suppose the digits are stored in forward order. Repeat the above problem.

EXAMPLE
Input: (1 - > 2 - > 3) + (4 - > 5) //=> 123 + 45. 
Output: 1 - > 6 - > 8. //=> 168.

*/

function fu(l1, l2) {  
  let one = [], two = [];
  let list1 = l1, list2 = l2;

  while (list1) {
    one.push(list1);
    list1 = list1.next;
  }

  while (list2) {
    two.push(list2);
    list2 = list2.next;
  }

  let head = null;
  let i = one.length - 1, j = two.length - 1;
  let plus = false;
  while (true) {
    let val1, val2;
    let el1 = one[i], el2 = two[j];
    if (!el1 && !el2) {
      if (plus) {
        let newHead = new ListNode(1);
        newHead.next = head;
        return newHead;
      } else {
        return head;
      }
    }

    if (el1) val1 = el1.val;
    if (el2) val2 = el2.val;

    let sum = val1 + val2;
    if (plus) {
      sum++;
      plus = false;
    }

    plus = sum > 9 ? true : false;
    sum %= 10;

    let node = new ListNode(sum);
    node.next = head;
    head = node;
    i--;
    j--;
  }
}

