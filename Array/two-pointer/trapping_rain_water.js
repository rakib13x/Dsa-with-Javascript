const trap = (height) => {
  let left = 0;
  let right = height.length - 1;

  let leftMax = height[left];
  let rightMax = height[right];
  let res = 0;

  if (height.length === 0) {
    return 0;
  }

  while (left < right) {
    if (leftMax < rightMax) {
      left++;
      leftMax = Math.max(leftMax, height[left]);
      res += leftMax - height[left];
    } else {
      right--;
      rightMax = Math.max(rightMax, height[right]);
      res += rightMax - height[right];
    }
  }
  return res;
};

const result = trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]);
console.log(result);
