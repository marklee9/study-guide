/*

Paths with Sum: 

You are given a binary tree in which each node contains 
an integer value (which might be positive or negative).

Design an algorithm to count the number of paths that sum 
to a given value. The path does not need to start or end at 
the root or a leaf, but it must go downwards

(traveling only from parent nodes to child nodes).

*/

// brute force way
function pathWithSum(root, target) {
  return helper(root, []);

  function helper(node, acc) {
    if (!node) return false;
    
    acc = acc.map(e => e + node.val);
    acc.push(node.val); 

    if (acc.includes(target)) return true;
    if (helper(node.left, acc.slice(0))) return true;
    if (helper(node.right, acc.slice(0))) return true;
    return false;
  }
}
