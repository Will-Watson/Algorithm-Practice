/*

Given an array of positive integers representing coin denominations and a single non-negative integer n representing a target amount of money, write a function that returns the smallest number of coins needed to make change for (to sum up to) that target amount using the given coin denominations.

Note that you have access to an unlimited amount of coines. in other words, if the dinominations are [1, 5, 10], you have access to an unlimited amount of 1's, 5's, 10's.

If it's impossible to make change for the target amount, return -1.

*/

//time O(nd)
//space O(n)

function minNumberOfCoinsForChange(n, denoms) {
  const array = Array(n + 1).fill(Infinity);
  array[0] = 0;
  for (const denom of denoms) {
    for (let amount in array) {
      if (denom <= amount) {
        array[amount] = Math.min(array[amount], 1 + array[amount - denom]);
      }
    }
  }
  return array[n] !== Infinity ? array[n] : -1;
}
