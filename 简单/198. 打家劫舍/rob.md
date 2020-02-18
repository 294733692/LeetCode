### 你是一个专业的小偷，计划偷窃沿街的房屋。每间房内都藏有一定的现金，影响你偷窃的唯一制约因素就是相邻的房屋装有相互连通的防盗系统，<b>如果两间相邻的房屋在同一晚上被小偷闯入，系统会自动报警。</b>

给定一个代表每个房屋存放金额的非负整数数组，计算你在不触动警报装置的情况下，能够偷窃到的最高金额。

 **示例 1** 

```
输入: [1,2,3,1]
输出: 4
解释: 偷窃 1 号房屋 (金额 = 1) ，然后偷窃 3 号房屋 (金额 = 3)。
     偷窃到的最高金额 = 1 + 3 = 4 。
```

 **示例 2:** 

```
输入: [2,7,9,3,1]
输出: 12
解释: 偷窃 1 号房屋 (金额 = 2), 偷窃 3 号房屋 (金额 = 9)，接着偷窃 5 号房屋 (金额 = 1)。
     偷窃到的最高金额 = 2 + 9 + 1 = 12 。
```

题目地址：[198. 打家劫舍](https://leetcode-cn.com/problems/house-robber/)

解法1：暴力法

根据题目，`如果两间相邻的房屋在同一晚上被小偷闯入，系统会自动报警。`这段话，不能连续偷相邻的房屋，所以需要进行条件判断`index % 2 === 0`，比较两个存储空间的值，去最大值

```js
/**
 * @param {number[]} nums
 * @return {number}
 */
let rob = function (nums) {
  let ans1 = 0
  let ans2 = 0
  nums.forEach((item, index) => {
    if (index % 2 === 0) {
      ans1 += item
      ans1 = Math.max(ans1, ans2)
    } else {
      ans2 += item
      ans2 = Math.max(ans1, ans2)
    }
  })
  return Math.max(ans1, ans2)
};
```

解法2：动态规划

第一想法就是暴力法，做完过后发现，根据现有的条件来看，我们可以发现某个规律。

从最简单的来看。[1, 2, 3]

- 当`n=1`的时候，只有一种情况
- 当`n=2`的时候，有`fn = Math.max(A1, A2)`这种情况
- 当`n=3`的时候，有两个情况
  - 抢第三个房子和第一个房子相加
  - 不抢第三个，保持现有最大数额

根据这个，我们可以得出动态转移方程：

如果要打劫第`n`家，就必然不能打劫第`n-1`家，所以打劫第`n`家得到的钱一共是第`n`家的前加上第`n-2`家获得最多的钱，即`f(n - 2) + nums[n]`。如果不打劫第`n`家，获得的最大收益就是`f(n-1)`。最后我们要去比较两个，获取最大值。所以最后的动态转移方程为：

`f(n) = Math.max(nums[n] + fn(n - 2, f(n - 1)))`

```js
/**
 * @param {number[]} nums
 * @return {number}
 */
let rob = function(nums) {
    let len = nums.length;
    if(len == 0) return 0;
    let dp = new Array(len + 1);
    dp[0] = 0;
    dp[1] = nums[0];
    for(let i = 2; i <= len; i++) {
        dp[i] = Math.max(dp[i-1], dp[i-2] + nums[i-1]);
    }
    return dp[len];
};
```

解法3：leetCode官方解法

```js
let rob = function (nums) {
  let prevMax = 0
  let currMax = 0
  for (let num of nums) {
    let temp = currMax
    currMax = Math.max(prevMax + num, currMax)
    prevMax = temp
  }
  return currMax
};
```

