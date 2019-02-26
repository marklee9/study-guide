/*

Stack Min: 

How would you design a stack which, in addition to push 
and pop, has a function min which returns the minimum element?

Push, pop and min should all operate in 0(1) time.

*/

function MinStack() {
  this.store = [];
  this.min = [];
}

MinStack.prototype.push = function (val) {
  let { store, min } = this;
  
  if (store.length) {
    if (min[min.length - 1] >= val) min.push(val);
  } else {
    min.push(val);
  }
  store.push(val);
};

MinStack.prototype.pop = function () {
  let { store, min } = this;

  let el = store.pop();
  if (min[min.length - 1] === el) {
    min.pop();
  }
  return el;
};

MinStack.prototype.min = function () {
  return this.min[this.min.length - 1];
};