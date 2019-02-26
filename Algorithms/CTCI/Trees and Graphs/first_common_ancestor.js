/*

First Common Ancestor: 

Design an algorithm and write code to find the first common ancestor 
of two nodes in a binary tree. Avoid storing additional nodes in a 
data structure.

NOTE: This is not necessarily a binary search tree.

*/

function fca(root, p, q) {
  if (!root || root.val === p || root.val === q) return root;

  let left = fca(root.left, p, q);
  let right = fca(root.right, p, q);

  if (!left) return right;
  if (!right) return left;
  if (right && left) return root;
}