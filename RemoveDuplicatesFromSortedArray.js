// Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once. The relative order of the elements should be kept the same.

// Since it is impossible to change the length of the array in some languages, you must instead have the result be placed in the first part of the array nums. More formally, if there are k elements after removing the duplicates, then the first k elements of nums should hold the final result. It does not matter what you leave beyond the first k elements.

// Return k after placing the final result in the first k slots of nums.

// Do not allocate extra space for another array. You must do this by modifying the input array in-place with O(1) extra memory.

const removeDuplicates = function (nums) {
  let i = 0;
  //run a for loop incrementing both i and j with a difference of 1 in order to check for eqality with the neighbor element
  for (let j = 1; j < nums.length; j++) {
    //if equality is false, increment i by one and set the value of nums[i] to nums[j]
    if (nums[j] !== nums[i]) {
      i++;
      nums[i] = nums[j];
    }
  }
  // return the total amount of steps needed in order to remove the duplicates + 1 due to the inital value of 0
  return i + 1;
};
