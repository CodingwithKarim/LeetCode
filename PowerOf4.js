// Given an integer n, return true if it is a power of four. Otherwise, return false.

// An integer n is a power of four, if there exists an integer x such that n == 4x.

// Example 1:

// Input: n = 16
// Output: true
// Example 2:

// Input: n = 5
// Output: false

const isPowerOfFour = function (n) {
  let sum = 0;
  let init = 0;
  while (n >= sum) {
    sum = Math.pow(4, init);
    if (sum === n) {
      return true;
    }
    init++;
  }
  return false;
};
