// we store sorted data in a particular way
/* 
  each node can have at most two children
  sorted in a particular way
  store data that can be comparable
  all number that is less than the parent is located left of them
  every node to the right of a parent node is always greater
  than the parent

  Time complexity:
  Insertion: O(log n) (not guaranteed)
  Searching: O(log n) (not guaranteed)


  Traversing a tree:
  Two ways:
  Breadth-first search
  Depth-first search
*/

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  insert(value) {
    const newNode = new Node(value);

    if (!this.root) {
      this.root = newNode;
      return this;
    }

    let current = this.root;
    while (true) {
      if (value === current.value) {
        return undefined;
      }
      if (value < current.value) {
        // found the correct spot for insertion
        if (!current.left) {
          current.left = newNode;
          return this;
        }
        current = current.left;
      } else if (value > current.value) {
        if (!current.right) {
          current = newNode;
          return this;
        }
        current = current.right;
      }
    }
  }
  contains(value) {
    if (!this.root) {
      return false;
    }
    let current = this.root;
    // while there is something to loop over
    while (current) {
      if (value < current.value) {
        current = current.left;
      } else if (value > current.value) {
        current = current.right;
      } else {
        return true;
      }
    }
    return false;
  }
  // tree traversal
  breadthFirstSearch() {
    let node = this.root;
    let data = []; // visited
    let queue = [];
    queue.push(node);
    while (queue.length) {
      node = queue.shift();
      data.push(node);
      if (node.left) {
        queue.push(node.left);
      }
      if (node.right) {
        queue.push(node.right);
      }
    }
    return data; // visited
  }
  // travers all nodes vertically down to the end of the tree before visiting sibling node
  // preOrder
  depthFirstSearchPreOrder() {
    const data = [];
    let currrent = this.root;
    function traverse(node) {
      data.push(node.value);
      if (node.left) {
        traverse(node.left);
      }
      if (node.right) {
        traverse(node.right);
      }
    }
    traverse(currrent);
    return data;
  }
  // explore all children first
  depthFirstSearchPostOrder() {
    const data = [];
    function traverse(node) {
      if (node.left) {
        traverse(node.left);
      }
      if (node.right) {
        traverse(node.right);
      }
      data.push(node.value);
    }
    traverse(this.root);
    return data;
  }
  depthFirstSearchInOrder() {
    const data = [];
    function traverse(node) {
      if (node.left) {
        traverse(node.left);
      }
      data.push(node.value);
      if (node.right) {
        traverse(node.right);
      }
    }
    traverse(this.root);
    return data;
  }
  log() {
    console.log(JSON.stringify(this, null, 2));
  }
}

const tree = new BinarySearchTree();
tree.insert(10);
tree.insert(5);
tree.insert(13);
tree.insert(11);
tree.insert(2);
tree.insert(16);
tree.log();
