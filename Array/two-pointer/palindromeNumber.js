const isPalindromeNumber = (num) => {
  if (typeof num !== "number") {
    throw new Error("Input must be a number.");
  }

  let numStr = num.toString();
  console.log(numStr);

  let left = 0;
  let right = numStr.length - 1;

  while (left < right) {
    if (numStr[left] !== numStr[right]) {
      return false;
    }
    left++;
    right--;
  }
  return true;
};

console.log(isPalindromeNumber(12121));
console.log(isPalindromeNumber("madam"));
