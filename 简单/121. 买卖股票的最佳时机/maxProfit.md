### 给定一个数组，它的第 i 个元素是一支给定股票第 i 天的价格。如果你最多只允许完成一笔交易（即买入和卖出一支股票），设计一个算法来计算你所能获取的最大利润。

 注意你不能在买入股票前卖出股票。 

 **示例 1:** 

```
输入: [7,1,5,3,6,4]
输出: 5
解释: 在第 2 天（股票价格 = 1）的时候买入，在第 5 天（股票价格 = 6）的时候卖出，最大利润 = 6-1 = 5 。
     注意利润不能是 7-1 = 6, 因为卖出价格需要大于买入价格。
```

**示例 2:**

```
输入: [7,6,4,3,1]
输出: 0
解释: 在这种情况下, 没有交易完成, 所以最大利润为 0。
```

LeetCode题目链接：[121. 买卖股票的最佳时机](https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock/)

题目分析：根据题目说明，要想利润最大化，我们需要在最低价的时候进购，在进购后的最高价进行卖出。

解法1：暴力法

- 循环遍历出数组。
  - 当前项和数组的下面项做差比，差值最大的时候就返回

```js
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
```

因为是双重循环，所以时间复杂都为O(n²)

解法2：一次遍历

- 循环当前数组，使用`minProfit`记录最小值，`maxProfit`记录最大值
- 如果当前值小于`minProfit`，就将当前值替换成`minProfit`
- 如果当前值-`minProfit`大于`maxProfit`说明当前的值，是目前说循环的适合的卖出的时候，将最大值替换成`profit[i] - minProfit`

```js
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
```

