/**
 * @param {number[]} nums
 * @return {boolean}
 */
let containsDuplicate = function (nums) {
  for (let i = 0; i < nums.length; i++) {
    console.log(nums.indexOf(nums[i]) !== i);
    if (nums.indexOf(nums[i]) !== i) {
      return true
    }
  }
  return false
};
// 去重法
let containsDuplicate1 = function (nums) {
  return new Set(nums).size !== nums.length
}

// hast表解法
let containsDuplicate2 = function (nums) {
  let set = new Set()
  for (let i = 0; i < nums.length; i++) {
    if (set.has(nums[i])) {
      return true
    } else {
      set.add(nums[i])
    }
  }
  return false
}
// 排序
let containsDuplicate3 = function (nums) {
  nums.sort()
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === nums[i + 1]) {
      return true
    }
  }
  return false
}
console.log(containsDuplicate3([1, 2, 3, 1]));
