### 给定一个非空数组，返回此数组中第三大的数。如果不存在，则返回数组中最大的数。要求算法时间复杂度必须是O(n)。

**示例 1:**

```
输入: [3, 2, 1]

输出: 1

解释: 第三大的数是 1.示例 1:

输入: [3, 2, 1]

输出: 1

解释: 第三大的数是 1.
```

**示例 2:**

```
输入: [1, 2]

输出: 2

解释: 第三大的数不存在, 所以返回最大的数 2 .
```

**示例 3:**

```
输入: [2, 2, 3, 1]

输出: 1

解释: 注意，要求返回第三大的数，是指第三大且唯一出现的数。
存在两个值为2的数，它们都排第二。
```

LeetCode题目地址：[414. 第三大的数](https://leetcode-cn.com/problems/third-maximum-number/)

解法1：set

利用set去重特性，然后将变为数组进行排序，

```js
/**
 * @param {number[]} nums
 * @return {number}
 */
let thirdMax = function (nums) {
  let set = new Set(nums)
  let arr = [...set]
  arr.sort((a, b) => b - a)
  if (arr.length < 3) return arr[0]
  return arr[2]
};
```

解法2：维护3个最大数

```js
let thirdMax1 = function (nums) {
  // 如果数组长度小于3，返回最大的
  if (nums.length < 3) return Math.max(...nums)

  let firstMax = -Infinity
  let secMax = -Infinity
  let thMax = -Infinity

  for (let key of nums) {
    // 如果维护的第一个最大数小于当前数，依次把三个值给替换掉  
    if (key > firstMax) {
      thMax = secMax
      secMax = firstMax
      firstMax = key
    } else if (key < firstMax && key > secMax) {
      // 如果当前值小于维护的第一最大数，大于第一最大数
      // 将第二最大数和第三最大数做替换  
      thMax = secMax
      secMax = key
    } else if (key > thMax && key < secMax) {
      // 如果当前值小于维护的第二最大数，大于第三最大数
      // 将第三最大数和当前数做替换  
      thMax = key
    }
  }
  // 如果没有找到第三个最大的，就返回最大的
  return thMax === -Infinity ? Math.max(...nums) : thMax
}
```

