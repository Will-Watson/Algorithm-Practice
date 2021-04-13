//Given a non-negative integer, write a function that returns its multiplicative persistence--the number of times you must multiply the digits in a number together until you reach a single digit product.

/*

persistence(39) // 3

3 * 9 = 27;
2 * 7 = 14;
1 * 4 = 4; < ---- three times

*/

//in order to split a number we will first have to change it to a string.
//is the given number is already a single digit we can mindfully return zero as its edge case.
//after splitting the number we can use the reduce method to multiply the numbers together
//this will take into account numbers with multiple digits. 2, 3, 4, and so on.
//recursively call the function while keeping track of the times its being called utilizing earlier mentioned edge case.

const persistence = (num) => {
  const stringNum = String(num);
  if (stringNum.length === 1) return 0;

  const newNum = stringNum.split('').reduce((acc, cur) => acc * cur);
  return 1 + persistence(newNum);
};

//without reduce

const _persistence = (num) => {
  const stringNum = String(num);
  if (stringNum.length === 1) return 0;

  let newNum = 1;

  for (let i = 0; i < stringNum.length; i++) {
    newNum *= stringNum[i];
  }
  return 1 + _persistence(newNum);
};
