const twoSum = (nums, target) => {
  let copyNums = nums.slice();
  let sortedNums = copyNums.sort((a, b) => a - b);

  let L = 0;
  let R = sortedNums.length - 1;

  while (L < R) {
    let sum = sortedNums[L] + sortedNums[R];
    if (sum > target) {
      R--;
    } else if (sum < target) {
      L++;
    } else {
      let indexL = nums.indexOf(sortedNums[L]);
      let indexR = nums.lastIndexOf(sortedNums[R]);
      return [indexL, indexR];
    }
  }
};

const result = twoSum([12, 3, 4, 5, 67], 79);
console.log(result);
