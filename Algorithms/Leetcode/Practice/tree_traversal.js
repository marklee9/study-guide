// iterative DFS traversals.

// Pre Order 
function preorder(root) {
  if (!root) return [];
  let result = [];
  let stack = [root];

  while (stack.length) {
    let el = stack.pop();
    result.push(el.val);
    if (el.right) stack.push(el.right);
    if (el.left) stack.push(el.left);
  }

  return result;
}

// In order
function inorder(root) {
  if (!root) return [];
  let result = [];
  let stack = [];
  let curr = root;

  while (curr || stack.length) {
    while (curr) {
      stack.push(curr);
      curr = curr.left;
    }
    curr = stack.pop();
    result.push(curr.val);
    curr = curr.right;
  }
  return result;
}

// post order 
function postorder(root) {
  if (!root) return [];
  let result = [];
  let stack = [root];

  while (stack.length) {
    let el = stack.pop();
    result.unshift(el.val);
    if (el.left) stack.push(el.left);
    if (el.right) stack.push(el.right);
  }

  return result;
}