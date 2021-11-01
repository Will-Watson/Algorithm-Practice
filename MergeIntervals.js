/*
Write a function that takes in a non-empty array of arbitrary intervals, merges any overlapping intervals, and returns the new intervals in no particular order.

Each interval interval is an array of two intergers, with interval[0] as the start of the interval and interval[1] as the end of the interval.

Note that the back-to-back intervals aren't considered to be overlapping. For example, [1, 5] and [6, 7] aren't overlaping' however, [1, 6] and [6, 7] are indeed overlapping.

Also note that the start of any particular interval will always be less than or equal to the end of that interval.

*/

function mergeOverlappingIntervals(array) {
  if (array.length === 1) return array;

  array = array.sort((a, b) => a[0] - b[0]);

  let result = [];
  let lastStart = array[0][0];
  let lastEnd = array[0][1];

  for (let i = 1; i < array.length; i++) {
    const curr = array[i];
    if (curr[0] <= lastEnd) {
      lastEnd = Math.max(curr[1], lastEnd);
    } else {
      result.push([lastStart, lastEnd]);
      lastStart = curr[0];
      lastEnd = curr[1];
    }
  }
  result.push([lastStart, lastEnd]);
  return result;
}
