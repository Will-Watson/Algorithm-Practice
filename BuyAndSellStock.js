/*

Say you have an array for which the ith element is the price of a given stock on day i.

If you were only permitted to complete at most one transaction (i.e., buy one and sell one share of the stock), design an algorithm to find the maximum profit.

Note that you cannot sell a stock before you buy one.

[7, 3, 4, 2, 1, 6, 5]
// 5

1 - 6 = 5


*/

//knowing that we only want to return a profit, or positive number, we can keep a variable starting at zero in order to monitor highest profit.
//we want to loop through the array twice. Once starting at the zeroith index and the second starting at the first index as you couldn't buy and sell on the same day returning zero or essentially the same as the starting variable.
//while iterating we want to keep track of the greatest profit, or, positive number returned from subtracting the two values, by reassigning our variable only if it is greater than its current assignment.
//return variable.

const findProfit = (prices) => {
  let maxProfit = 0;

  for (let i = 0; i < prices.length; i++) {
    for (let j = 1; j < prices.length; j++) {
      let currProfit = prices[j] - prices[i];
      if (currProfit > maxProfit) {
        maxProfit = currProfit;
      }
    }
  }
  return maxProfit;
};
