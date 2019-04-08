/*

A linked list is given such that each node contains an additional random pointer which could point to any node in the list or null.

Return a deep copy of the list.



Example 1:



Input:
{"$id":"1","next":{"$id":"2","next":null,"random":{"$ref":"2"},"val":2},"random":{"$ref":"2"},"val":1}

Explanation:
Node 1's value is 1, both of its next and random pointer points to Node 2.
Node 2's value is 2, its next pointer points to null and its random pointer points to itself.

*/

var copyRandomList = function (root) {
  let obj = {};
  let D = new Node();
  let head = D;

  while (root) {
    if (obj[root.val]) {
      head.next = obj[root.val];
    } else {
      head.next = new Node(root.val);
      obj[head.next.val] = head.next;
    }

    if (root.random && obj[root.random.val]) {
      head.next.random = obj[root.random.val];
    } else {
      if (root.random) {
        head.next.random = new Node(root.random.val);
        obj[head.next.random.val] = head.next.random;
      }
    }

    root = root.next;
    head = head.next;
  }

  return D.next;
};