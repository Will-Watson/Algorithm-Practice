/*

The pre-order traversal of a Binary Tree is a traversal technique that starts at the tree's root node and visits nodes in the following order:

1. Current node.
2. Left subtree.
3. Right subtree.

Given a non-empty array of integeres representing the pre=order traversal of a binary Search Tree (BST), write a function that creates the relevant BST and returns its root node.

The inpur array will contain the values of BST nodes in the order in which these nodes would be visited with a pre-order traversal.

Each BST node has an integer value, a left child noe, and a right child node. A node is said to be valid BST node if and only if it satisfies the BST property: it's value is strictly greater than the values of every node to its left; its value is less than or equal to the values of every node to its right; and its children noes are either valid BST nodes themselves or None / null.

*/

class BST {
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}
