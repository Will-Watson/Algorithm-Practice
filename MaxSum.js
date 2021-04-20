//Given an array of integers and a number representing the amount of integers within the array, find the max sum of number integers

/*

([1, 3, 5, 2, 1, 5, 7, 4], 2) --> 12
because 5 + 7 = 12

*/

//nested loop solution

const maxSum = (arr, num) => {
  if (num > arr.length) {
    return null;
    //edge case, if the number is greater than the over length of the array then return null.
  }
  let max = -Infinity;
  //set max to the lowest possible number to account for potential negative numbers in the array/
  for (let i = 0; i < arr.length - num + 1; i++) {
    //loop through the initial array minus the number plus one.
    //because we know there would be no purpose in looping through the remaining digits of the array if the are less than the number.
    let temp = 0;
    //assign a temporary value to compare with the max value;
    for (let j = 0; j < num; j++) {
      //loop through the numbers following the i'th index based on the num
      temp += arr[i + j];
      // assign temp the sum of those numbers
      if (temp > max) {
        max = temp;
        //if temp greater than max, reassign max to temp
      }
    }
  }
  return max;
};

//sliding window solution (optimized)

const _maxSum = (arr, num) => {
  let max = 0;
  let temp = 0;
  //initialize max and temp variables with dummy number.
  if (num > arr.length) {
    return null;
  }
  //same edge case as before. If num is greater than the length of the array we return null.
  for (let i = 0; i < num; i++) {
    max += arr[i];
    //here we're counting the first num amount of values and assigning it to max.
  }
  temp = max;
  //assigning the same value to temp for future comparison
  for (let j = num; j < arr.length - num + 1; j++) {
    //starting the loop after our initial value.
    temp = temp - arr[j - num] + arr[j];
    //the sliding window. Instead of continuously adding all the numbers together we subtract the previous number now excluded from the window and add the following number now included in the window
    max = Math.max(max, temp);
    //reassigning max to be the larger of the two numbers (maxSum)
  }
  return max;
};
