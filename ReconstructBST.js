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

function reconstructBst(preOrderTraversalValues) {
  if (preOrderTraversalValues.length === 0) return null;

  const currentValue = preOrderTraversalValues[0];
  let rightSubtreeRootIdx = preOrderTraversalValues.length;

  for (let i = 1; i < preOrderTraversalValues.length; i++) {
    if (preOrderTraversalValues[i] >= currentValue) {
      rightSubtreeRootIdx = i;
      break;
    }
  }

  const leftSubtree = reconstructBst(
    preOrderTraversalValues.slice(1, rightSubtreeRootIdx)
  );
  const rightSubtree = reconstructBst(
    preOrderTraversalValues.slice(rightSubtreeRootIdx)
  );

  return new BST(currentValue, leftSubtree, rightSubtree);
}

class TreeInfo {
  constructor(rootIdx) {
    this.rootIdx = rootIdx;
  }
}

function reconstructBst2(preOrderTraversalValues) {
  const treeInfo = new TreeInfo(0);
  return reconstructBstFromRange(
    -Infinity,
    Infinity,
    preOrderTraversalValues,
    treeInfo
  );
}

function reconstructBstFromRange(
  lowerBound,
  upperBound,
  preOrderTraversalValues,
  currentSubtreeInfo
) {
  if (currentSubtreeInfo.rootIdx === preOrderTraversalValues.length)
    return null;

  const rootValue = preOrderTraversalValues[currentSubtreeInfo.rootIdx];
  if (rootValue < lowerBound || rootValue >= upperBound) return null;

  currentSubtreeInfo.rootIdx += 1;
  const leftSubtree = reconstructBstFromRange(
    lowerBound,
    rootValue,
    preOrderTraversalValues,
    currentSubtreeInfo
  );
  const rightSubtree = reconstructBstFromRange(
    rootValue,
    upperBound,
    preOrderTraversalValues,
    currentSubtreeInfo
  );

  return new BST(rootValue, leftSubtree, rightSubtree);
}
