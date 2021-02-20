/**
 * @param {number[]} nums
 * @return {number}
 */
var findShortestSubArray = function(nums) {
  let map = {}
  for (const [index, num] of nums.entries()) {
    // 0：该数字出现的频率
    // 1：该数第一次出现的位置
    // 2：该数字最后一次出现的位置
    if (num in map) { // 如果map里面有num
      map[num][0]++ // 修改num出现的次数
      map[num][2] = index // 最后一次出现的位置
    } else {
      map[num] = [1, index, index] // 记录num第一次出现
    }
  }
  let maxNum = 0, minLen = 0
  for (const [count, left, right] of Object.values(map)) {
    console.log(count, left, right)
    if (maxNum < count) { // 如果当前记录最大的次数小于该数的出现次数
      maxNum = count
      minLen = right - left + 1 // 计算出现的最小长度，因为数组是从0开始，所以需要最小长度需要+1
    } else if (maxNum === count) { // 如果出现最大次数和该数的出现次数相等
      // 比较两个数出现的最小距离
      if (minLen > (right - left + 1)) {
        minLen = right - left + 1
      }
    }
  }

  console.log(minLen)
  return minLen
};
findShortestSubArray([1, 2, 2, 3, 1])
