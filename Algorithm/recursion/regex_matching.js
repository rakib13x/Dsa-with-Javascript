function isMatch(s, p) {
  const memo = {};

  function match(i, j) {
    const key = `${i},${j}`;
    if (key in memo) {
      console.log(memo[key]);
      return memo[key];
    }

    // If we've reached the end of the pattern,
    // then we must also be at the end of s for a valid match.
    if (j === p.length) {
      return i === s.length;
    }

    // Check if the current characters match (or if p[j] is '.')
    const firstMatch = i < s.length && (s[i] === p[j] || p[j] === ".");

    // If the next character in p is '*', handle zero-or-more repeats
    if (j + 1 < p.length && p[j + 1] === "*") {
      // 1) Skip the "x*" segment in the pattern
      //    (i.e., move pattern pointer by 2)
      // 2) If first characters match, consume one character of s
      //    while staying on the same pattern segment.
      memo[key] = match(i, j + 2) || (firstMatch && match(i + 1, j));
    } else {
      // Otherwise, we just move forward one character in both,
      // but only if they match
      memo[key] = firstMatch && match(i + 1, j + 1);
    }

    return memo[key];
  }

  return match(0, 0);
}

// Some quick tests:
console.log(isMatch("aa", "a")); // false
console.log(isMatch("aa", "a*")); // true
console.log(isMatch("ab", ".*")); // true
