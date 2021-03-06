// You are given two strings s and t.

// String t is generated by random shuffling string s and then add one more letter at a random position.

// Return the letter that was added to t.

// Example 1:

// Input: s = "abcd", t = "abcde"
// Output: "e"
// Explanation: 'e' is the letter that was added.
// Example 2:

// Input: s = "", t = "y"
// Output: "y"

const findTheDifference = function (s, t) {
  let map = new Map();
  for (let i = 0; i < s.length; i++) {
    if (!map.has(s[i])) {
      map.set(s[i], 1);
    } else {
      map.set(s[i], map.get(s[i]) + 1);
    }
  }
  for (let j = 0; j < t.length; j++) {
    if (map.has(t[j])) {
      map.set(t[j], map.get(t[j]) - 1);
    }
    if (!map.has(t[j]) || map.get(t[j]) < 0) {
      return t[j];
    }
  }
};
