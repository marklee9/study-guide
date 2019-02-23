class MinHeap {
  constructor(k) {
    this.nodes = [];
    this.k = k;
  }

  add(element) {
    if (this.nodes.length === this.k) {
      if (element > this.nodes[0]) {
        this.pop();
        this.nodes.push(element);
        this.heapifyUp(this.nodes.length - 1);
      }
    } else {
      this.nodes.push(element);
      this.heapifyUp(this.nodes.length - 1);
    }

    return this.nodes[0];
  }

  pop() {
    const lastEntry = this.nodes.splice(this.nodes.length - 1, 1)[0];
    if (this.nodes.length) {
      this.nodes[0] = lastEntry;
      this.heapifyDown(0);
    }
  }

  heapifyUp(index) {
    const parent = Math.floor((index - 1) / 2);

    if (parent > -1 && this.nodes[index] < this.nodes[parent]) {
      this.swap(index, parent);
      this.heapifyUp(parent);
    }
  }

  heapifyDown(index) {
    const leftChild = (2 * index) + 1;
    const rightChild = (2 * index) + 2;
    let nextIndex = null;

    if ((this.nodes[leftChild] < this.nodes[index]) && (this.nodes[rightChild] < this.nodes[index])) {
      nextIndex = this.nodes[leftChild] < this.nodes[rightChild] ? leftChild : rightChild;
    } else if (this.nodes[leftChild] < this.nodes[index]) {
      nextIndex = leftChild;
    } else if (this.nodes[rightChild] < this.nodes[index]) {
      nextIndex = rightChild;
    }

    if (nextIndex !== null) {
      this.swap(index, nextIndex);
      this.heapifyDown(nextIndex);
    }
  }

  swap(cI, pI) {
    const child = this.nodes[cI];
    const parent = this.nodes[pI];

    this.nodes[cI] = parent;
    this.nodes[pI] = child;
  }
}