### 给定两个数组，编写一个函数来计算它们的交集。

**示例 1:**

```
输入: nums1 = [1,2,2,1], nums2 = [2,2]
输出: [2]
```

**示例 2:**

```
输入: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
输出: [9,4]
```

**说明:**

- 输出结果中的每个元素一定是唯一的。
- 我们可以不考虑输出结果的顺序。

LeetCode题目地址：[349. 两个数组的交集](https://leetcode-cn.com/problems/intersection-of-two-arrays/)

解法1：Api解法

思路其实挺简单的，就是利用Set对数组进行去重，有交集，那么必然两个数组中有数字是相同的。

```js
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
let intersection = function (nums1, nums2) {
  let arr = new Set(nums2)
  let res = new Set(nums1.filter(item => arr.has(item)))
  return [...res]
};
console.log(intersection([1, 2, 2, 1], [2, 2]));
```

