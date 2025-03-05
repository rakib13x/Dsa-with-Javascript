// class Node {
//   constructor(val) {
//     this.key = val;
//     this.left = null;
//     this.right = null;
//   }
// }

// /* Given a binary tree, print its nodes in inorder */
// function getInorder(node, result = []) {
//   if (node == null) return result;

//   getInorder(node.left, result);
//   result.push(node.key);
//   getInorder(node.right, result);

//   return result;
// }
// // Driver method

// var root = new Node(1);
// root.left = new Node(2);
// root.right = new Node(3);
// root.left.left = new Node(4);
// root.left.right = new Node(5);

// console.log(getInorder(root));

/**
 * Inorder Traversal Rule:
(Left → Root → Right)

    1. Traverse the left subtree recursively.
    2. Visit the root node.
    3. Traverse the right subtree recursively.
 */

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function getInOrder(node, result = []) {
  if (node === null) return result;

  getInOrder(node.left, result);
  result.push(node.value);
  getInOrder(node.right, result);
  return result;
}

var root = new Node(1);
root.left = new Node(2);
root.left.left = new Node(5);
root.left.left.left = new Node(6);
root.left.left.left.left = new Node(8);
root.right = new Node(4);
root.right.right = new Node(11);
root.right.right.right = new Node(20);

console.log(getInOrder(root));
