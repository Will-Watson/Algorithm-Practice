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

//insertion sort

//insertion sort builds up the first half of the array by inserting the following element into the right place

/*

[4, 2, 3, 1, 5]
 ^  ^
[2, 4, 3, 1, 5]
   ^   ^
[2, 3, 4, 1, 5]
^         ^
[1, 2, 3, 4, 5]


-start by picking the second element in the array
-now compare the second element with the one before it and swap if necessary
-continue to the enxt element and if it is in the incorrect order, iterate through the sorted portion (i.e. the left side) to place the element in the correct place.
-repeat until the array is sorted.

*/

const insertionSort = (arr) => {
  for (let i = 1; i < arr.length; i++) {
    let currVal = arr[i];
    for (var j = i - 1; j >= 0 && arr[j] > currVal; j--) {
      arr[j + 1] = arr[j];
    }
    //needed var here for scoping reasons
    arr[j + 1] = currVal;
  }
  return arr;
};

// ------------------INTERMEDIATE SORTS----------------------------

//Merge Sort
//combo of merging and sorting
//chops up long arrays into smaller sub arrays (divide and conquer)

/*

             [8, 3, 5, 4, 7, 6, 1, 2]
      [8, 3, 5, 4]           [7, 6, 1, 2]
    [8, 3]    [5, 4]        [7, 6]   [1, 2]
[8]   [3]     [5]    [4]   [7]   [6]    [1]  [2]

*/

//function to merge two sorted arrays

const merge = (arr1, arr2) => {
  const results = [];
  let i = 0;
  let j = 0;

  while (i < arr1.length && j < arr2.length) {
    if (arr2[j] > arr1[i]) {
      results.push(arr1[i]);
      i++;
    } else {
      results.push(arr2[j]);
      j++;
    }
  }

  //whatever is left over, because its sorted is pushed into the results array

  while (i < arr1.length) {
    results.push(arr1[i]);
    i++;
  }

  while (j < arr2.length) {
    results.push(arr2[j]);
    j++;
  }

  return results;
};

const mergeSort = (arr) => {
  //base case, means all the arrays have been split all the way down
  if (arr.length <= 1) {
    return arr;
  }

  let mid = Math.floor(arr.length / 2);
  let left = mergeSort(arr.slice(0, mid));
  let right = mergeSort(arr.slice(mid));
  return merge(left, right);
};
