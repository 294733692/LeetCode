/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
  let arr = s.trim().split(' ')
  let res = 0
  for (let i = s.length; i > 0; i--) {
    if (s.charAt(i) !== ' ') {
      res++
    } else {
      return res
    }
  }
  return res
};

var lengthOfLastWord1 = function(s) {
  let arr = s.trim().split(' ')
  return arr[arr.length - 1].length
};
