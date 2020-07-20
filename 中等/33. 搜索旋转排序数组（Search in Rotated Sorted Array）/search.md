假设按照升序排序的数组在预先未知的某个点上进行了旋转。

( 例如，数组 `[0,1,2,4,5,6,7]` 可能变为 `[4,5,6,7,0,1,2]` )。

搜索一个给定的目标值，如果数组中存在这个目标值，则返回它的索引，否则返回 `-1` 。

你可以假设数组中不存在重复的元素。

你的算法时间复杂度必须是 *O*(log *n*) 级别。

**示例 1:**

```
输入: nums = [4,5,6,7,0,1,2], target = 0
输出: 4
```

**示例 2:**

```
输入: nums = [4,5,6,7,0,1,2], target = 3
输出: -1
```

LeetCode题目地址：[33. 搜索旋转排序数组](https://leetcode-cn.com/problems/search-in-rotated-sorted-array/)

解法一：二分搜索法

根据题目的要求，我们的时间算法复杂度必须是O(log n)级别，这里就提示了我们要采用二分搜索的方法。

根据题目上面说的，我们将给定的数组重中间分开成两部分，那么一定有一部分的数组是有序的。

在二分搜素的时候，我们查看当前的`mid`为分割点，分割出左右两个部分，但是这道题没有明确给出那个部分是有序的，这里就需要我们进行判断，判断那个部分是有序的。然后根据有序的部分改变二分搜索的搜索边界，因此我们能够根据有序的那一部分来判断`target`在不在这一部分。

- 如果 `[start, mid - 1] `是有序数组，且 `target` 的大小满足`  [nums[start],nums[mid])`，则我们应该将搜索范围缩小至` [start, mid - 1]`，否则在` [mid + 1, r] `中寻找。
- 如果 `[mid, end] `是有序数组，且` target`的大小满足 `(nums[mid+1],nums[end])`，则我们应该将搜索范围缩小至` [mid + 1,end]`，否则在` [start, mid - 1] `中寻找

```js
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
```

