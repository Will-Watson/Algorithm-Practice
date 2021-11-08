/*

You're given the root node of a Binary Tree. Write a function that returns true if this Binary Tree is Height Balanced and Flase if it isn't.

A Binary Tree is height balanced if for each node in the tre, the difference between the height of its left subtree and the height of its right subtree is at most 1.

Each BinaryTree node has an interger value, a left child node, and a right child node. Children nodes can either be BinaryTree nodes themselves or None/null.

*/

class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class TreeInfo {
  constructor(isBalanced, height) {
    this.isBalanced = isBalanced;
    this.height = height;
  }
}
