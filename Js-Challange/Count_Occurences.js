function CountOccurences(string, character) {
  let count = 0;
  for (let i = 0; i < string.length; i++) {
    console.log(string[i]);
    if (string[i] === character) {
      count++;
    }
  }
  return count;
}

const result = CountOccurences("heeello", "e");
console.log(result);
