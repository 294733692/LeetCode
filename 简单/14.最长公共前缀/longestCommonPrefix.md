### 查找字符串数组中的最长公共前缀 如果不存在公共前缀，返回空字符串 `""`。

​	示例：

```js
输入: ["flower","flow","flight"]
输出: "fl"
```

```js
输入: ["dog","racecar","car"]
输出: ""
解释: 输入不存在公共前缀。
```

方法1：水平扫描法（LCP(S1…Sn)=LCP(LCP(LCP(S1,S2),S3),…Sn)）

- 处理特殊情况
- 依次遍历字符串[S1...Sn]，当遍历到第i个字符串的时候，找到最大的公共前缀LCP(S1...Si)，当LCP(S1...Si)是一个空字符串的时候，算法结束
- <img src="https://pic.leetcode-cn.com/b647cab7c3d2bd157cecae10917e0b9b671756b92c9cfcefec1a2bdae299c11c-file_1555694071243" alt="找到最长公共前缀" style="zoom:50%;" />

```js
let longestCommonPrefix = function (strs) {
  let result = strs[0]
  if (strs.length === 0) return ''

  for (let i = 0, len = strs.length; i < len; i++) {
    while (strs[i].indexOf(result) != 0) { // 判断str[i]是否出现在第0位，未出现则result减少一位数
      result = result.slice(0, result.length - 1)
      if (!result) return ''
    }
  }
  return result
};
```

方法2：水平扫描（从前向后扫描）

- 从前向后枚举字符串的每一列，先比较每个字符串的相同列上的字符串（即不同字符串相同下标的字符）
- 在进行对下一列的比较

```js
let longestCommonPrefix = function (strs) {
  if (strs.length === 0) return ''
  for (let i = 0, len = strs[0].length; i < len; i++) {
    let result = strs[0].charAt(i) // charAt() 方法可返回指定位置的字符。
    for (let j = 1; j < strs.length; j++) {
      // 如果i的长度等于strs[j]的长度
      // 如果strs[j]的i列和strs[0]的i列不相同，说明可以可以继续向i+1列进行对比
      if (i === strs[j].length || strs[j].charAt(i) != result) {
        return strs[0].slice(0, i)
      }
    }
  }
  return strs[0]
}
```

方法3：分治法

<img src="https://pic.leetcode-cn.com/8bb79902c99719a923d835b9265b2dea6f20fe7f067f313cddcf9dd2a8124c94-file_1555694229984" alt="寻找最长公共前缀的分治方法" style="zoom:50%;" />

如果有【'leetcode', 'leet', 'lee', 'le'】数组，我们将数组分成左右两部分`（0+3）/ 2`，即将分成LCPLeft['leetcode', 'leet']，和LCPRight['lee', 'le']两个数组，我们将LCPLeft、LCPRight数组的字符串求出最长公共前缀，然后将LCPLeft和LCPRight的最长公共前缀进行对比，求出前缀交集

```js
let longestCommonPrefix = function (strs) {
  // 处理特殊情况
  if (strs.length === 0 || strs === '' || strs === null) return ''

  function lcPrefix (strs, left, right) {
    // 如果左右长度相等，返回strs[left]
    if (left === right) {
      return strs[left]
    } else {
      // 找出中间数字
      let mid = parseInt((left + right) / 2)
      // left数组，递归lcPrefix
      let lcpLeft = lcPrefix(strs, left, mid)
      // right数组，递归lcPrefix
      let lcpRight = lcPrefix(strs, mid + 1, right)
      return comminPreFix(lcpLeft, lcpRight)
    }
  }
  // 比较left和right，求出最长公共前缀
  function comminPreFix (left, right) {
    // 求出left和right的最小长度  
    let min = Math.min(left.length, right.length)
    for (let i = 0; i < min; i++) {
      // 判断left的i列和right的i列是否相等，不限等，left数组长度减小，最长公共前缀越小
      if (left.charAt(i) != right.charAt(i)) {
        return left.slice(0, i)
      }
    }
    // 如果都相等，最小长度
    return left.slice(0, min)
  }

  return lcPrefix(strs, 0, strs.length - 1)
}
```

