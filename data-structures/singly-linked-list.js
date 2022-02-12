/* 
  A data structure that contains a head, tail and length property
  Linked lists consist of nodes (fistfull of elements withput indexes) and each node has a value and pointer
  to another node or null
  Fistfull of nodes pointing to another nodes

  Comparison
  List
  Do not have indexes
  Connected via nodes with a next pointer
  Random access is not allowed

  Arrays
  Indexed in order
  Insertion and deletion can be expensive
  Can quickly be accessed at a specific index 

*/

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }
  pop() {
    if (!this.head) {
      return undefined;
    }
    let current = this.head;
    let newTail = current;
    while (current.next) {
      newTail = current;
      current = current.next;
    }
    this.tail = newTail;
    this.tail.next = null;
    this.length--;
    if (!this.length) {
      this.head = null;
      this.tail = null;
    }
    return current;
  }
  shift() {
    if (!this.head) {
      return undefined;
    }
    let currentHead = this.head;
    this.head = currentHead.next;
    this.length--;
    if (this.length === 0) {
      this.tail = null;
    }
    return currentHead;
  }
  // adding a new node to the beginning of the Linked List
  unshift(val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }
  // Retrieving a node by it's position in the Linked List
  get(index) {
    // check if index is valid
    if (index < 0 || index >= this.length) {
      return null;
    }
    let counter = 0;
    let current = this.head;
    while (counter !== index) {
      current = current.next;
      counter++;
    }
    return current;
  }
  // changing the value of a node based on it's position on the Linked List
  set(index, val) {
    const foundNode = this.get(index);
    if (foundNode) {
      foundNode.val = val;
      return true;
    }
    return false;
  }
  insert(index, val) {
    if (index < 0 || index > this.length) {
      return false;
    }
    if (index === this.length) {
      return this.push(val);
    }
    if (index === 0) {
      this.unshift(val);
    }
    const newNode = new Node(val);
    const prev = this.get(index - 1);
    const temp = prev.next;
    prev.next = newNode;
    newNode.next = temp;
    this.length++;
    return true;
  }
  remove(index) {
    if (index < 0 || index > this.length) {
      return undefined;
    }
    if (index === 0) {
      return this.shift();
    }
    if (index === this.length - 1) {
      return this.pop();
    }
    const previousNode = this.get(index - 1);
    const removed = previousNode.next();
    previousNode.next = removed.next;
    this.length--;
    return removed;
  }
  reverse() {
    const node = this.head; // 1
    this.head = this.tail; // 3
    this.tail = node; // 1
    let next;
    let prev = null
    for (let i = 0; i < this.length; i++) {
      next = node.next; // 2->4
      node.next = prev; // 1->null
      prev = node; // 1->2
      node = next; // 2->4
    }
    // prev
    return this;
    // 1 -> 2 -> 3
    //  
  }
}
