/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  // 枚举出罗马数字对应的数字
  let obj = {
    'I': 1,
    'V': 5,
    'X': 10,
    'L': 50,
    'C': 100,
    'D': 500,
    'M': 1000,
  }
  // 处理特殊情况
  if (s.length === 0) return 0
  if (s.length === 1) return obj[s]

  let result = 0
  for (let i = 0, len = s.length; i < len; i++) {
    let left = s[i]
    let right = s[i + 1]
    if (obj[left] < obj[right]) {
      result += obj[right] - obj[left]
      i++
    } else {
      result += obj[left]
    }
  }
  return result
};

export default romanToInt
