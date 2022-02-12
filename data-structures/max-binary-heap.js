/* 
  Value of parent nide is always greater than childreb
  no implied ordering between siblings
  commonly used for implementing priority queues

  binary heap and binary search tree

  great when we use it for insertion or deletion
  Insertion O(log N)
  Removal O(log N)
  Search O(N)
*/

class MaxBinaryHeap {
  constructor() {
    this.values = [];
  }

  insert(element) {
    this.values.push(element);
    // insert at the end and bubble it up to the correct position
    this.bubbleUp();
  }

  bubbleUp() {
    let idx = this.values.length - 1;
    const element = this.values[idx];
    while (idx > 0) {
      // compare element to the parent element
      // calculate parent idx
      let parentIdx = Math.floor((idx - 1) / 2);
      let parent = this.values[parentIdx];
      if (element <= parent) {
        break;
      }
      this.values[parentIdx] = element;
      this.values[idx] = parent;
      idx = parentIdx;
    }
  }

  // remove
  extractMax() {
    // store the value of the max
    const max = this.values[0];
    const end = this.values.pop();
    if (this.values.length) {
      this.value[0] = end;
      this.sinkDown();
    }
    return max;
  }

  sinkDown() {
    let idx = 0;
    const length = this.values.length;
    const element = this.values[0];
    while (true) {
      let leftChildIndex = 2 * idx + 1;
      let rightChildIndex = 2 * idx + 2;
      let leftChild;
      let rightChild;
      let swap = null;

      // if it's valid index (in bounds)
      if (leftChildIndex < length) {
        leftChild = this.values[leftChildIndex];
        if (leftChild > element) {
          swap = leftChildIndex;
        }
      }

      if (rightChildIndex < length) {
        rightChild = this.values[rightChildIndex];
        if (
          (swap === null && rightChild > element) ||
          (swap !== null && rightChild > leftChild)
        ) {
          swap = rightChildIndex;
        }
      }

      if (!swap) {
        break;
      }
      this.values[idx] = this.values[swap];
      this.values[swap] = element;
    }
  }
}
