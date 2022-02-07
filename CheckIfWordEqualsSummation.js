// The letter value of a letter is its position in the alphabet starting from 0 (i.e. 'a' -> 0, 'b' -> 1, 'c' -> 2, etc.).

// The numerical value of some string of lowercase English letters s is the concatenation of the letter values of each letter in s, which is then converted into an integer.

// For example, if s = "acb", we concatenate each letter's letter value, resulting in "021". After converting it, we get 21.
// You are given three strings firstWord, secondWord, and targetWord, each consisting of lowercase English letters 'a' through 'j' inclusive.

// Return true if the summation of the numerical values of firstWord and secondWord equals the numerical value of targetWord, or false otherwise.

// Example 1:

// Input: firstWord = "acb", secondWord = "cba", targetWord = "cdb"
// Output: true
// Explanation:
// The numerical value of firstWord is "acb" -> "021" -> 21.
// The numerical value of secondWord is "cba" -> "210" -> 210.
// The numerical value of targetWord is "cdb" -> "231" -> 231.
// We return true because 21 + 210 == 231.

const isSumEqual = function (firstWord, secondWord, targetWord) {
  let map = {};
  let firstSum = "";
  let secondSum = "";
  let targetSum = "";
  let i = 0;
  while (26 > i) {
    map[String.fromCharCode(i + 65).toLowerCase()] = i;
    i++;
  }
  let j = 0;
  while (firstWord[j] || secondWord[j]) {
    if (firstWord[j] && secondWord[j]) {
      firstSum += map[firstWord[j]];
      secondSum += map[secondWord[j]];
      j++;
      continue;
    }
    if (!firstWord[j]) {
      secondSum += map[secondWord[j]];
      j++;
      continue;
    }
    if (!secondSum[j]) {
      firstSum += map[firstWord[j]];
      j++;
      continue;
    }
  }
  let x = 0;
  while (targetWord[x]) {
    targetSum += map[targetWord[x]];
    x++;
  }

  return +firstSum + +secondSum === +targetSum;
};
