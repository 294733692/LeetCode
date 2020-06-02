/**
 * @param {string} s
 * @return {string}
 */
let longestPalindrome = function (s) {
  // 暴力法
  let len = s.length
  if (len < 2) return s

  let maxLen = 1
  let start = 0

  let validPalindromic = (str, left, right) => {
    while (left < right) {
      if (str[left] !== str[right]) {
        return false
      }
      left++
      right--
    }
    return true
  }

  for (let i = 0; i < len - 1; i++) {
    for (let j = i + 1; j < len; j++) {
      if (j - i + 1 > maxLen && validPalindromic(s, i, j)) {
        maxLen = j - i + 1
        start = i
      }
    }
  }

  return s.slice(start, start + maxLen)
};

// 中心扩散法
let longestPalindrome1 = (s) => {
  let len = s.length
  if (len < 2) return s

  let maxLen = 1
  let start = 0

  let expandAroundCenter = (s, left, right) => {
    let len = s.length
    // 当left = right的时候，回文中心就是一个字符，回文串的长度为奇数
    // 当right = left + 1的时候，回文中心就是两个字符，回文串的长度为偶数
    while (left >= 0 && right < len) {
      if (s[left] === s[right]) {
        left--
        right++
      } else {
        break
      }
    }
    return right - left - 1
  }

  for (let i = 0; i < len - 1; i++) {
    let oddLen = expandAroundCenter(s, i, i)
    let evenLen = expandAroundCenter(s, i, i + 1)

    let currMaxLen = Math.max(oddLen, evenLen)
    console.log(currMaxLen);
    if (currMaxLen > maxLen) {
      maxLen = currMaxLen
      start = i - parseInt((maxLen - 1) / 2)
    }
  }

  return s.slice(start, start + maxLen)
}

console.log(longestPalindrome1("cbbd"));
