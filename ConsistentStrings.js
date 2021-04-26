//You are given a string allowed consisting of distinct characters and an array of strings words. A string is consistent if all characters in the string appear in the string allowed.
// Return the number of consistent strings in the array words.

/*

Input: allowed = "ab", words = ["ad","bd","aaab","baa","badab"]
Output: 2
Explanation: Strings "aaab" and "baa" are consistent since they only contain characters 'a' and 'b'.

*/

const countConsistentStrings = (allowed, words) => {
  const allowedSet = new Set(allowed);

  //create new set to store characters

  return words.reduce((count, word) => {
    //reduce function on the words array with count as the accumulator and word as the current
    for (let char of word) {
      //loop through each character of the word element
      if (!allowedSet.has(char)) {
        //check to see if the word doesnt posses one of the characters in the set
        count--;
        //subtract from the count
        break;
        //break from looping through that word so as to not consistently keep subtracting
        //we only want to know if the word doesn't have a character once
      }
    }
    return count;
    //return count
  }, words.length);
  //start the accumulator with words.length, or, count = words.length
  //as we know that the max value returned can only be the length of the words array.
  //this is why we deduct from the accumulator upon discovery of a string that possesses a different character than that provided in the allowed string.
};
