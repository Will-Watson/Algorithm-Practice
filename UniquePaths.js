//You are given the dimensions of a grid, m and n. Starting from the top left, or (0,0), you want to end up making your way to the bottom right corner. The only two moves you can make are to go one space directly to your right, or one space directly down. Write a function that can help you determine how many unique paths you can take between these two corners.

/*

uniquePaths(3, 2)

[
  [1, 1]
  [1, 1]
  [1, 1]
]

returns three as there threes paths

-right, down, down
-down, right, down
-down, down, right

*/

//though we have our m and n values giving us the parameters of the grid we also want to keep track of rows and columns
//so we will intially start them both off with a value of zero since we will only be incrementing them based on the amount of paths we find.
//when we reach the target cell we want to increment the value returned by one to signify that we have found a valid path
//if we're checking a cell that is off the grid or, greater than or equal to a row or column we want to return zero to signify we've fallen off the grid.
//lastly we want to recurseivly call the function twice, once while incrementing the row and once while incrementing the column and add them together to get the total paths.

const uniquePaths = (m, n, row = 0, col = 0) => {
  if (row === m - 1 && col === n - 1) {
    return 1;
    //minus one because we have to remember that length starts at zero.
  } else if (row >= m || col >= n) {
    return 0;
  } else {
    return uniquePaths(m, n, row + 1, col) + uniquePaths(m, n, row, col + 1);
  }
};
