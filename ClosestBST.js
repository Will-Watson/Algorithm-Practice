//Write a function that takes in a binary search tree and a target integer value and returns the the closest value to that target value.

//iterate through tree using search parameters
//define helper function to keep track of closest node value
//compare current value to following value and determine which value is closest to target
//traverse tree based on whether or not the current value is less than or greater than target value (left, right)
//edge cases possible null tree or node value === target value, in which case we can just return the target value.

//BST CLASS

/*

class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

*/

//recursive solution

const findClosestValueBST = (tree, value) => {
  const findClosestHelper = (tree, target, closest) => {
    if (tree === null) {
      return closest;
    }

    if (tree.value === target) {
      return target;
    }

    if (Math.abs(target - closest) > Math.abs(target - tree.value)) {
      closest = tree.value;
    }

    if (target < tree.value) {
      return findClosestHelper(tree.left, target, closest);
    } else {
      return findClosestHelper(tree.right, target, closest);
    }

    return closest;
  };

  return findClosestHelper(tree, target, (closest = Infinity));
};

//iterative solution (optimized)

const iterativeFindClosestValueBST = (tree, target) => {
  const interativeHelper = (tree, target, closest) => {
    let currentNode = tree;

    while (currentNode) {
      if (Math.abs(target - closest) > Math.abs(target - currentNode.value)) {
        closest = currentNode.value;
      }

      if (currentNode.value === target) {
        return target;
      }

      if (target < currentNode.value) {
        currentNode = currentNode.left;
      } else {
        currentNode = currentNode.right;
      }
    }

    return closest;
  };

  return interativeHelper(tree, target, (closest = Infinity));
};
