const uncompress = (s) => {
  const numbers = "0123456789";
  let result = "";
  let i = 0;
  let j = 0;

  while (j < s.length) {
    if (numbers.includes(s[j])) {
      j += 1;
    } else {
      const num = Number(s.slice(i, j));
      for (let count = 0; count < num; count += 1) {
        result += s[j];
      }
      j += 1;
      i = j;
    }
  }
  return result;
};

const result = uncompress("3r4f5a6h");
console.log(result);

//complexity:
/**----------------------------time complexity-----------------------------*/
// time complexity: O (nm)
/**---------------------------space complexity-----------------------------*/
// space complexity: O (nm)
