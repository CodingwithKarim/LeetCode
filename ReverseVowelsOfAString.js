// Given a string s, reverse only all the vowels in the string and return it.

// The vowels are 'a', 'e', 'i', 'o', and 'u', and they can appear in both cases.

// Example 1:

// Input: s = "hello"
// Output: "holle"
// Example 2:

// Input: s = "leetcode"
// Output: "leotcede"

const reverseVowels = function (s) {
  s = s.split("");
  let set = new Set(["a", "e", "i", "o", "u"]);
  let i = 0;
  let j = s.length - 1;
  while (i < j) {
    if (set.has(s[i].toLowerCase())) {
      while (!set.has(s[j].toLowerCase())) {
        j--;
      }
      [s[i], s[j]] = [s[j], s[i]];
      j--;
    }
    i++;
  }

  return s.join("");
};
