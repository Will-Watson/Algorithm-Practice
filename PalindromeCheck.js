//Given an string str, create a function that returns a boolean, corresponding to whether that string is a palindrome (spelled the same backwards and forwards). Our palindrome check should be case-insensitive.

/*

isPal('car') => false
isPal('racecar') => true
isPal('RaCecAr') => true
isPal('!? 100 ABCcba 001 ?!') => true

first I can think of two quick ways to do this. One being a while loop and the other recursion as they seem to go hand in hand.
as the base case for either approach I think im gonna focus on the length of the string itself (while string length) and through each iteration remove the first and last characters (maybe a slice) after they've been ruled out as being equal or false.
it would also make sense to mutate the imput string initially as case sensitivity doesn't seem to matter.

*/

//while loop

const isPalindrome = (str) => {
  str = str.toLowerCase();
  while (str.length > 1) {
    let first = str[0];
    let last = str[str.length - 1];
    if (first !== last) {
      return false;
    }
    str = str.slice(1, -1);
  }
  return true;
};
