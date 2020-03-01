### 给定一个整数，编写一个函数来判断它是否是 2 的幂次方。

**示例 1:**

```
输入: 1
输出: true
解释: 20 = 1
```

**示例 2:**

```
输入: 16
输出: true
解释: 24 = 16
```

**示例 3:**

```
输入: 218
输出: false
```

LeetCode题目地址：[231. 2的幂](https://leetcode-cn.com/problems/power-of-two/)

解法1：循环

思路：对该数一直循环，如果不余数不为0，那么说明不是2的倍数，继续除以2，继续循环

```
/**
 * @param {number} n
 * @return {boolean}
 */
let isPowerOfTwo = function (n) {
  if (n === 0) return false
  while (n % 2 === 0) {
    n /= 2
  }
  return n === 1
};
```

解法2：或运算

```js
let isPowerOfTwo1 = function (n) {
  return n > 0 && !(n & (n - 1))
}
```

大家可以看看大佬的解法说明：https://leetcode-cn.com/problems/power-of-two/solution/power-of-two-er-jin-zhi-ji-jian-by-jyd/
