/*Move Pieces to Obtain a String

You are given two strings start and target, both of length n. Each string consists only of the characters 'L', 'R', and '_' where:

The characters 'L' and 'R' represent pieces, where a piece 'L' can move to the left only if there is a blank space directly to its left, and a piece 'R' can move to the right only if there is a blank space directly to its right.
The character '_' represents a blank space that can be occupied by any of the 'L' or 'R' pieces.
Return true if it is possible to obtain the string target by moving the pieces of the string start any number of times. Otherwise, return false.

 

Example 1:

Input: start = "_L__R__R_", target = "L______RR"
Output: true
Explanation: We can obtain the string target from start by doing the following moves:
- Move the first piece one step to the left, start becomes equal to "L___R__R_".
- Move the last piece one step to the right, start becomes equal to "L___R___R".
- Move the second piece three steps to the right, start becomes equal to "L______RR".
Since it is possible to get the string target from start, we return true.
Example 2:

Input: start = "R_L_", target = "__LR"
Output: false
Explanation: The 'R' piece in the string start can move one step to the right to obtain "_RL_".
After that, no pieces can move anymore, so it is impossible to obtain the string target from start.
Example 3:

Input: start = "_R", target = "R_"
Output: false
Explanation: The piece in the string start can move only to the right, so it is impossible to obtain the string target from start.
 

Constraints:

n == start.length == target.length
1 <= n <= 105
start and target consist of the characters 'L', 'R', and '_'. */

function canTransform(start, target) {
  // Check if both strings have the same number of 'L' and 'R'.
  if (start.replace(/_/g, "") !== target.replace(/_/g, "")) {
    return false;
  }

  let n = start.length;
  let i = 0,
    j = 0;

  while (i < n && j < n) {
    // Skip blanks in both strings.
    while (i < n && start[i] === "_") i++;
    while (j < n && target[j] === "_") j++;

    // If one string has reached the end but the other hasn't, it's not possible to transform.
    if (i < n && j < n) {
      // Check if the characters are different.
      if (start[i] !== target[j]) return false;

      // 'L' can only move left, so i should be greater or equal to j.
      if (start[i] === "L" && i < j) return false;

      // 'R' can only move right, so i should be less or equal to j.
      if (start[i] === "R" && i > j) return false;

      i++;
      j++;
    }
  }

  return true;
}

// Test cases
console.log(canTransform("_L__R__R_", "L______RR")); // true
console.log(canTransform("R_L_", "__LR")); // false
console.log(canTransform("_R", "R_")); // false
