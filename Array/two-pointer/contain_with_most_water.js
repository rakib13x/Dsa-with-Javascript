const areaContainMostWater = (height) => {
  let left = 0;
  let right = height.length - 1;
  let maxArea = 0;

  while (left < right) {
    let area = Math.min(height[left], height[right]) * (right - left);
    maxArea = Math.max(area, maxArea);

    if (height[left] < height[right]) {
      left++;
    } else {
      right--;
    }
  }
  return maxArea;
};

const result = areaContainMostWater([1, 8, 6, 2, 5, 4, 8, 3, 7]);
console.log(result);
