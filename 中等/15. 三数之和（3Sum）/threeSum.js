/**
 * @param {number[]} nums
 * @return {number[][]}
 */
let threeSum = function (nums) {
  let arr = []
  let len = nums.length
  if (nums == null || len < 3) return arr
  nums.sort((a, b) => a - b)
  for (let i = 0; i < len; i++) {
    // 第一种情况，如果当前值大于0，说明三个数相加结果不可能为0
    if (nums[i] > 0) break
    // 保证三个数为唯一值
    if (i > 0 && nums[i] === nums[i - 1]) continue

    let left = i + 1, right = len - 1
    while (left < right) {
      // 记录当前循环三个数的和
      let sum = nums[i] + nums[left] + nums[right]

      if (sum === 0) {
        arr.push([nums[i], nums[left], nums[right]])
        // 去除重复结果,循环指向下一个没用过的数且没出现过的
        while (left < right && nums[left] === nums[left + 1]) left++
        while (left < right && nums[right] === nums[right - 1]) right--
        left++
        right--
      } else if (sum > 0) {
        right--
      } else {
        left++
      }
    }
  }
  return arr
};
// console.log(threeSum([-1, 0, 1, 2, -1, -4]));
console.log(threeSum([0, 0, 0]))
