// Given an integer num, repeatedly add all its digits until the result has only one digit, and return it.

// Example 1:

// Input: num = 38
// Output: 2
// Explanation: The process is
// 38 --> 3 + 8 --> 11
// 11 --> 1 + 1 --> 2
// Since 2 has only one digit, return it.
// Example 2:

// Input: num = 0
// Output: 0

const addDigits = function (num) {
  let sum = 0;
  for (let i = 0; i < String(num).length; i++) {
    sum += +String(num)[i];
  }
  if (sum < 10) {
    return sum;
  }
  if (sum > 9) {
    return addDigits(sum);
  }
};
