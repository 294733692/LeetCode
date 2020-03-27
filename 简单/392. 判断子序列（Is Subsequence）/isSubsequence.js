/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
// 双指针
let isSubsequence = function (s, t) {
  let i = 0
  let j = 0
  let sLen = s.length
  let tLen = t.length
  while (i < sLen && j < tLen) {
    if (s[i] === t[j]) {
      i++
      j++
    } else {
      j++
    }
  }
  return i === sLen
};

// Api解法
let isSubsequence1 = function (s, t) {
  let start = 0
  for (let key of s) {
    let index = t.indexOf(key, start)
    if (index === -1) return false
    start = index + 1
  }
  return true
}
console.log(isSubsequence1('abc', 'ahbgdc'));
