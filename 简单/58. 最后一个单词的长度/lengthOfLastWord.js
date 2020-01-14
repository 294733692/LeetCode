/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
  let str = s.trim()
  let count = 0
  for (let i = str.length - 1; i >= 0; i--) {
    if (str.charAt(i) !== ' ') {
      count++
    } else {
      return count
    }
  }
  return count
};

var lengthOfLastWord1 = function(s) {
  let arr = s.trim().split(' ')
  return arr[arr.length - 1].length
};
// console.log(lengthOfLastWord("Hello World"));
console.log(lengthOfLastWord("a "));
