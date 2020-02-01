/**
 * @param {number[]} prices
 * @return {number}
 */
let maxProfit = function (prices) {
  // prices当前循环数组，s开始循环位数
  let _calculate = (prices, s) => {
    // 如果开始循环次数大于当前数组长度，返回0
    if (s >= prices.length) return 0;
    // 记录最大利润
    let max = 0;
    for (let start = s; start < prices.length; start++) {
      // 记录当前循环最大利润
      let maxprofit = 0;
      for (let i = start + 1; i < prices.length; i++) {
        // 如果当前循环值大于开始循环的值，说明此时可以进行卖的操作
        if (prices[start] < prices[i]) {
          // 记录二次循环的最大利润，并加上后面循环得到的最大利润
          let profit = _calculate(prices, i + 1) + prices[i] - prices[start];
          // 如果当前循环得到的最大利润大于第一次循环所得到的最大利润值，就将最大利润给替换掉
          if (profit > maxprofit) maxprofit = profit;
        }
      }
      // 当前循环生成的最大值大于所记录的总最大值，则将值替换掉
      if (maxprofit > max) max = maxprofit;
    }
    return max;
  }

  return _calculate(prices, 0)
};

let maxProfit1 = (prices) => {
  let maxProfit = 0
  for (let i = 1; i < prices.length; i++) {
    if (prices[i] > prices[i - 1]) {
      maxProfit += prices[i] - prices[i - 1]
    }
  }
  return maxProfit
}
console.log(maxProfit1([7, 1, 5, 3, 6, 4]));
