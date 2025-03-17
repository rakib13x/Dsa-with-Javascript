/**
 * Binary Search (BS) → Works on a sorted array
    1. It’s just a searching algorithm.
    2. You don’t insert or delete elements—you only search.
    3. It divides the array in half each time to find the target.
    4. Time Complexity: O(log n)
 * 
 * 
 * 
 */

/**
 * ---------------------How this works-------------------------------
*   1️⃣ Start with left (0) and right (last index).
    2️⃣ Find mid (middle index).
    3️⃣ If arr[mid] is the target, return it.
    4️⃣ If arr[mid] is too small, move left up.
    5️⃣ If arr[mid] is too big, move right down.
    6️⃣ Keep repeating until found or return -1.
 *
 *
 */

function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (arr[mid] === target) {
      return mid;
    } else if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return -1;
}


let myArray = [-1, 0, 2, 4, 6, 8];
console.log(binarySearch(myArray, 4));

/**

Example Walkthrough
Let’s run this for:

let myArray = [-1, 0, 2, 4, 6, 8];
console.log(binarySearch(myArray, 4));
🔹 Our array is [-1, 0, 2, 4, 6, 8]
🔹 Our target is 4

1️⃣ First iteration:

left = 0, right = 5
mid = Math.floor((0 + 5) / 2) = Math.floor(2.5) = 2
arr[mid] = arr[2] = 2
2 is less than 4, so move left = mid + 1 = 3



2️⃣ Second iteration:

left = 3, right = 5
mid = Math.floor((3 + 5) / 2) = Math.floor(4) = 4
arr[mid] = arr[4] = 6
6 is greater than 4, so move right = mid - 1 = 3


3️⃣ Third iteration:

left = 3, right = 3
mid = Math.floor((3 + 3) / 2) = 3
arr[mid] = arr[3] = 4
Found it! 🎯 Return 3 (index of 4).


*/
