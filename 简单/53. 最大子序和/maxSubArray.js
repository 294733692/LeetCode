/**
 * @param {number[]} nums
 * @return {number}
 */
// 分支模板
// 定义基本情况。
// 将问题分解为子问题并递归地解决它们。
// 合并子问题的解以获得原始问题的解。
let maxSubArray = function (nums) {
  // 中间数，包含左右子数组，返回左右子数组的最大值
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

let maxSubArray1 = function (nums) {
  let result = nums[0]
  let sum = 0
  for (let num of nums) {
    // 小于0，无增益，舍弃
    if (sum < 0) {
      sum = num
    } else { // 大于0，有增益，加上
      sum += num
    }
    // 比较最大值，返回
    result = Math.max(result, sum)
  }
  return result
}

console.log(maxSubArray1([-2, 1, -3, 4, -1, 2, 1, -5, 4]))
// console.log(maxSubArray1([-2, -1]))
maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4])
