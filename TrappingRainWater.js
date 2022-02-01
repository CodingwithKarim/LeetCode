// Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it can trap after raining.

//Example 1:
// Input: height = [0,1,0,2,1,0,1,3,2,1,2,1]
// Output: 6
// Explanation: The above elevation map (black section) is represented by array [0,1,0,2,1,0,1,3,2,1,2,1]. In this case, 6 units of rain water (blue section) are being trapped.

// Example 2:
// Input: height = [4,2,0,3,2,5]
// Output: 9

const trap = (height) => {
  let leftBorder = [];
  let rightBorder = [];
  let water = 0;
  leftBorder.push(height[0]);
  let lborder = height[0];
  for (let i = 1; i < height.length; i++) {
    if (lborder >= height[i]) {
      leftBorder.push(lborder);
    } else {
      lborder = height[i];
      leftBorder.push(lborder);
    }
  }
  rightBorder.push(height[height.length - 1]);
  let border = height[height.length - 1];
  for (let j = height.length - 2; j >= 0; j--) {
    if (border >= height[j]) {
      rightBorder.unshift(border);
    } else {
      rightBorder.unshift(height[j]);
      border = height[j];
    }
  }
  for (let k = 0; k < height.length; k++) {
    water += Math.min(rightBorder[k], leftBorder[k]) - height[k];
  }
  return water;
};
