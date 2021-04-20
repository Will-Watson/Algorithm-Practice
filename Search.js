//Given a sorted array of integers, write a function called search, that accepts a value and returns th eindex where the value passed to the function is located. If the value is not found, return -1 (indexOf)

/*

search([1, 2, 3, 4, 5, 6], 4) --> 3
search([1, 2, 3, 4, 5, 6], 11) --> -1

*/

//naive approach

const search = (arr, val) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === val) {
      return i;
    }
  }
  return -1;
};
