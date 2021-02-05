/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
let findMaxAverage = function (nums, k) {
  let maxNum = 0 // 位数当前最大4数之和
  let sum = 0
  for (let i = 0; i < k; i++) {
    sum += nums[i]
  }

  maxNum = sum
  for (let i = k; i < nums.length; i++) {
    sum = sum - nums[i - k] + nums[i]
    maxNum = Math.max(maxNum, sum)
  }
  console.log(maxNum / k)
  return maxNum / k
}

// findMaxAverage([1, 12, -5, -6, 50, 3], 4)
findMaxAverage([0,4,0,3,2], 1)
