//given a sorted array and a value, implement a binary search to return the index of the value or return false.

const binarySearch = (arr, val) => {
  let start = 0;
  let end = arr.length - 1;
  let mid = Math.floor((start + end) / 2); // average, or, middle of the array.

  while (arr[mid] !== val && start <= end) {
    if (val < arr[mid]) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
    mid = Math.floor((start + end) / 2);
  }
  if (arr[mid] === val) {
    return mid;
  } else {
    return false;
  }
};

const refactoredBinarySearch = (arr, val) => {
  let start = 0;
  let end = arr.length - 1;
  let mid = Math.floor((start + end) / 2);

  while (arr[mid] !== val && start <= end) {
    if (val < arr[mid]) end = mid - 1;
    else start = mid + 1;
    mid = Math.floor((start + end) / 2);
  }
  return arr[mid] === val ? mid : false;
};
