/* 
  A data structure where each element has a priority.
  Elements with higher priorities are served before elements
  with lower priorities

  A collectin of date where each node has a priority
  associated with it
*/

class Node {
  constructor(val, priority) {
    this.val = val;
    this.priority = priority;
    this.insertTime = Date.now();
  }
}

class PriorityQueue {
  constructor() {
    this.values = [];
  }

  enqueue(val, priority) {
    let newNode = new Node(val, priority);
    this.values.push(newNode);
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
      if (element.priority <= parent.priority) {
        break;
      }
      this.values[parentIdx] = element;
      this.values[idx] = parent;
      idx = parentIdx;
    }
  }

  // remove
  dequeue() {
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
        if (leftChild.priority > element.priority) {
          swap = leftChildIndex;
        }
      }

      if (rightChildIndex < length) {
        rightChild = this.values[rightChildIndex];
        if (
          (swap === null && rightChild.priority > element.priority) ||
          (swap !== null && rightChild.priority > leftChild.priority)
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
