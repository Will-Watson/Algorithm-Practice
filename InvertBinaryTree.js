/*

Write a function that takes in a Binary Tree and inverts it. In other words, the function should swap every left node in the tree for its corresponding right node.

Each BinaryTree node has an integer value, a left child node, and a rigth child node. Children nodes can either be BinaryTree nodes themselves or None/ null.

*/

class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

//recursive solution

function invertBinaryTree(tree) {
  let temp = tree.left;
  tree.left = tree.right;
  tree.right = temp;

  if (tree.left) {
    invertBinaryTree(tree.left);
  }

  if (tree.right) {
    invertBinaryTree(tree.right);
  }

  if (!tree.right && !tree.left) {
    return null;
  }
}

//queue solution

function invertBinaryTree2(tree) {
  const queue = [tree];

  while (queue.length) {
    const current = queue.shift();
    if (current === null) continue;
    swapSubTrees(current);
    queue.push(current.left);
    queue.push(current.right);
  }
}

function swapSubTrees(tree) {
  const temp = tree.left;
  tree.left = tree.right;
  tree.right = temp;
}
