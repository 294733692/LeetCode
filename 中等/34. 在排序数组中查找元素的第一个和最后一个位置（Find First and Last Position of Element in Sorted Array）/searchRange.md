给定一个按照升序排列的整数数组 `nums`，和一个目标值 `target`。找出给定目标值在数组中的开始位置和结束位置。

你的算法时间复杂度必须是 *O*(log *n*) 级别。

如果数组中不存在目标值，返回 `[-1, -1]`。

**示例 1:**

```
输入: nums = [5,7,7,8,8,10], target = 8
输出: [3,4]
```

**示例 2:**

```
输入: nums = [5,7,7,8,8,10], target = 6
输出: [-1,-1]
```

LeetCode题目地址：[34. 在排序数组中查找元素的第一个和最后一个位置](https://leetcode-cn.com/problems/find-first-and-last-position-of-element-in-sorted-array/)



根据题目中给定的要求我们的算法时间复杂度必须是O(log n)，这就提示我们需要采用二分搜索发进行处理，这里我们稍后采用这么一种方法，

解法1：API解法

- `indexOf`：找到当前数字第一次出现的小标，并返回，没找到就返回`-1`
- `lastIndexOf`：找到最后一个出现的数字，并返回其下标 ,没找到就返回`-1`

```js
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
let searchRange = function (nums, target) {
  if(nums.indexOf(target) === -1) return [-1,-1]
  let res = []
  res.push(nums.indexOf(target))
  res.push(nums.lastIndexOf(target))
  return res
};
```



解法2：二分搜索

```js
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
```

