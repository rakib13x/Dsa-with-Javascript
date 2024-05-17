const twoSum = (numbers, target) => {
  let L = 0;
  let R = numbers.length - 1;

  while (L < R) {
    let sum = numbers[L] + numbers[R];
    if (sum > target) {
      R--;
    } else if (sum < target) {
      L++;
    } else {
      return [L + 1, R + 1];
    }
  }
  return null;
};

const result = twoSum([1, 2, 3, 4, 5, 6, 7], 8);
console.log(result);
