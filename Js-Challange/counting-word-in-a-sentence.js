function wordCount(speech) {
  let count = 0;

  let words = speech.split(" ");

  for (let i = 0; i < words.length; i++) {
    count++;
  }

  return count;
}

let sentence = "My Name is Rakib";
console.log(wordCount(sentence));

//time complexicity:O(n)
//space complexicity:O(n)
