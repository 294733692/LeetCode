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

// 动态规划
let longestPalindrome2 = (s) => {
  let len = s.length
  if (len < 2) return s

  let maxLen = 1
  let start = 0

  // 生成动态规划数组，表示s[i...j]是否是回文串
  let dp = new Array(len)
  for (let i = 0; i < len; i++) {
    dp[i] = new Array(len)
  }
  dp.forEach(item => item.fill(true))

  // 注意：先填左下角
  // 填表规则：先一列一列的填写，再一行一行的填，保证左下方的单元格先进行计算
  for (let j = 1; j < len; j++) {
    for (let i = 0; i < j; i++) {
      // 头尾字符不相等，不是回文串
      if (s[i] !== s[j]) {
        dp[i][j] = false
      } else {
        // 相等的情况下
        // 考虑头尾去掉以后没有字符剩余，或者剩下一个字符的时候，肯定是回文串
        if (j - i < 3) {
          dp[i][j] = true
        } else {
          // 状态转移
          dp[i][j] = dp[i + 1][j - 1]
        }
      }

      // 只要dp[i][j]为true，就表示s[i..j]是回文，更新记录回文长度和起始位置
      if (dp[i][j] && j - i + 1 > maxLen) {
        maxLen = j - i + 1
        start = i
      }
    }
  }
  return s.slice(start, start + maxLen)
}
console.log(longestPalindrome2("cbbd"));
