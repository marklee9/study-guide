// Given a binary tree, return all duplicate subtrees. For each kind of duplicate subtrees, you only need to return the root node of any one of them.

// Two trees are duplicate if they have the same structure with same node values.

// Example 1:

//         1
//        / \
//       2   3
//      /   / \
//     4   2   4
//        /
//       4

// The following are two duplicate subtrees:

//       2
//      /
//     4
// and

//     4
// Therefore, you need to return above trees' root in the form of a list.

function fdst(root) {
  let result = [];
  if (!root) return result;

  let obj = {};
  let q = [root];

  while (q.length) {
    let el = q.shift();
    let key = dfs(el);
    
    if (obj[key] === undefined) {
      obj[key] = "#";
    } else if (obj[key] === "#") {
      result.push(el);
      obj[key] = true;
    }

    if (el.left) q.push(el.left);
    if (el.right) q.push(el.right);
  }

  return result;

  function dfs(node) {
    let string = "";
    let queue = [node];

    while (queue.length) {
      let el = queue.shift();
      if (el) {
        string += el.val;
        queue.push(el.left, el.right);
      } else {
        string += "#";
      }
    }
    return string;
  }
}


