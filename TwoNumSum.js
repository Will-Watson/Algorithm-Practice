//Given an array of numbers and a target number (a "sum"), determine if any 2 numbers in the array add up to the sum. Return true if any 2 different numbers within the array add up to sum. Return false if no 2 numbers in the array add up to sum.

//sort the array in ascending order.
//assign two points, one at the very start of the array, one at the very end.
//loop through array and compare whether or not the sum of the two points is equal to the target number.
//if the sum is greater than the target number decrement the end pointer.
//else increment the starting pointer.
//if no sum return false.

const twoNumSum = (arr, target) => {
  arr = arr.sort((a, b) => a - b);
  let i = 0;
  let j = arr.length - 1;
  while (i < j) {
    if (arr[i] + arr[j] === target) {
      return true;
    }
    if (arr[i] + arr[j] > target) {
      j--;
    } else {
      i++;
    }
  }
  return false;
};
