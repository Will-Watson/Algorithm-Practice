/*

Write a function that takes in a Binary Tree and returns its diameter. The diameter of a binary tree is defined as the length of the its longest path, even if that path doesn't pass through the root of the tree.

A path is a collection of connected nodes in a tree, where no noed is connected to more than two other nodes. The length of a path is the number of edges between the path's first node and its last node.

Each BinaryTree node has a integer value, a left child node, and a right child node. Children nodes can either be BinaryTree nodes themselves or None/null.

*/

//recursive solution

class TreeInfo {
  constructor(diameter, height) {
    (this.diameter = diameter), (this.height = height);
  }
}
