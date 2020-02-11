/**
 * @param {number[]} nums
 * @return {number}
 */
// 暴力法,会出现超时情况
let majorityElement = function (nums) {
  // 取出数组长度中位数，用于比较出现次数最多的数字
  let majorityCount = nums.length / 2
  // 第一层循环数组
  for (let num of nums) {
    // 计数器，用于存储出现数字的次数
    let count = 0
    // 第二层循环，统计每个数字出现的次数
    for (let ele of nums) {
      // 如果第一层数组和第二次循环的数字相等，计数器+1
      if (ele === num) {
        count += 1
      }
    }
    // 如果计数器的数字大于数组长度的一半，那么这个数字必然是出现次数最多的数组
    if (count > majorityCount) {
      return num
    }
  }
  // 如果不满足上面条件，那么返回-1
  return -1
};

// 排序
let majorityElement1 = function (nums) {
  nums.sort()
  return nums[parseInt(nums.length / 2)]
}

// 投票法
let majorityElement5 = function (nums) {
  let count = 0
  let candidate = null
  for (let num of nums) {
    if (count === 0) {
      candidate = num
    }
    count += (num === candidate) ? 1 : -1
  }
  return candidate
};
console.log(majorityElement5([6, 5, 5]));
