/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
let moveZeroes = function (nums) {
  if (!nums) return null
  let j = 0;
  // 第一次循环，j指针记录出现0的次数，将所有非0的数，统统赋值给nums[i]
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      nums[j++] = nums[i]
    }
  }
  // 第一次循环已经将非0的数字，全部移动到数组前面去了。
  // 第二次循环，我们只需要利用j的次数，将0填充到数组尾部即可
  for (let i = j; i < nums.length; i++) {
    nums[i] = 0
  }
  return nums
};

let moveZeroes1 = function (nums) {
  if (!nums) return null
  let j = 0
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      let temp = nums[i]
      nums[i] = nums[j]
      nums[j++] = temp
    }
  }
  return nums
}
console.log(moveZeroes1([0, 1, 0, 3, 12]));
