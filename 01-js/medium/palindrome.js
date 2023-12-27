/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

// function isPalindrome(str) {
//   let strArr = str.toLowerCase().replace(/[^a-z0-9]/g, "");
//   console.log(strArr);
//   let len = strArr.length;
//   for(let i = 0; i < len/2; i++){
//     if(strArr[i] !== strArr[len - 1 - i])
//     return false;
//   }
//   return true;
// }

function isPalindrome(str){
  const strArr = str.toLowerCase().replace(/[^a-z0-9]/g, "");
  return strArr.split('').every((char, i) => char === strArr[strArr.length - 1 - i]);
}
console.log(isPalindrome("Madam"));
module.exports = isPalindrome;