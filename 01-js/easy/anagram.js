/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  let string1 = str1.toLowerCase().split('');
  let string2 = str2.toLowerCase().split('');
  if(str1.length !== str2.length) return false;

  const freqMap1 = {}
  const freqMap2 = {}
  
  for(let char of string1){
    freqMap1[char] = (freqMap1[char] || 0) + 1;
  }

  for(let char of string2){
    freqMap2[char] = (freqMap2[char] || 0) + 1;
  }

  for(let char in freqMap1){
    if(freqMap1[char] !== freqMap2[char]){
      return false;
    }
  }

  return true;
}

module.exports = isAnagram;
