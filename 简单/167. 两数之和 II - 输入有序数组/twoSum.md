### 167. 给定一个已按照升序排列 的有序数组，找到两个数使得它们相加之和等于目标数。函数应该返回这两个下标值 index1 和 index2，其中 index1 必须小于 index2。

**说明:**

- 返回的下标值（index1 和 index2）不是从零开始的。
- 你可以假设每个输入只对应唯一的答案，而且你不可以重复使用相同的元素。

 **示例:** 

```
输入: numbers = [2, 7, 11, 15], target = 9
输出: [1,2]
解释: 2 与 7 之和等于目标数 9 。因此 index1 = 1, index2 = 2 。
```

LeetCode题目地址：[167. 两数之和 II - 输入有序数组](https://leetcode-cn.com/problems/two-sum-ii-input-array-is-sorted/)

解法1：一遍哈希表

思想：在进行迭代并将元素插入到表中的同时，我们还会回过头来检查表中是否已经存在当前元素所对应的把目标元素，如果存在，那么就找到了对应的解

```js
/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (numbers, target) {
  let map = {}
  let len = numbers.length
  for (let i = 0; i < len; i++) {
    let targetNum = target - numbers[i]
    if (targetNum in map) return [map[targetNum], i + 1]
    map[numbers[i]] = i + 1
  }
};
```

解法2：双指针

题目给定的是一个有序数组，利用这个条件，我们可以初始化两个指针`left`和`right`，分别在数组的头部和尾部，加上首尾两个值和，和目标值比较，如果小于，那么说明左边数字不够大，这里将`left`增加1位，如果相等，那么返回下标`[left + 1, right + 1]`，如果大于，说明`right`位的值过大，这里我们后退一位`right - -`

```js
let towSum1 = function (numbers, target) {
  let left = 0
  let end = numbers.length - 1
  let targetNum = numbers[left] + left[end]
  while (left < end) {
    if (targetNum === target) {
      return [left + 1, end + 1]
    } else if (targetNum < target) {
      ++left
    } else {
      ++end
    }
  }
}
```

