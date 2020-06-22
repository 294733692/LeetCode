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
console.log(divide(dividend = -2147483648, divisor = -2));
