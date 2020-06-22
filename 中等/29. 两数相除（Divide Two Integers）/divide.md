给定两个整数，被除数 `dividend` 和除数 `divisor`。将两数相除，要求不使用乘法、除法和 mod 运算符。

返回被除数 `dividend` 除以除数 `divisor` 得到的商。

整数除法的结果应当截去（`truncate`）其小数部分，例如：`truncate(8.345) = 8` 以及 `truncate(-2.7335) = -2`

**示例 1:**

```
输入: dividend = 10, divisor = 3
输出: 3
解释: 10/3 = truncate(3.33333..) = truncate(3) = 3
```

**示例 2:**

```
输入: dividend = 7, divisor = -3
输出: -2
解释: 7/-3 = truncate(-2.33333..) = -2
```

**提示：**

- 被除数和除数均为 32 位有符号整数。
- 除数不为 0。
- 假设我们的环境只能存储 32 位有符号整数，其数值范围是 [−2^31, 2^31 − 1]。本题中，如果除法结果溢出，则返回 2^31 − 1。

leetCode题目地址：[29. 两数相除](https://leetcode-cn.com/problems/divide-two-integers/)

解法1： 常规计算

```js
/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
let divide = function (dividend, divisor) {
  // 是否是正数
  let sign = (dividend > 0 && divisor > 0) || (dividend < 0 && divisor < 0)
  // 被除数绝对值
  let a = Math.abs(dividend)
  // 商绝对值
  let b = Math.abs(divisor)
  let ans = ''
  let cur = ''
  let dividendStr = a.toString()
  // 使用被除数减去商，从高位到低位计算结果
  for (let i = 0; i < dividendStr.length; i++) {
    // 每个位数的值
    let count = 0
    cur += dividendStr[i]
    cur = +cur
    while (cur >= b) {
      cur -= b
      count++
    }
    ans += count
  }
  const INT_MAX = Math.pow(2, 31) - 1 // 2147483647
  const INT_MIN = Math.pow(-2, 31) // -2147483648
  ans = +ans
  // 判断结果是否超出边界
  if (sign) {
    return ans > INT_MAX ? INT_MAX : ans
  } else {
    return -ans < INT_MIN ? INT_MIN : -ans
  }
};
```

解法2：减法

这个题目解决的思想有些像二分法，可以叫翻倍法，被除数如果大于除数，那么可以一直减到小于，这样计数减的次数可以得到商，基本思想还是这样，只是为了减小复杂度，如果被除数大于除数，那么就把除数乘二，相应的计数也乘二，这里不能用乘法可以左移，然后一直到被除数小于翻倍后的除数，这样就可以算出这一次有多少个除数，减去之后再次重复这个过程即可，直到最后被除数小于未翻倍的除数说明计数结束。结果就是商。

```js
let divide1 = function (dividend, divisor) {
  let m = Math.abs(dividend), n = Math.abs(divisor), res = 0;
  if (m < n) return 0;
  while (m >= n) {
    let t = n, cnt = 1;
    while (m > (t << 1)) {
      t <<= 1;
      cnt <<= 1;
    }
    res += cnt;
    m -= t;
  }
  if ((dividend < 0) ^ (divisor < 0)) res = -res;
  return res > INT_MAX ? INT_MAX : res;
}
```

