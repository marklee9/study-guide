/*

Triple Step: 

A child is running up a staircase with n steps and can hop 
either 1 step, 2 steps, or 3 steps at a time. Implement a method 
to count how many possible ways the child can run up the stairs.

*/

// recursion.
function tripleStep(n) {
  if (n < 0) {
    return 0;

  } else if (n === 0) {
    return 1;

  } else {
    return tripleStep(n - 1) + tripleStep(n - 2) + tripleStep(n - 3);
  }
}

// Dynamic Programming
function tripleStep2(n) {
  let cache = [];
  if (cache[n]) return cache[n];

  if (n < 0) {
    return 0;

  } else if (n === 0) {
    return 1;

  } else {
    cache[n] = tripleStep2(n - 1) + tripleStep2(n - 2) + tripleStep2(n - 3);
    return cache[n];
  }
}