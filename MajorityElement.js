// Given an array nums of size n, return the majority element.

// The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

// Example 1:

// Input: nums = [3,2,3]
// Output: 3
// Example 2:

// Input: nums = [2,2,1,1,1,2,2]
// Output: 2

var majorityElement = function (nums) {
  //initalize a map 
  let map = new Map();
  //loop through nums array and check to see if the map contains the nums[i] element
  for (let i = 0; i < nums.length; i++) {
    //if map doesn't include nums[i], set nums[i] within the map with a value of 1
    if (!map.has(nums[i])) {
      map.set(nums[i], 1);
    //if map includes nums[i], set nums[i] by getting nums[i] within the map and incrementing the value by one
    } else {
      map.set(nums[i], map.get(nums[i]) + 1);
    }
  }
  //use reduce to find the highest value within the initalized array, since the key represents the [0] index  and the [1] index represents the value, I can covert the map using object.entries() and reduce the array to find the max value and return the corresponding key containing the majority element. Since the key presents the [0] index, I return the [0] index or key containing the majority element instead of the [1] index containing the value
  return [...map.entries()].reduce((a, e) => (a[1] > e[1] ? a : e))[0];
};
