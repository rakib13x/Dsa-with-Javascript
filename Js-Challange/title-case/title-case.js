function titleCase(str) {
  const words = str.toLowerCase().split(" ");

  for (let i = 0; i < words.length; i++) {
    console.log(words[i]);
    words[i] = words[i][0].toUpperCase() + words[i].slice(1);
    console.log(words[i]);
  }

  return words.join(" ");
}

const result = titleCase("my Luck is very bad");
console.log(result);
