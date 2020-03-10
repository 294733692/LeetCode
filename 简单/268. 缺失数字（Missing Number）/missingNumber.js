/**
 * @param {number[]} nums
 * @return {number}
 */
// 排序
let missingNumber = function (nums) {
  nums.sort((a, b) => a - b)
  console.log(nums);
  let len = nums.length
  for (let i = 0; i <= nums[len - 1]; i++) {
    if (!nums.includes(i)) return i
  }
  return nums.length
};

// hash
let missingNumber1 = function (nums) {
  let set = new Set()
  for (let num of nums) set.add(num)
  let count = set.size + 1

  for (let i = 0; i < count; i++) {
    if (!set.has(i)) return i
  }
  return -1
}

// 或运算
let missingNumber2 = function (nums) {
  let missingNum = nums.length
  for (let i = 0; i < nums.length; i++) {
    missingNum = missingNum ^ i ^ nums[i]
  }
  return missingNum
}


// 数学法（高斯求和）
let missingNumber3 = function (nums) {
  let expectedSum = (nums.length * (nums.length + 1)) / 2
  let actualSum = 0
  for (let num of nums) actualSum += num
  return expectedSum - actualSum
}

// console.log(missingNumber1([45, 35, 38, 13, 12, 23, 48, 15, 44, 21, 43, 26, 6, 37, 1, 19, 22, 3, 11, 32, 4, 16, 28, 49, 29, 36, 33, 8, 9, 39, 46, 17, 41, 7, 2, 5, 27, 20, 40, 34, 30, 25, 47, 0, 31, 42, 24, 10, 14]));
console.log(missingNumber3([3, 0, 1]));

// - 1 ^ 1 = 0
// - 1 ^ 0 = 1
// - 0 ^ 0 = 0
// - 0 ^ 1 = 1

// console.log(1^1) 0
// console.log(1^0) 1
// console.log(0^0) 0
// console.log(0^1) 1
