给定两个 没有重复元素 的数组 nums1 和 nums2 ，其中nums1 是 nums2 的子集。找到 nums1 中每个元素在 nums2 中的下一个比其大的值。

`nums1` 中数字 **x** 的下一个更大元素是指 **x** 在 `nums2` 中对应位置的右边的第一个比 **x** 大的元素。如果不存在，对应位置输出 -1 。

**示例 1:**

```
输入: nums1 = [4,1,2], nums2 = [1,3,4,2].
输出: [-1,3,-1]

解释:
    对于num1中的数字4，你无法在第二个数组中找到下一个更大的数字，因此输出 -1。
    对于num1中的数字1，第二个数组中数字1右边的下一个较大数字是 3。
    对于num1中的数字2，第二个数组中没有下一个更大的数字，因此输出 -1。
```



**示例 2:**

```
输入: nums1 = [2,4], nums2 = [1,2,3,4].
输出: [3,-1]
解释:
    对于 num1 中的数字 2 ，第二个数组中的下一个较大数字是 3 。
    对于 num1 中的数字 4 ，第二个数组中没有下一个更大的数字，因此输出 -1 。
```

LeetCode题目地址：[496. 下一个更大元素 I](https://leetcode-cn.com/problems/next-greater-element-i/)



注意：题目给定要求不是很清楚，这里着重说明一下，`nums1` 中数字 **x** 的下一个更大元素是指 **x** 在 `nums2` 中对应位置的右边的第一个比 **x** 大的元素，这里不是第一个，而是从`nums2`中后面所有的数组中，找到最近一个比`nums1`大的数。而不是下一个。



解法1：单栈

思路：这里我们先抛开`nums1`不进行关注，这里我们先循环遍历`nums2`，求出比当前数字更大的下一个数，然后将这些答案方法`map`中，然后遍历`nums1`，直接找出答案。

我们首先把第一个元素 `nums2[1]` 放入栈，随后对于第二个元素 `nums2[2]`，如果 `nums2[2]` > `nums2[1]`，那么我们就找到了 `nums2[1]` 的下一个更大元素 `nums2[2]`，此时就可以把 `nums2[1]` 出栈并把 `nums2[2]` 入栈；如果 `nums2[2]` <= `nums2[1]`，我们就仅把 `nums2[2]` 入栈。对于第三个元素 `nums2[3]`，此时栈中有若干个元素，那么所有比 `nums2[3]` 小的元素都找到了下一个更大元素（即 `nums2[3]`），因此可以出栈，在这之后，我们将 `nums2[3]` 入栈，以此类推。

```js
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
let nextGreaterElement = function (nums1, nums2) {
  let stack = []
  let map = new Map()
  for(let num of nums2){
    while(stack.length&&num>stack[0]){
      map.set(stack.shift(),num)
    }
    stack.unshift(num)
  }
  while(stack.length){
    map.set(stack.shift(),-1)
  }
  return nums1.map(num=>map.get(num))
};
console.log(nextGreaterElement([4, 1, 2], [1, 3, 4, 2]));
console.log(nextGreaterElement([1,3,5,2,4], [6,5,4,3,2,1,7]));

```

