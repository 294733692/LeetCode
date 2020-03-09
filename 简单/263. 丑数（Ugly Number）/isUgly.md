### 编写一个程序判断给定的数是否为丑数。

丑数就是只包含质因数 `2, 3, 5` 的**正整数**

**示例 1:**

```
输入: 6
输出: true
解释: 6 = 2 × 3
```

**示例 2:**

```
输入: 8
输出: true
解释: 8 = 2 × 2 × 2
```

**示例 3:**

```
输入: 14
输出: false 
解释: 14 不是丑数，因为它包含了另外一个质因数 7。
```

**说明：**

1. `1` 是丑数。
2. 输入不会超过 32 位有符号整数的范围: [−231, 231 − 1]。

#### LeetCode题目地址：[263. 丑数](https://leetcode-cn.com/problems/ugly-number/)

解法1：

```js
/**
 * @param {number} num
 * @return {boolean}
 */
let isUgly = function(num) {
  if (num <= 0) return false
  while (num % 2 === 0) num /= 2
  while (num % 3 === 0) num /= 3
  while (num % 5 === 0) num /= 5
  return num === 1
};
```

其实解法挺简单的，只要不断对`num`除以`2`、`3`、`5`，就可以以。只要最后的结果为1，那么说明`num`必然为丑数，但是需要注意的是`1`也是丑数