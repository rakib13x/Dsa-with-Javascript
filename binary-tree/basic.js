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
}

let myTree = new BST();

myTree.insert(20);
myTree.insert(21);
myTree.insert(22);
myTree.insert(24);
myTree.insert(15);
myTree.insert(18);

console.log(myTree);
