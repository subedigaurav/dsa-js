// function to return the longest word in a sentence stripping any punctuation marks.
function LongestWord(sen) {
  let words = sen.split(' ');
  let lLength = 0;
  // remove any punctuation marks
  for (let i = 0; i < words.length; i++) {
    words[i] = words[i].replace(/[.,\/#!@$%\^&\*;:{}=\-_`~()]/g, '');
    if (words[i].length > lLength) {
      lLength = words[i].length;
    }
  }

  for (let i = 0; i < words.length; i++) {
    if (words[i].length === lLength) return words[i];
  }
}

console.log(LongestWord('fun$%!! time'));
console.log(LongestWord('I love mamamia.'));
