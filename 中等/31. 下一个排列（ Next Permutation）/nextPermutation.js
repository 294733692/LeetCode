/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
// 一次性遍历
let nextPermutation = function (nums) {
  let _reverse = (nums, start) => {
    let i = start, j = nums.length - 1;
    while (i < j) {
      _swap(nums, i, j);
      i++;
      j--;
    }
  }

  // 双指针交换数组位子
  let _swap = (nums, i, j) => {
    let temp = nums[i]
    nums[i] = nums[j]
    nums[j] = temp
  }

  let i = nums.length - 2;
  while (i >= 0 && nums[i + 1] <= nums[i]) {
    i--;
  }
  if (i >= 0) {
    let j = nums.length - 1;
    while (j >= 0 && nums[j] <= nums[i]) {
      j--;
    }
    _swap(nums, i, j);
  }
  _reverse(nums, i + 1);
};

// 倒序
let nextPermutation1 = function (nums) {
  let i = nums.length - 2
  while (i >= 0 && nums[i + 1] <= nums[i]) {
    i--
  }
  if (i >= 0) {
    let j = nums.length - 1
    while (j >= 0 && nums[j] <= nums[i]) {
      j--
    }
    // 交换两个数组的值
    [nums[i], nums[j]] = [nums[j], nums[i]]
  }
  i++
  let j = nums.length - 1
  while (i < j) {
    [nums[i], nums[j]] = [nums[j], nums[i]]
    i++;
    j--;
  }
  return nums
}
nextPermutation([1, 2])
