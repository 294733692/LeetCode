给你一个包含 `n `个整数的数组` nums`，判断` nums` 中是否存在三个元素 `a`，`b`，`c` ，使得 `a + b + c = 0` ？请你找出所有满足条件且不重复的三元组。

**注意：**答案中不可以包含重复的三元组。

**示例：**

```
给定数组 nums = [-1, 0, 1, 2, -1, -4]，

满足要求的三元组集合为：
[
  [-1, 0, 1],
  [-1, -1, 2]
]
```

LeetCode题目地址：[15. 三数之和](https://leetcode-cn.com/problems/3sum/)

解法：排序+双指针

- 先对数组进行排序，从小到大
- 循环当前数组，需要考虑的情况
  - 因为是从小到大排序，如果当前的值是大于`0`，那么必然后面相加的数不可能为`0`，终止循环
  - 保证当前值为唯一值，`nums[i] === nums[i - 1]`的话。说明当前值不是唯一值，跳过当前循环
  - 如果三个数相加为过为`0`的话。需要考虑到这三种情况
    - 如果当前结果为`0`，那么直接push到数组里面，继续向下循环，进行去重，判断`nums[left] === nums[left + 1]`和`nums[right] = nums[right - 1]`是否相等
    - 如果大于0，说明`right`向前可能会有满足的答案；
    - 如果小于0，说明`left++`可能会有跟满足的答案

```js
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
let threeSum = function (nums) {
  let arr = []
  let len = nums.length
  if (nums == null || len < 3) return arr
  nums.sort((a, b) => a - b)
  for (let i = 0; i < len; i++) {
    // 第一种情况，如果当前值大于0，说明三个数相加结果不可能为0
    if (nums[i] > 0) break
    // 保证三个数为唯一值
    if (i > 0 && nums[i] === nums[i - 1]) continue

    let left = i + 1, right = len - 1
    while (left < right) {
      // 记录当前循环三个数的和
      let sum = nums[i] + nums[left] + nums[right]

      if (sum === 0) {
        arr.push([nums[i], nums[left], nums[right]])
        // 去除重复结果,循环指向下一个没用过的数且没出现过的
        while (left < right && nums[left] === nums[left + 1]) left++
        while (left < right && nums[right] === nums[right - 1]) right--
        left++
        right--
      } else if (sum > 0) {
        right--
      } else {
        left++
      }
    }
  }
  return arr
};
// console.log(threeSum([-1, 0, 1, 2, -1, -4]));
console.log(threeSum([0, 0, 0]))

```

