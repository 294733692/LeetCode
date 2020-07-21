/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
let searchRange = function (nums, target) {
  let result = [-1, -1]

  let startCur = _helper(nums, target, true)
  if (startCur === nums.length || nums[startCur] !== target) {
    return result
  }
  result = [startCur, _helper(nums, target, false) - 1]
  return result
};

function _helper (nums, target, left) {
  let start = 0, end = nums.length
  while (start < end) {
    let mid = (start + end) >>> 1
    if (nums[mid] > target || (left && target === nums[mid])) {
      end = mid
    } else {
      start = mid + 1
    }
  }
  return start
}

var searchRange1 = function(nums, target) {
  if(nums.indexOf(target) === -1) return [-1,-1]
  let res = []
  res.push(nums.indexOf(target))
  res.push(nums.lastIndexOf(target))
  return res
};

console.log(searchRange([5, 7, 7, 8, 8, 10], 8));
