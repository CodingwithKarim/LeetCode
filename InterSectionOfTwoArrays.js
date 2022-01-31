// Given two integer arrays nums1 and nums2, return an array of their intersection. Each element in the result must be unique and you may return the result in any order.

// Example 1:

// Input: nums1 = [1,2,2,1], nums2 = [2,2]
// Output: [2]
// Example 2:

// Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
// Output: [9,4]
// Explanation: [4,9] is also accepted.

const intersection = function (nums1, nums2) {
  let result = new Set();
  let min = nums1.length > nums2.length ? nums2 : nums1;
  let max = nums1.length > nums2.length ? nums1 : nums2;
  let set = new Set(min);
  for (let i = 0; i < max.length; i++) {
    if (set.has(max[i])) {
      result.add(max[i]);
    }
  }
  return Array.from(result);
};
