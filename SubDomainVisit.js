/*

A website domain like "discuss.leetcode.com" consists of various subdomains. At the top level, we have "com", at the next level, we have "leetcode.com", and at the lowest level, "discuss.leetcode.com". When we visit a domain like "discuss.leetcode.com", we will also visit the parent domains "leetcode.com" and "com" implicitly.

Now, call a "count-paired domain" to be a count (representing the number of visits this domain received), followed by a space, followed by the address. An example of a count-paired domain might be "9001 discuss.leetcode.com".

We are given a list cpdomains of count-paired domains. We would like a list of count-paired domains, (in the same format as the input, and in any order), that explicitly counts the number of visits to each subdomain.

Example 1:
Input:
["9001 discuss.leetcode.com"]
Output:
["9001 discuss.leetcode.com", "9001 leetcode.com", "9001 com"]
Explanation:
We only have one website domain: "discuss.leetcode.com". As discussed above, the subdomain "leetcode.com" and "com" will also be visited. So they will all be visited 9001 times.



*/

const subdomainVisits = (cpdomains) => {
  const counter = {};
  const result = [];
  //create counter object and result array
  for (let i = 0; i < cpdomains.length; i++) {
    let domains = cpdomains[i];
    //isolate each elemnt of the cpdomains array
    let [times, domain] = domains.split(' ');
    //split the single domains into two assigned variables, times and domain
    let subs = domain.split('.');
    //split the domain into sub domains
    for (let j = 0; j < subs.length; j++) {
      const sub = subs.slice(j).join('.');
      //grab each sub domain, joined by a .
      if (counter[sub]) {
        counter[sub] += Number(times);
        //check if sub exists in counter obj, if so, add the times
      } else {
        // else add the sub and times to the counter obj
        counter[sub] = Number(times);
      }
    }
  }

  for (let sub in counter) {
    result.push(`${counter[sub]} ${sub}`);
  }
  //loop through now formed counter obj pushing the string value (space) key into the results array and return.
  return result;
};
