/**
 * @param {number[]} prices
 * @return {number}
 */
// 暴力法,当前位数的值和后面的值做比较
let maxProfit = function (prices) {
  let maxProfit = 0
  for (let i = 0; i < prices.length; i++) {
    for (let j = i + 1; j < prices.length; j++) {
      let profit = prices[j] - prices[i]
      if (profit > maxProfit) {
        maxProfit = profit
      }
    }
  }
  return maxProfit
};
let maxProfit1 = function (prices) {
  let minProfit = Number.MAX_VALUE
  let maxProfit = 0
  for (let i = 0; i < prices.length; i++) {
    // 当数组第i为小于当前记录的最小值的。
    // 把最小值替换成当前值
    if (prices[i] < minProfit) {
      minProfit = prices[i]
    } else if (prices[i] - minProfit > maxProfit) {
      // 如果当前值减去最小值大于所记录的最大值
      // 说明该值是目前循环中的最大值。
      // 并记录当前最大值
      maxProfit = prices[i] - minProfit
    }
  }
  return maxProfit
};

console.log(maxProfit([7, 1, 5, 3, 6, 4]));
