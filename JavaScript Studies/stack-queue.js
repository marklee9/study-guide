class SwQ {
  constructor() {
    this.queue = [];
    this.length = 0;
  }

  push(n) {
    this.queue.push(n);
    this.length++;
  }

  pop() {
    let i = 1;
    while (i < this.length) {
      let shifted = this.queue.shift();
      this.queue.push(shifted);
      i++;
    }
    this.length--;
    let shifted = this.queue.shift();
    return shifted;
  }
}


// queue = [1,2,3];
// length = 3;

// dequeue length - 1 times and enqueue them back

// queue = [3,1,2]
// dequeue.



