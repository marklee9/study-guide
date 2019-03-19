/*

Diving Board: 

You are building a diving board by placing a bunch of planks of 
wood end-to-end. There are two types of planks, one of length 
shorter and one of length longer. You must use exactly K planks 
of wood. Write a method to generate all possible lengths for 
the diving board.

*/

// Without Memoization O(2 ^ n);
function divingBoard (short, long, k) {
  let set = new Set();
  dfs(k, 0);
  return set;

  function dfs(n, length) {
    if (n === 0) return set.add(length);
    
    dfs(n - 1, length + short);
    dfs(n - 1, length + long);
  }
}

// With Memoization O(k^2);
function divingBoard2(short, long, k) {
  let set = new Set();
  let visited = new Set();
  dfs(k, 0);
  return set;

  function dfs(n, length) {
    if (n === 0) return set.add(length);

    let key = n + " " + length;
    if (visited.has(key)) return;

    dfs(n - 1, length + short);
    dfs(n - 1, length + long);
  }
}

// Simple and Optimal O(k)
function divingBoard3(short, long, k) {
  let set = new Set();

  let start = short * k;
  set.add(start);

  let lcount = 0;
  while (lcount < k) {
    start = start - short + long;
    set.add(start);
    lcount++;
  } 
  
  return set;
}