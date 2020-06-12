/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
let threeSumClosest = function (nums, target) {
  nums.sort((a, b) => a -b)
  let res = nums[0] + nums[1] + nums[2] // 三个数之和，记录前3个之和，存放初始数据
  for (let i = 0; i < nums.length - 1; i++) {
    let start = i + 1, end = nums.length - 1
    while (start < end) {
      let sum = nums[start] + nums[end] + nums[i]
      // 求出当前循环中最接近target的值
      if (Math.abs(target - sum) < Math.abs(target - res)) res = sum
      // 如果当前结果大于target值，说明前面的值可能有跟适合的数值
      if (sum > target) {
        end--
      } else if (sum < target) {
        start++
      } else {
        return res
      }
    }
  }
  return res
};
console.log(threeSumClosest([1,2,4,8,16,32,64,128], 82))
