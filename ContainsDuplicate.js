// Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

// Example 1:

// Input: nums = [1,2,3,1]
// Output: true
// Example 2:

// Input: nums = [1,2,3,4]
// Output: false
// Example 3:

// Input: nums = [1,1,1,3,3,4,3,2,4,2]
// Output: true

const containsDuplicate = function(nums) {
    //loop through nums aray
    for(let i = 0; i < nums.length; i++){
        //declaring a variable containing a boolean value which checks if the element is a duplicate
        let check = nums.lastIndexOf(nums[i]) === nums.indexOf(nums[i])
        //if one of the elements is a duplicate, return true
        if(!check){
            return true
        }
    }
    //if all elements are duplicates, return false at the end of the for loop
     return false
 }