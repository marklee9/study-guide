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

    let parentI = Math.floor(i / 2); // parentIndex

    // if the number is greater than the parent switch and
    // recursively call. 

    if (this.array[i] > this.array[parentI]) {
      [ this.array[i], this.array[parentI] ] = [ this.array[parentI], this.array[i] ];
      this.heapifyUp(parentI);
    }
  }

  deleteMax(){
    let max = this.array[1]; // first item in the array is the max
    this.array[1] = this.array.pop(); // switch with the last item in the array
    this.heapifyDown(1);

    return max;
  }

  heapifyDown(i) {
    let leftI = i * 2, rightI = i * 2 + 1;
    let array = this.array;

    let L = array[leftI] || -Infinity;    
    let R = array[rightI] || -Infinity;    
    let val = array[i];

    if (val > L && val > R) return;     // value is greater than both Left and Right -> stop
    let swapIndex = (L > R) ? leftI : rightI;  // if not which side shall it swap with

    [ array[swapIndex], array[i] ] = [ array[i], array[swapIndex] ];
    this.heapifyDown(swapIndex);
  }
}