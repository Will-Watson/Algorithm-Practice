//given two arrays, determine whether or not the second array is the same as the first array squared.
//[1, 2, 3], [1, 4, 9] // true
//[1, 2, 3], [9, 1, 4] // true
//[1, 2, 3, 4], [1, 2, 9, 16, 25] //false

//first I want to check to see that the lengths of the array are the same, because if they are not we can safely assume that array two will not reflect the squares of the numbers in array one
//then I want to put both arrays in their own frequency counter which will keep track of how many numbers/duplicate numbers I have
//we then want to check that all the keys in frequency counter one exist in frequency counter two
//if not we want to return false
//we then want to check if there are duplicates and if we have the squares to match the duplicates
//if we dont return false
//if everything passes return true

const same = (arr1, arr2) => {
  if (arr1.length !== arr2.length) {
    return false;
  }
  let freqCounter1 = {};
  let freqCounter2 = {};

  for (let val of arr1) {
    freqCounter1[val] = (freqCounter1[val] || 0) + 1;
  }
  for (let val of arr2) {
    freqCounter2[val] = (freqCounter2[val] || 0) + 1;
  }
  for (let key in freqCounter1) {
    if (!(key ** 2 in freqCounter2)) {
      return false;
    }
    if (freqCounter2[key ** 2] !== freqCounter1[key]) {
      return false;
    }
  }
  return true;
};
