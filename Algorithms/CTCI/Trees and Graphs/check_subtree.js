/*

Check Subtree: 

Tl and T2 are two very large binary trees, with Tl much bigger than T2.
Create an algorithm to determine if T2 is a subtree of Tl.
A tree T2 is a subtree of T1 if there exists a node n in Tl 
such that the subtree of n is identical to T2.That is,
if you cut off the tree at node n, the two trees would be identical.

*/

function isSubtree(T1, T2) {
  let queue = [T1];
  while (queue.length) {
    let el = queue.shift();
    if (isSame(el, T2)) return true;
    if (el.left) queue.push(el.left);
    if (el.right) queue.push(el.right);
  }
  return false;
}

function isSame(head1, head2) {
  if (!head1 && !head2) return true;
  if (!head1 || !head2) return false;
  if (head1.val !== head2.val) return false;

  let left = isSame(head1.left, head2.left);
  let right = isSame(head1.right, head2.right);

  return left && right;
}