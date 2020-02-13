/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
let rotate = function (nums, k) {
  for (let i = k; i > 0; i--) {
    nums.unshift(nums[nums.length - 1])
    nums.pop()
  }
  return nums
};
// 暴力
let rotate1 = function (nums, k) {
  let temp, previos
  for (let i = 0; i < k; i++) {
    previos = nums[nums.length - 1]
    for (let j = 0; j < nums.length; j++) {
      temp = nums[j]
      nums[j] = previos
      previos = temp
    }
  }
  return nums
};
// 额外数组
let rotate2 = function (nums, k) {
  let arr = new Array(nums.length)
  for (let i = 0; i < nums.length; i++) {
    arr[(i + k) % nums.length] = nums[i]
  }
  for (let j = 0; j < nums.length; j++) {
    nums[j] = arr[j]
  }
  return nums
};

// 环形替换
let rotate3 = function (nums, k) {
  k = k % nums.length
  let count = 0
  for (let start = 0; count < nums.length; start++) {
    let current = start
    let prev = nums[start]
    do {
      let next = (current + k) % nums.length
      let temp = nums[next]
      nums[next] = prev
      prev = temp
      current = next
      count++
    } while (start != current)
  }
  return nums
};

// 数组反转
let rotate4 = function (nums, k) {
  // 获得最小次数反转
  k %= nums.length

  let reverse = (nums, start, end) => {
    while (start < end) {
      let temp = nums[start]
      nums[start] = nums[end]
      nums[end] = temp
      start++
      end--
    }
  }

  reverse(nums, 0, nums.length - 1)
  reverse(nums, 0, k - 1)
  reverse(nums, k, nums.length - 1)

  return nums
};
console.log(rotate4([1, 2, 3, 4, 5, 6, 7], 3));
