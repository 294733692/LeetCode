给定一个整数，将其转化为7进制，并以字符串形式输出

**示例 1:**

```
输入: 100
输出: "202"
```

**示例 2:**

```
输入: -7
输出: "-10"
```

**注意:** 输入范围是 [-1e7, 1e7] 。

LeetCode题目地址：[504. 七进制数](https://leetcode-cn.com/problems/base-7/)



解法1：Api解法

首先来一个没有灵魂的解法，直接采用API进行处理

```js
/**
 * @param {number} num
 * @return {string}
 */
let convertToBase7 = function (num) {
  return num.toString(7)
};
```



解法2：除n倒取余

主要是根据10机制转n进制的方法。`除n倒取余`的思想，正负数只是符号不相同

```js
let convertToBaseSeven = function (num) {
  let flag = num >= 0
  let res = []
  num = num >= 0 ? num : -num
  while (num >= 7) {
    res.push(num % 7)
    num = parseInt(num / 7)
  }
  res.push(num)
  return flag ? res.reverse().join('') : '-' + res.reverse().join('')
}
```