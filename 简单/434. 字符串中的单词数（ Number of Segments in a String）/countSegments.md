### 统计字符串中的单词个数，这里的单词指的是连续的不是空格的字符

请注意，你可以假定字符串里不包括任何不可打印的字符。

**示例:**

```
输入: "Hello, my name is John"
输出: 5
```

LeetCode题目地址：[434. 字符串中的单词数](https://leetcode-cn.com/problems/number-of-segments-in-a-string/)

解法1：api解法

```js
let countSegments1 = function (s) {
  return s.split(' ').filter(Boolean).length
}
```

利用字符串对空格进行拆分，利用`filter`函数，去除为空的数组，然后返回长度即可



解法2：原地算法

```js
/**
 * @param {string} s
 * @return {number}
 */
let countSegments = function (s) {
  let count = 0

  if (s === '') return 0

  for (let i = 0; i < s.length; i++) {
    if ((i === 0 || s[i - 1] === ' ') && s[i] !== ' ') count++
  }
  return count
};
```

这个算法最主要的就是需要判断当前字符串，是否前一位是空格，



解法3：

```js
let countSegments2 = function (s) {
  let count = 0
  s = s.split(' ')
  for (let key in s) {
    if (s[key]) {
      count++
    }
  }
  return count
}
```

解法和解法2基本类似，这次采用的判断方式不同，拆分后的数组为为空的话，count就不进行自增