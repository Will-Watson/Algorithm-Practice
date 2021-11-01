/*

write a function that takes in a Binary Search Tree (BST) and a positive integer k and returns the kth largest integer contained in the BST.

You can Assume that there will only be integer values in the BST and that k is less than or equal to th enumber of nodes in the tree.

Also, for the purpose of this question, duplicate integers will be treated as distinct values. In other words, the second largest value in a BST containing values {5, 7, 7} will be 7-- not five.

Each BST node has an ineeger value, a left child node, and a right child node. A node is said to be valid BST node if and only if it satisfies the BST property: Its value is strictly greater than the values of every node to its left; its value is less than or eual to the values of every node to its right; and its children nodes are either valid BST nodes themselves or None/Null

*/

class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

//create an inOrderTraverse function in order to go through the entire tree and return a sorted array of the values within the tree.

function inOrderTraverse(tree, array) {
  if (tree) {
    inOrderTraverse(tree.left, array);
    array.push(tree.value);
    inOrderTraverse(tree.right, array);
  }
  return array;
}

//Now in the function run by the prompt, with my sorted array of integers I can return the Kth integer by merely subtracting it from the last index in the array.
