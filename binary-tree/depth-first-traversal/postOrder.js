/**
 * Postorder Traversal Order:
    (Left → Right → Root)

    1. Traverse the left subtree recursively.
    2. Traverse the right subtree recursively.
    3. Visit the root node.
 */

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function postOrder(node, result = []) {
  if (node === null) return result;

  postOrder(node.left, result);
  postOrder(node.right, result);
  result.push(node.value);
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

console.log(postOrder(root));
