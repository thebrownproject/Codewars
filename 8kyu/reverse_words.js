// Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.

//Split the words
//reverse the words
//reverse the strings in each array word
//convert back to sting

function reverseWords(str) {
  let split = str.split(" ");
  //   .reverse()
  //   .join(" ")
  for (let i = 0; i < split.length; i++) {
    split[i] = split[i].split("").reverse().join("");
  }

  return split.join(" ");
}

console.log(reverseWords("The quick brown fox jumps over the lazy dog."));
