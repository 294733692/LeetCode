/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
let search = function (nums, target) {
  let start = 0, end = nums.length - 1
  while (start <= end) {
    let mid = (start + end) >>> 1
    if (nums[mid] == target) {
      return mid
    }
    // 先根据 nums[mid] 与 nums[start] 的关系判断 mid 是在左段还是右段
    if (nums[mid] >= nums[start]) {
      // 再判断 target 是在 mid 的左边还是右边，从而调整左右边界 start 和 end
      if (target >= nums[start] && target < nums[mid]) {
        end = mid - 1
      } else {
        start = mid + 1
      }
    } else {
      // 同上
      if (target > nums[mid] && target <= nums[end]) {
        start = mid + 1
      } else {
        end = mid - 1
      }
    }
  }
  return -1;
};
console.log(search([3, 1], 1))
