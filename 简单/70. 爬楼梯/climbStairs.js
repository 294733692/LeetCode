/**
 * @param {number} n
 * @return {number}
 */
// 动态规划
let climbStairs = function (n) {
  let dp = []
  dp[1] = 1
  dp[2] = 2

  for (let i = 3; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2]
  }
  return dp[n]
};
// 公式求解
var climbStairs1 = function(n) {
  const sqrt = Math.sqrt(5);
  const fib_n = Math.pow((1 + sqrt) / 2, n + 1) - Math.pow((1 - sqrt) / 2,n + 1);
  return Math.round(fib_n / sqrt);
};

console.log(climbStairs1(4));
