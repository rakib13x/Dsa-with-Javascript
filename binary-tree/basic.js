class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

// class BST {
//   constructor(value) {
//     const newNode = new Node(value);
//   }
// }

class BST {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const newNode = new Node(value);

    if (this.root === null) {
      this.root = newNode;
      return this;
    }

    let temp = this.root;
    while (true) {
      if (newNode.value === temp.value) return undefined;
      if (newNode.value < temp.value) {
        if (temp.left === null) {
          temp.left = newNode;
          return this;
        }
        temp = temp.left;
      }
      if (newNode.value > temp.value) {
        if (temp.right === null) {
          temp.right = newNode;
          return this;
        }
        temp = temp.right;
      }
    }
  }

  contain(value) {
    if (this.root === null) return false;
    let temp = this.root;
    while (temp) {
      if (value < temp.value) {
        temp = temp.left;
      } else if (value > temp.value) {
        temp = temp.right;
      } else {
        return true;
      }
    }
    return false;
  }

  minValueNode(currentNode) {
    while (currentNode.left != null) {
      currentNode = currentNode.left;
    }
    return currentNode;
  }

  bfs() {
    let currentNode = this.root;
    let queue = [];
    let results = [];
    queue.push(currentNode);

    while (queue.length) {
      currentNode = queue.shift();
      results.push(currentNode.value);
      if (currentNode.left) queue.push(currentNode.left);
      if (currentNode.right) queue.push(currentNode.right);
    }
    return results;
  }
}

let myTree = new BST();

myTree.insert(20);
myTree.insert(21);
myTree.insert(22);
myTree.insert(24);
myTree.insert(15);
myTree.insert(18);
myTree.contain(18);

console.log(myTree);
console.log(myTree.contain(18));
console.log(myTree.minValueNode(myTree.root));
console.log(myTree.minValueNode(myTree.root.right));
console.log(myTree.bfs());
