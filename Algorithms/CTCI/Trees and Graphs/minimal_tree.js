/*

Minimal Tree: 

Given a sorted (increasing order) array with unique integer elements, 
write an algorithm to create a binary search tree with minimal height.

*/

function TreeNode(){}

function minimalBST(arr) {
  return buildTree(0, arr.length - 1);

  function buildTree(start, end) {
    if (!arr.length) return null;
  
    let mid = Math.floor((start + end) / 2);
    let head = new TreeNode(arr[mid]);
  
    head.left = buildTree(start, mid - 1);
    head.right = buildTree(mid + 1, end);
  
    return head;
  }
}
