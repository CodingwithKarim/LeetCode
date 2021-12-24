// Write a function that takes an unsigned integer and returns the number of '1' bits it has (also known as the Hamming weight).

// Note:

// Note that in some languages, such as Java, there is no unsigned integer type. In this case, the input will be given as a signed integer type. It should not affect your implementation, as the integer's internal binary representation is the same, whether it is signed or unsigned.
// In Java, the compiler represents the signed integers using 2's complement notation. Therefore, in Example 3, the input represents the signed integer. -3.

// Example 1:

// Input: n = 00000000000000000000000000001011
// Output: 3
// Explanation: The input binary string 00000000000000000000000000001011 has a total of three '1' bits.

const hammingWeight = function (n) {
//convert the unsigned num to a binary string which is split into an array and converted back to the type 'number'
  let arr = n.toString(2).split("").map(Number);
  //initalize a counter variable
  let counter = 0;
  //run a for loop and incrment counter if any of the elements are "equal"/showing equality, increment the counter by 1
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 1) {
      counter++;
    }
  }
  //return the counter containing the number of "1"'s in the initalized array
  return counter;
};
