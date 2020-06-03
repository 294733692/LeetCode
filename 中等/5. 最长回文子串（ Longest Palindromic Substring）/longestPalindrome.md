给定一个字符串 `s`，找到 `s` 中最长的回文子串。你可以假设 `s` 的最大长度为 1000。

**示例 1：**

```
输入: "babad"
输出: "bab"
注意: "aba" 也是一个有效答案。
```

**示例 2：**

```
输入: "cbbd"
输出: "bb"
```

leetCode题目地址：[5. 最长回文子串](https://leetcode-cn.com/problems/longest-palindromic-substring/)

题目要求字符串中的最长回文字符串，这里需要注意的是回文，回文分为两种情况

- 奇数回文：`abcba`，这里是`c`为回文中心
- 偶数回文：`abccba`，这里是`cc`为回文中心

了解到这两点，我们可以开始进行下面这一步



解法1：中心扩散法

​	基本思想就是，遍历字符串，以每个字符串为中心，向左右遍历，看左右值是否相等，并记录当前的最大那个回文长度。

这里需要注意的是，需要判断当前出现的回文的形式，是`奇数回文`还是`偶数回文`，并去两个当中的最大值。

并与下一个回文长度做比较，取最大的回文长度，最后从当前字符串开始的位子进行截取返回。

```js
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
    if (currMaxLen > maxLen) {
      maxLen = currMaxLen
      start = i - parseInt((maxLen - 1) / 2)
    }
  }

  return s.slice(start, start + maxLen)
}

```



解法2：动态规划

​	生成动态规划数组，`dp`，`dp[i][j]`为`true`，表示`s[i..j]`是否是回文字符串，

​	举一个例子：`abcba`

​	上面是一个回文字符串，那么删除开始和结束的`a`，那么剩下的字符也是一个回文字符串，这里我们就可对当前的状态方程进行转移：

`dp[i][j] = dp[i + 1][j - 1]`。

但是还是需要注意边界情况：`j - 1 - (i + 1) + 1 < 2`，整理得`j - 1 < 3   <==> j - i  + 1 < 4`，及当`s[i...j]`长度为2或者3的时候，不用检查子串是否为回文。

```js
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
```

