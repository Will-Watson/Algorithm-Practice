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
