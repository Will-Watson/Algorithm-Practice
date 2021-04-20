//Given a sorted array of integers, write a function called search, that accepts a value and returns th eindex where the value passed to the function is located. If the value is not found, return -1 (indexOf)

/*

search([1, 2, 3, 4, 5, 6], 4) --> 3
search([1, 2, 3, 4, 5, 6], 11) --> -1

*/

//naive approach/linear search

const search = (arr, val) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === val) {
      return i;
    }
  }
  return -1;
};

//binary search/divide and conquer

const _search = (arr, val) => {
  let min = 0;
  let max = arr.length - 1;
  //start by initializing the first element of the array and last element of the array

  while (min <= max) {
    //as we loop we'll be decrementing in and max eventually causing this while statement to be true and thus returning a value (mid)
    let mid = Math.floor((min + max) / 2);
    //find the middle value of the array
    let curr = arr[mid];
    //assign the middle value to curr
    if (curr < val) {
      min = mid + 1;
      //if the curr (middle value) is less than the value we're looking for we reassign the minimum to the middle value + 1. This eliminates all values less than our middle value, thus really closing the gap in our search
    } else if (curr > val) {
      max = mid - 1;
      //same as above, only we'll reassign our max value
    } else {
      //through each iteration we trim the array so that eventually mid becomes the index we're searching for.
      return mid;
    }
  }
  //if the value can't be found we return negative one.
  return -1;
};
