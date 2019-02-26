/*
Three in One: 

Describe how you could use a single array to implement three stacks.
*/

class ThreeInOne{
  constructor() {
    this.store = [];
    this.one = 0;
    this.two = 1;
    this.three = 2;
  }

  push(stack, val) {
    this.store[this[stack]] = val;
    this[stack] += 3;
  }

  pop(stack) {    
    this[stack] -= 3;

    if (this[stack] < 0) {
      this[stack] += 3;
      return null;
    }
    let res = this.store[this[stack]];
    this.store[this[stack]] = null;
    return res;
  }
}