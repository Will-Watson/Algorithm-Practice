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

//Quick Sort
//similar to merge sort
//works by selecting a single element or "pivot" point
//the idea is to move numbers lower that the pivot to the left and numbers larger than the pivot to the right... not sorted just yet

/*

         [5, 2, 1, 8, 4, 7, 6, 3]
          ^ five is the pivot
                 5
    3, 2, 1, 4     7, 6, 8
    ^ three is pivot
          3
      1,2   4

      etc....

*/

//note: alot of swapping... it seems
//like with merge sort, this quick sort gets a helper function.. pivot helper or.. partition helper

//best choice for a pivot is the median or the middle value.. this will highly effect speed
//pivot takes three arguments. startIdx, endIdx, array

const pivot = (arr, start = 0, end = arr.length + 1) => {
  //swap function
  const swap = (array, i, j) => {
    let temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  };
  //partiion or pivot
  let partition = arr[start];
  //swapIdx initialized at the start point
  let swapIdx = start;

  for (let i = start + 1; i < arr.length; i++) {
    //loop starting point plus 1 because theres no point in comparing the number to itself
    if (partition > arr[i]) {
      //partition in this case starting at index 0
      //if array value is less than partition
      swapIdx++;
      //increase the swapIdx
      swap(arr, swapIdx, i);
      //then swap the value currently at i (less than partition) and the new swap idx
      //effectivlely putting the lesser values to the left of the partition
    }
  }
  swap(arr, start, swapIdx);
  //once the loop has run its course its time to move the partition to the middle
  //swaping the start or partition in this case with the new swapIdx
  return swapIdx;
};

const quickSort = (arr, left = 0, right = arr.length - 1) => {
  if (left < right) {
    let pivotIdx = pivot(arr, left, right);
    //left
    quickSort(arr, left, pivotIdx - 1);
    //right
    quickSort(arr, pivotIdx + 1, right);
  }
  return arr;
};

/*

-----------------COMPARISON SORT BREAKDOWN----------------

Average Time Complexities

Bubble Sort - O(n^2)
Insertion Sort - O(n^2)
Selection Sort - O(n^2)

Quick Sort - O(n log(n))
Merge Sort - O(n log(n))


*/

//Radix Sort
//sorting algorithm without making comparisons that works on numbers
//exploits the fact that a number is larger if it has more digits
//starts by looking at the first digit of each number (ones)
//sorts the numbers into 'buckets' based on this
//then numbers are sorted by the next number to the left (tens)
//and so on...

//radix sort get digit helper function

const getDigit = (num, i) => {
  return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
};

/*

getDigit(7323, 2) ---> expecting three as its in the hundreds place or 2nd index from the right (0, 1, 2)

7323 / 100 = 73.23
Math.floor(73.23) = 73
73 % 10 = 3
3 = our answer.. the digit in the hundreds place

*/

//second helper needs to find the largest amount of digits a single number has so that we know how many times the function has to run

const digitCount = (num) => {
  if (num === 0) {
    return 1;
  }
  return Math.floor(Math.log10(Math.abs(num))) + 1;
};

/*

log10 ---> ten to what power??

digitCount(423)

Math.log10(423) = 2.626
Math.floor(2.626) = 2
2 + 1 = 3
3 is the answer...

*/

//mostDigits helper.. runs digit count on each number and returns the amount

const mostDigits = (nums) => {
  let max = 0;
  for (let i = 0; i < nums.length; i++) {
    max = Math.max(max, digitCount(nums[i]));
  }
  return max;
};

//actual Radix sort

const radixSort = (nums) => {
  let maxDigitCount = mostDigits(nums);
  //get the max digit count
  //also to know how many times we have to loop initially
  for (let k = 0; k < maxDigitCount; k++) {
    //start a loop based on the max digit count
    let digitBuckets = Array.from({ length: 10 }, () => []);
    //create the 'buckets'. In this case an array of ten empty arrays (0 through 9)
    for (let i = 0; i < nums.length; i++) {
      //loop through the numbers
      let digit = getDigit(nums[i], k);
      //as k increases with each loop so does the place of the number we're trying to grab
      //digit grabs that number
      digitBuckets[digit].push(nums[i]);
      //push each number into their respective buckets
    }
    nums = [].concat(...digitBuckets);
    //nums is now reassigned to the concatentation of all the digitbuckets arguments
    //the spread operator is used to combine all the arguments without it we would have an array of sub arrays returned as nums
  }
  return nums;
};
