/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
// 双指针解法
var removeElement = function(nums, val) {
  if (nums.length === 0) return 0
  let i = 0
  for (let j = 0; j < nums.length; j++) {
    if(nums[j] !== val) {
      nums[i] = nums[j]
      i++
    }
  }
  return i
};

// 双指针、重复元素较少解法
var removeElement = function (nums, val) {
  if (nums.length === 0) return 0
  let n = nums.length
  let i = 0
  while (i < n) {
    if (nums[i] === val) {
      nums[i] = nums[n - 1]
      //　数组长度－１，实际上就是上面我们检查过的第ｉ位数，后面迭代不需要再次检查
      n--
    } else {
      // 标记删除的的数组长度
      i++
    }
  }
  return i
};
console.log(removeElement([4, 1, 2, 3, 5], 4));
