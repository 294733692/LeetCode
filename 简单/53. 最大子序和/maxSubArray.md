### 给定一个整数数组 nums ，找到一个具有最大和的连续子数组（子数组最少包含一个元素），返回其最大和。
示例：
```js
输入: [-2,1,-3,4,-1,2,1,-5,4],
输出: 6
解释: 连续子数组 [4,-1,2,1] 的和最大，为 6。
```
进阶：如果你已经实现复杂度为 O(n) 的解法，尝试使用更为精妙的分治法求解。

LeetCode链接：[53. 最大子序和](https://leetcode-cn.com/problems/maximum-subarray/)

解法1：动态规划

- 对数组进行遍历，当前最大连续子序列的和为sum，result为结果
- 如果`sum>0`,说明sum对最终结果有增益效果，则`sum`保留并加上当前遍历的数字
- 如果`sum<0`,说明`sum`对最终结果有减益效果，需要把舍弃当前`sum`，`sum`直接更新为当前遍历的数字
- 每次循环比较`sum`和`result`的大小，将最大值设置为`result`
- 遍历结束后返回结果

```js
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
	let result = nums[0]
    let sum = 0
    nums.forEach(item => {
        if (sum < 0) {
            sum = item
        } else {
            sum += item
        }
        result = Math.max(result, sum)
    })
    returm result
}
```

算法2：分治法

[官方题解](https://leetcode-cn.com/problems/maximum-subarray/solution/zui-da-zi-xu-he-by-leetcode/)

```js
let maxSubArray = function (nums) {
  // 中间数最大子数组，包含左右子数组，返回左右子数组的最大值（从最底层向上算起）
  let _crossSum = (nums, left, right, mid) => {
    if (left === right) return nums[left]
    // 设置最小安全数，记录上一个左边最大值
    let leftSum = Number.MIN_SAFE_INTEGER
    let currSum = 0

    // left，从中间遍历向left遍历
    for (let i = mid; i > left - 1; --i) {
      // 当前值
      currSum += nums[i]
      // 上一个最大值和当前值做比较
      leftSum = Math.max(leftSum, currSum)
    }

    let rightSum = Number.MIN_SAFE_INTEGER
    currSum = 0
    //同上
    for (let i = mid + 1; i < right + 1; ++i) {
      currSum += nums[i]
      rightSum = Math.max(rightSum, currSum)
    }

    // 求出左右最大值，并返回，包含左右子数组的最大值
    return leftSum + rightSum
  }
  // 将数组拆分为left、right两部分，递归处理
  let _helper = (nums, left, right) => {
    // 长度为1的时候
    if (left === right) return nums[left]
    // 求出中间值，取整
    let mid = parseInt((left + right) / 2)
    // left: 从数组中间进行拆分
    let leftSum = _helper(nums, left, mid)
    let rightSum = _helper(nums, mid + 1, right)
    let crossSum = _crossSum(nums, left, right, mid)

    return Math.max(Math.max(leftSum, rightSum), crossSum)
  }

  return _helper(nums, 0, nums.length - 1)
};
```

