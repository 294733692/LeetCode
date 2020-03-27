### 给定字符串 s 和 t ，判断 s 是否为 t 的子序列。

你可以认为 **s** 和 **t** 中仅包含英文小写字母。字符串 **t** 可能会很长（长度 ~= 500,000），而 **s** 是个短字符串（长度 <=100）。

字符串的一个子序列是原始字符串删除一些（也可以不删除）字符而不改变剩余字符相对位置形成的新字符串。（例如，"ace"是"abcde"的一个子序列，而"aec"不是）。

**示例 1:**

```
s = "abc", t = "ahbgdc"

返回 true
```

示例2：

```js
s = "axc", t = "ahbgdc"

返回 false
```

LeetCode题目地址：[392. 判断子序列](https://leetcode-cn.com/problems/is-subsequence/)

解法1：双子指针解法

```js
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
```

解法2：Api（indexOf）

```js
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
```

这个解法需要了解到`indexOf(searchValue, fromindex)`方法

- `searchValue`：检索字段
- `fromIndex`：从哪个位置进行检测，如果不传，默认为0