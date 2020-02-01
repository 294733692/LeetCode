### 给定一个数组，它的第 *i* 个元素是一支给定股票第 *i* 天的价格。

设计一个算法来计算你所能获取的最大利润。你可以尽可能地完成更多的交易（多次买卖一支股票）。

 **注意：**你不能同时参与多笔交易（你必须在再次购买前出售掉之前的股票） 

示例 1:

```
输入: [7,1,5,3,6,4]
输出: 7
解释: 在第 2 天（股票价格 = 1）的时候买入，在第 3 天（股票价格 = 5）的时候卖出, 这笔交易所能获得利润 = 5-1 = 4 。
     随后，在第 4 天（股票价格 = 3）的时候买入，在第 5 天（股票价格 = 6）的时候卖出, 这笔交易所能获得利润 = 6-3 = 3 
```

示例2：

```
输入: [1,2,3,4,5]
输出: 4
解释: 在第 1 天（股票价格 = 1）的时候买入，在第 5 天 （股票价格 = 5）的时候卖出, 这笔交易所能获得利润 = 5-1 = 4 。
     注意你不能在第 1 天和第 2 天接连购买股票，之后再将它们卖出。
     因为这样属于同时参与了多笔交易，你必须在再次购买前出售掉之前的股票。
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
```

 **示例 3:** 

```
输入: [7,6,4,3,1]
输出: 0
解释: 在这种情况下, 没有交易完成, 所以最大利润为 0。
```

LeetCode题目地址：[122. 买卖股票的最佳时机 II](https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock-ii/)

解法1：暴力法（递归处理）

- 暴力遍历，但是当数组过大的时候，是出现超时的情况

```js
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
```

解法2：一次简单遍历

因为不用考虑交易过程中的手续费，这里有个取巧的办法

- 循环数组，如果后一位大于前一位，说明有利润，将之间的差值的累计加起来就是最大利润

```js
let maxProfit1 = (prices) => {
  let maxProfit = 0
  for (let i = 1; i < prices.length; i++) {
    if (prices[i] > prices[i - 1]) {
      maxProfit += prices[i] - prices[i - 1]
    }
  }
  return maxProfit
}
```

