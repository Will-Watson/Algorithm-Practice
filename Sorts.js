//sorting examples

//swaps

//ES5

function swap(arr, idx1, idx2) {
  let temp = arr[idx1];
  arr[idx1] = arr[idx2];
  arr[idx2] = temp;
}

//ES6

const ES6swap = (arr, idx1, idx2) => {
  [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
};

//bubble sort
/*

-start looping from the end of the array towards the begining with a vaiable, i. Backwards
-start an inner loop with a variable called j from the beginning until i - 1
-if arr[j] is greater than arr[j + 1], swap those two values
-return sorted array

*/

//naive solution

const bubbleSort = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] < arr[j + 1]) {
        //swap
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
};

//optimized solution

const _bubbleSort = (arr) => {
  let noSwaps;
  for (let i = arr.length; i > 0; i--) {
    noSwaps = true;
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        //swap
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        noSwaps = false;
      }
    }
    if (noSwaps) break;
  }
  return arr;
};

//noSwaps is checking to see if the arr is already sorted and stopping the code if it is in order to shorten run time, time complexity.

//selection sort

//selection sort, like bubble sort compares two values but first loops through to find the minimum value then switches that value to the front. Incrementing the starting point as we go, finding the smallest value and switching it to the front

//this algo is great for data thats almost sorted already
//super slow otherwise

/*

[5, 3, 4, 1, 2]
 ^        ^
[1, 3, 4, 5, 2]
    ^        ^
[1, 2, 4, 5, 3]

etc...

-store the first element as the smallest value you've seen so far.
-compare this item to the next item in the array until you find a smaller number
-if a smaller number is found, designate that smaller number to be the new "minimum" and continue until the end of the array.
-if the 'minimum' is not the value (index) you initially began with, swap the two values
-repeat this with the next element until the array is sorted.

*/

const selectionSort = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    let lowest = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[lowest]) {
        lowest = j;
      }
    }
    //swap
    if (i !== lowest) {
      let temp = arr[i];
      arr[i] = arr[lowest];
      arr[lowest] = temp;
    }
  }
  return arr;
};
