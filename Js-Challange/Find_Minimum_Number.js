function minimumNumber(arr) {
  if (arr.length === 0) {
    console.log("Your array Element is empty.");
    return;
  }

  let min = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === "number") {
      if (arr[i] < min) {
        min = arr[i];
      }
    } else {
      console.log("Your input Element is not a number.");
    }
  }
  return min;
}

const result = minimumNumber([222, , 222, 4, 5, 6, 7, 9, 9]);
console.log(result);
