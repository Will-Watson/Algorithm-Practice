/*

Given a string s which consists of lowercase or uppercase letters, return the length of the longest palindrome that can be built with those letters.

Letters are case sensitive, for example, "Aa" is not considered a palindrome here.

Input: s = "abccccdd"
Output: 7
Explanation:
One longest palindrome that can be built is "dccaccd", whose length is 7.



first thing I want to do is add each letter to a frequency counter and increment them each time they appear. This is done because know that two of any character can create a palindrome on either side. So the pattern we're looking for is even numbers. If theres four of one letter we can safely add that to the result counter because we know they can be on opposite sides of the word. Then because we know that if there's a stray odd letter we can add one to the result because you can squeeze that in the middle of the like characters.

'fff ert fff' --> fffefff ---> 7

*/

const longestPalindrome = (s) => {
  const counter = {};
  //freqency counter
  let result = 0;
  //result to return
  for (let i = 0; i < s.length; i++) {
    let curr = s[i];
    if (counter[curr]) {
      counter[curr]++;
    } else {
      counter[curr] = 1;
    }
    //loop through string and add each character to the frequency counter incrementing the duplicate letters
    if (counter[curr] % 2 === 0) {
      result += 2;
    }
    //anytime a letter reaches two, add two to the result
  }
  if (result < s.length) {
    result += 1;
  }
  //odd letter handling.
  return result;
};
