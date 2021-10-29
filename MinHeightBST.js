/*
write a function that takes in a non-empty sorted array of distinct ingtegers, constructs a BST fromt he integers, and returns the root of the BST.

The function should minimise the height of the BST.

Each BST node has an integer value, a left child node and a right child node. A node is said to be valid BSST node if and only if it satisfies the BST property: its value is stricly greater than the values of every node to its left; its value is less than or equal to the values of every node to its right; and its children nodes are either valid BST nodes themselves or none/null.

A BST is valid if and only if all of its nodes are vali BST nodes.

Note that the BST class already has an insert method which you can use if you want.

*/

class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  insert(value) {
    if (value < this.value) {
      if (this.left === null) {
        this.left = new BST(value);
      } else {
        this.left.insert(value);
      }
    } else {
      if (this.right === null) {
        this.right = new BST(value);
      } else {
        this.right.insert(value);
      }
    }
  }
}

function minHeightBst(array) {
  return constructMinHeightBst(array, null, 0, array.length - 1);
}

function constructMinHeightBst(array, bst, startIdx, endIdx) {
  if (endIdx < startIdx) return;

  const midIdx = Math.floor((startIdx + endIdx) / 2);
  const valueToAdd = array[midIdx];

  if (!bst) {
    bst = new BST(valueToAdd);
  } else {
    bst.insert(valueToAdd);
  }
  constructMinHeightBst(array, bst, startIdx, midIdx - 1);
  constructMinHeightBst(array, bst, midIdx + 1, endIdx);
  return bst;
}
