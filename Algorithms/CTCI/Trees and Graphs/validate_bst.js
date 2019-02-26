/*

Validate BST: 

Implement a function to check ifa binary tree is a binary search tree.

*/

function validateBST(root) {
  return helper(root, -Infinity, Infinity);

  function helper(node, min, max) {
    if (node.val > max || node.val < min) return false;
    if (!node) return true;

    let left = helper(node.left, min, node.left.val);
    let right = helper(node.right, node.right.val, max);

    return left && right;
  }
}