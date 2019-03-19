/*
You are given coins of different denominations and a total 
amount of money amount. Write a function to compute the fewest 
number of coins that you need to make up that amount.

If that amount of money cannot be made up by any combination 
of the coins, return -1.

Example 1:

Input: coins = [1, 2, 5], amount = 11
Output: 3
Explanation: 11 = 5 + 5 + 1

Example 2:

Input: coins = [2], amount = 3
Output: -1

Note:
You may assume that you have an infinite number of each kind of coin.
*/

function coinChange(coins, target) {
  if (target === 0) return 0;
  let n = Infinity;
 
  for (let coin of coins) {
    let curr = 0; // amount of coins it has right now in this function.

    if (target >= coin) {
      let next = coinChange(coins, target - coin);

      // next could return either 0 or -1;
      // we don't want to take it if its 0;
      if (next >= 0) {
        curr = 1 + next;
      }
    }
    
    // curr is only positive when next didn't return -1;
    if (curr > 0) {
      n = Math.min(n, curr);
    }
  }

  let result = n === Infinity ? - 1 : n;
  return result;
}

// Making it Dynamic!

function coinChange2(coins, target) {
  let cache = {};
  return helper(coins, target);

  function helper(coins, target) {
    if (target === 0) return 0;
    if (cache[target]) return cache[target];

    let n = Infinity;
  
    for (let coin of coins) {
      let curr = 0;
  
      if (target >= coin) {
        let next = helper(coins, target - coin);
        if (next >= 0) {
          curr = 1 + next;
        }
      }
      if (curr > 0) {
        n = Math.min(n, curr);
      }
    }
  
    let result = n === Infinity ? -1 : n;
    cache[target] = result;
    return result;
  }
}