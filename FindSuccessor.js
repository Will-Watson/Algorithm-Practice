/*

Write a function that takes in a Binary Tree (where nodes have an additional pointer to their parent node) as well as a node contained in that tree and returns the given node's successor.

A node's successor is the next node to be visited (immediately after the given node) when treversint ites tree using the in-order tree-traversal technique. A node has no succesor if its the last node to be visited in the in-order traversal.

if a node has no successor, your function should return None/null.

Each Binary Tree nodes has an integer value, a parent node, a left child node, and a rigth child node. Children nodes can either be Binary Tree nodes themselves or None/null.

*/

class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
    this.parent = null;
  }
}

function inOrderTraversalHelper(tree, array = []) {
  if (tree) {
    inOrderTraversalHelper(tree.left, array);
    array.push(tree);
    inOrderTraversalHelper(tree.right, array);
  }
  return array;
}
