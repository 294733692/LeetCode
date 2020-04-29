/**
 * @param {string} s
 * @return {boolean}
 */
// 数学法
let repeatedSubstringPattern = function (s) {
  return (s + s).slice(1, -1).includes(s)
};
// 正则
let repeatedSubstringPattern1 = function (s) {
  let reg = /^(\w+)\1+$/
  return reg.test(s)
}
// 周期串
let repeatedSubstringPattern2 = function (s) {
  let len = s.length;
  let i = 0
  while (i <= len / 2) {
    if (len % i === 0 && s.slice(0, i).repeat(len / i) === s) {
      return true
    }
    i++
  }
  return false
}
console.log(repeatedSubstringPattern('abab'));
console.log(repeatedSubstringPattern('aba'));
// console.log(repeatedSubstringPattern('abcabcabcabc'));
