var isPrefixOfWord = function (sentence, searchWord) {
  const words = sentence.split(" ");
  console.log(words);

  for (let i = 0; i < words.length; i++) {
    if (words[i].startsWith(searchWord)) {
      return i + 1;
    }
  }
  return -1;
};

console.log(isPrefixOfWord("Hello this is", "th"));
