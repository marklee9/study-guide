/*

Build Order: 

You are given a list of projects and a list of dependencies
(which is a list of pairs of projects, where the second project is 
dependent on the first project). All of a project's dependencies must 
be built before the project is. Find a build order that will allow 
the projects to be built. If there is no valid build order, return an error.

SOLUTION
EXAMPLE Input:
projects: a, b, c, d, e, f
dependencies: (a, d), (f, b), (b, d), (f, a), (d, c) 
Output: f, e, a, b, d, c

*/

function buildOrder(arr, dep) { 
  let store = cacheBuilder();
  let took = new Set();
  let result = [];
  
  let queue = arr;
  while (queue.length) {
    let el = queue.shift();

    if (store[el]) {
      let reqs = store[el];
      let bool = true
      for (let req of reqs) {
        if (!took.has(req)) {
          queue.push(el);
          bool = false;
          break;
        }
      }
      if (bool) {
        result.push(el);
        took.add(el);
      }
    } else {
      result.push(el);
      took.add(el);
    }
  }

  return result;

  function cacheBuilder() {
    let obj = {};
    for (let [key, val] of dep) {
      if (!obj[val]) obj[val] = [];
      obj[val].push(key);
    }
    return obj;
  }
} 
