/**
 * @param {string} s
 * @return {number}
 */
var titleToNumber = function(s) {
  let res = 0
  for (let i = 0; i < s.length; i++) {
    let num = s[i].charCodeAt() - 64
    res = res * 26 + num
  }
  return res
};

console.log(titleToNumber('ZY'))
