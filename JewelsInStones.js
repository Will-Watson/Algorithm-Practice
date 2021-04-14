/*

You're given strings jewels representing the types of stones that are jewels, and stones representing the stones you have. Each character in stones is a type of stone you have. You want to know how many of the stones you have are also jewels.

Letters are case sensitive, so "a" is considered a different type of stone from "A".

*/

//first I want to iterate through the stones string adding each item to the hashmap/frequency counter or increasing their count depending whether or not they exist already
//then I want to iterate through the jewels string checking if they exist in the frequency counter. If they do I want to add them to the result counter
//return the result counter.

const numJewelsInStones = function (jewels, stones) {
  const map = {};
  let result = 0;
  for (let i = 0; i < stones.length; i++) {
    let cur = stones[i];
    if (!map[cur]) {
      map[cur] = 1;
    } else {
      map[cur]++;
    }
  }
  for (let j = 0; j < jewels.length; j++) {
    let curJewel = jewels[j];
    if (map[curJewel]) result += map[curJewel];
  }
  return result;
};
