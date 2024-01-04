function findMaxElement(arr) {
  if (arr.length === 0) {
    console.log("Your Array Element is empty.");
    return;
  }

  let max = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === "number") {
      if (arr[i] > max) {
        max = arr[i];
      }
    } else {
      console.log("Your input Element is not a number.");
    }
  }
  return max;
}

console.time("findMaxElement");
const result = findMaxElement([1, 3, 5, 6, 7, 89, 0, 6, 4, 3, 54, 5, 6]);
console.timeEnd("findMaxElement");

console.log(result);
//time complexicity: O(n)
//space complexicity: O(1)
