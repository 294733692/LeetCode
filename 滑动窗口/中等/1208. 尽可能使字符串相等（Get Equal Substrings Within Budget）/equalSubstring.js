/**
 * @param {string} s
 * @param {string} t
 * @param {number} maxCost
 * @return {number}
 */
let equalSubstring = function (s, t, maxCost) {
  let count = []
  let len = s.length
  for (let i = 0; i < len; i++) {
    let str = s[i].charCodeAt()
    let tStr = t[i].charCodeAt()
    count[i] = Math.abs(str - tStr)
  }
  console.log(count)
  let sum = 0, res = 0
  let left = 0, right = 0
  while (right < len) {
    sum += count[right] // 计算开销数
    while (sum > maxCost) {
      sum -= count[left]
      left++
    }
    res = Math.max(res, right - left + 1)
    right++
  }
  return res
}

equalSubstring('abcd', 'bcdf', 3)
equalSubstring('abcd', 'cdef', 3)
equalSubstring('abcd', 'acde', 0)
