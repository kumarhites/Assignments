/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
    // Your code here
    let sentenceArray = str.split("");
    let vowelCount = 0;
    for (let character of sentenceArray) {
        if (
            character === "a" ||
            character === "A" ||
            character === "e" ||
            character === "E" ||
            character === "i" ||
            character === "I" ||
            character === "o" ||
            character === "O" ||
            character === "u" ||
            character === "U"
        ) {
            vowelCount++;
        }
    }
    return vowelCount;
}

console.log(countVowels("the quick brown fox jumps over the lazy dog"));
module.exports = countVowels;
