/**
 * @param {number[]} nums
 * @return {number}
 */
let singleNumber = function (nums) {
  nums = nums.sort()
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== nums[i - 1] && nums[i] !== nums[i + 1]) {
      return nums[i]
    }
  }
};
let singleNumber1 = function (nums) {
  return nums.reduce((pre, cur) => pre ^ cur)
}
let singleNumber2 = function (nums) {
  let res = 0
  for (let key of nums) {
    res ^= key
  }
  return res
}
console.log(singleNumber2([2, 2, 1]));
console.log(singleNumber2([4, 1, 2, 1, 2]));

