class MaxHeap {
  constructor(){
    this.array = [null];
  }

  insert(val) {
    this.array.push(val);
    this.heapifyUp(this.array.length - 1);
  }

  heapifyUp(i) {
    if (i === 1) return;

    let parentI = Math.floor(i / 2);
    if (this.array[i] > this.array[parentI]) {
      [ this.array[i], this.array[parentI] ] = [ this.array[parentI], this.array[i] ];
      this.heapifyUp(parentI);
    }
  }

  
  deleteMax(){
    let max = this.array[1];
    this.array[1] = this.array.pop();
    this.heapifyDown(1);
    return max;
  }

  heapifyDown(i) {
    let leftI = i * 2, rightI = i * 2 + 1;
    let array = this.array;
    let L = array[leftI] || -Infinity;
    let R = array[rightI] || -Infinity;
    let val = array[i];

    if (val > L && val > R) return;
    let swapIndex = (L > R) ? leftI : rightI;

    [ array[swapIndex], array[i] ] = [ array[i], array[swapIndex] ];
    this.heapifyDown(swapIndex);
  }
}