//Binary Search Tree crash course and review

//root is the top node in a tree
//child is a node directly connected to another node when moving away from the root
//parent, is the converse notion of a child
//siblings are groups of nodes with the same parent
//a leaf is a node with no children but also a child of another node
//edge, the connection between two nodes
//HTML hierarchy is a good example of a tree's structure. <body> has <div> children

class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class BST {
  constructor() {
    this.root = null;
  }
}
