// Equations are given in the format A / B = k, where A and B are variables represented as strings, and k is a real number (floating point number). Given some queries, return the answers. If the answer does not exist, return -1.0.

// Example:
// Given a / b = 2.0, b / c = 3.0. 
// queries are: a / c = ?, b / a = ?, a / e = ?, a / a = ?, x / x = ? . 
// return [6.0, 0.5, -1.0, 1.0, -1.0 ].

// The input is: vector<pair<string, string>> equations, vector<double>& values, vector<pair<string, string>> queries , where equations.size() == values.size(), and the values are positive. This represents the equations. Return vector<double>.

// According to the example above:

// equations = [ ["a", "b"], ["b", "c"] ],
// values = [2.0, 3.0],
// queries = [ ["a", "c"], ["b", "a"], ["a", "e"], ["a", "a"], ["x", "x"] ]. 
// The input is always valid. You may assume that evaluating the queries will result in no division by zero and there is no contradiction.


var calcEquation = function (equations, values, queries) {
  let result = [];
  let map = buildGraph(equations, values);

  for (let [one, target] of queries) {
    const value = dfs(map, one, target, 1, new Set());
    result.push(value ? value : -1.0);

    if (value) {
      map[one][target] = value;
      map[target][one] = 1 / value;
    }
  }

  return result;

  function dfs(obj, one, target, acc, visited) {
    if (!obj[one]) return null; // Dead end
    visited.add(one); // Mark the current node as visited

    for (let n in obj[one]) {
      const current = acc * obj[one][n];
      if (n === target) return current;

      if (!visited.has(n)) {
        const value = dfs(obj, n, target, current, visited);
        if (value) return value;
      }
    }

    return null;
  }

  function buildGraph(equations, values) {
    const map = {};
    for (let i = 0; i < equations.length; i++) {
      const [from, to] = equations[i];
      const value = values[i];

      if (!map[from]) map[from] = {};
      map[from][to] = value;

      if (!map[to]) map[to] = {};
      map[to][from] = 1 / value;
    }

    return map;
  }
};