/*

given a BST, return an array of the sum of all branches

          1
        /   \
        2    3
      /  \    \
    4     5    6

result = [7, 7, 10]

*/

//initialize empty array to store each sum
//traverse each branch of the tree while adding each node value to a place holder variable
//once leaf is reached, push placeholder variable value into initialized array
//recursively repeat steps for each branch until entire tree has been traversed
//important to remember that the length of the array will be the exact same number as the number of branches. Thus making this a O(n) time and space complexity

//function initialized below with empty result array and helper function call

function branchSums(root) {
  const result = [];
  branchSumsHelper(root, 0, result);
  return result;
}

//helper function

function branchSumsHelper(root, count, result) {
  //base case that breaks recursive process based on whether or not the current node is null
  if (!root) {
    return;
  }

  //newCount variable keeps track of currenty addition as tree is traversed

  let newCount = count + root.value;

  //if statement to check if we've reached a leaf (there is no node to the 'left' or 'right' of the current node)
  //if node is leaf, push nodes value or 'newCount' to the result array

  if (root.left === null && root.right === null) {
    result.push(newCount);
    return;
  }

  //recursively call helper function on itself until all leaf nodes have been reached and all sums have been pushed to result array.

  branchSumsHelper(root.left, newCount, result);
  branchSumsHelper(root.right, newCount, result);
}
