/**
 * 
(Root → Left → Right)

    1.  Visit the root node first.
    2. Traverse the left subtree recursively.
    3. Traverse the right subtree recursively.

 */

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function preOrderTraversal(root) {
  const result = [];

  function traverse(node) {
    if (node !== null) {
      result.push(node.value);
      traverse(node.left);
      traverse(node.right);
    }
  }

  traverse(root);
  return result;
}

function bfs(root) {
  let currentNode = root;
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

const root = new Node("a");
const nodeB = new Node("b");
const nodeC = new Node("c");
const nodeD = new Node("d");
const nodeE = new Node("e");
const nodeF = new Node("f");

root.left = nodeB;
nodeB.left = nodeD;
nodeB.right = nodeE;
root.right = nodeC;
nodeC.left = nodeF;
console.log(preOrderTraversal(root));
console.log(bfs(root));
