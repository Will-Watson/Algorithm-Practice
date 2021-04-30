//given a longer string (long) and a shorter string (short), determine how many times the shorter string occurs inside the longer string

//naive solution using a nested loop

const stringSearch = (long, short) => {
  let count = 0;
  //intialize counter
  for (let i = 0; i < long.length; i++) {
    //loop through long string
    for (let j = 0; j < short.length; j++) {
      //loop through short string
      if (short[j] !== long[i + j]) {
        break;
        //check to see if the following character in the long string is equal to the following character in the short string.. if not, break out of the loop and move on.
      }
      if (j === short.length - 1) {
        //if the index of j ever reaches the end, or, the short strings length, we know that its found a match because it hasn't broken out of the loop. So we increment the counter
        count++;
      }
    }
  }
  //finally return count
  return count;
};
