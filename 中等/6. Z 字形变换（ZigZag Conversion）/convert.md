将一个给定字符串根据给定的行数，以从上往下、从左到右进行 Z 字形排列。

比如输入字符串为 `"LEETCODEISHIRING"` 行数为 3 时，排列如下：

```
L   C   I   R
E T O E S I I G
E   D   H   N
```

之后，你的输出需要从左往右逐行读取，产生出一个新的字符串，比如：`"LCIRETOESIIGEDHN"`。

请你实现这个将字符串进行指定行数变换的函数：

```
string convert(string s, int numRows);
```

**示例 1:**

```
输入: s = "LEETCODEISHIRING", numRows = 3
输出: "LCIRETOESIIGEDHN"
```

**示例 2:**

```
输入: s = "LEETCODEISHIRING", numRows = 4
输出: "LDREOEIIECIHNTSG"
解释:

L     D     R
E   O E   I I
E C   I H   N
T     S     G
```

LeetCode题目地址：[6. Z 字形变换](https://leetcode-cn.com/problems/zigzag-conversion/)

这道题和以前数学题差不多类似，基本上就是找规律，规律找出来了，那么这题基本上也就做出来了。

![img](https://pic.leetcode-cn.com/d610b140dd0789204efe699672dc72a83e7b826da0165bbf083d24fc97ecdea7-image.png)

解法1：按行排序

```js
/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
let convert = function (s, numRows) {
  if (s.length === 1) return s
  let len = Math.max(s.length, numRows) // 防止s的长度，小于生成数组的行数
  let row = new Array(len).fill('') // 生成数组
  let curRow = 0
  let down = false
  let str = ''

  for (let key of s) {
    row[curRow] += key
    if (curRow === 0 || curRow === numRows - 1) down = !down  // 当curRow = 0或者是为numRows的时候，箭头方向发生反转
    curRow += down ? 1 : -1
  }
  for (let key of row) str += key
  return str
};
convert('PAHNAPLSIIGYIR', 3)

```

解法2：按行访问

对于字符串下标 `i`，可计算 `x = i % n`，确定在循环周期中的位置。

- 当 `x < numRows` 时，`x` 对应行号。
- 当 `x >= numRows` 时，`n - x` 对应行号。

例如：numRows为6的时候

![image-20200605110319232](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20200605110319232.png)

```js
let convert1 = function (s, numRows) {
  if (numRows === 1) return s
  let arr = new Array(numRows).fill('') // 构建数组
  let n = numRows * 2 - 2 // 循环周期，2倍行数 - 首尾
  for (let i = 0; i < s.length; i++) {
    let x = i % n
    // x < numRows， x对应行好
    // x >= numRows，n - x对应行号
    let curRow = x < numRows ? x : n - x
    arr[curRow] += s[i]
  }
  return arr.join('')
}
```

