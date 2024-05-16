const isPalindrome = (str) => {
  let cleanedStr = str.replace(/[^A-Za-z0-9]/g, "").toLowerCase();

  let left = 0;
  let right = cleanedStr.length - 1;

  while (left < right) {
    if (cleanedStr[left] !== cleanedStr[right]) {
      return false;
    } else {
      left++;
      right--;
    }
  }
  return true;
};

const validPalindrome = isPalindrome("madam");
console.log(validPalindrome);
