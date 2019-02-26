/*
Stack of Plates: 

Imagine a(literal) stack of plates. If the stack gets too high, 
it might topple. Therefore, in real life, we would likely start 
a new stack when the previous stack exceeds some threshold.

Implement a data structure SetOfStacks that mimics this.SetOfStacks
should be composed of several stacks and should create a new stack 
once the previous one exceeds capacity.SetOfStacks.push() and 
SetOfStacks.pop() should behave identically to a single stack

(that is, pop() should return the same values as it would
if there were just a single stack).

FOLLOW UP
Implement a function popAt(int index) which performs a pop 
operation on a specific sub - stack.
*/

class SetOfStacks{
  constructor(cap) {
    this.store = [[]];
    this.cap = cap;
    this.stack = 0;
  }

  push(val) {
    if (this.store[this.stack].length === this.cap) {
      this.stack++;
      this.store[this.stack] = [];
    }
    this.store[this.stack].push(val);
  }

  pop() {
    while (this.store[this.stack].length === 0 && this.stack > 0) {
      this.stack--;
    }
    return this.store[this.stack].pop();
  }

  popAt(num) {
    return this.store[this[num]].pop();
  }
}