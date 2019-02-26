/*

Route Between Nodes: 

Given a directed graph, design an algorithm to find out 
whether there is a route between two nodes.

*/

function Node(val){
  this.val = val;
  this.neighbors = [];
}

function route(head, n1, n2) {
  let visited = new Set();

  let from;
  let queue = [head];
  while (queue.length) {
    let el = queue.shift();
    if (visited.has(el.val)) continue;
    visited.add(el.val);

    if (el.val === n1) {
      from = el;
      break;
    } else {
      queue.push(...el.children);
    }
  }

  queue = [from];
  visited = new Set();
  while (queue.length) {
    let el = queue.shift();
    if (visited.has(el.val)) continue;
    visited.add(el.val);

    if (el.val === n2) {
      return true;
    } else {
      queue.push(...el.neighbors);
    }
  }

  return false;
}