### 给定一个长度为 *n* 的**非空**整数数组，找到让数组所有元素相等的最小移动次数。每次移动可以使 *n* - 1 个元素增加 1。

**示例:**

**示例:**

```
输入:
[1,2,3]

输出:
3

解释:
只需要3次移动（注意每次移动会增加两个元素的值）：

[1,2,3]  =>  [2,3,3]  =>  [3,4,3]  =>  [4,4,4]
```

LeetCode题目地址：[453. 最小移动次数使数组元素相等](https://leetcode-cn.com/problems/minimum-moves-to-equal-array-elements/)

解法1：数学法

根据题目意思来看，每次移动让`n - 1`个元素增加`1`，这样做起来可能比较麻烦，但是我们换一个思路来，让`n - 1`个元素增加`1`，就是相当于1个元素 `- 1`。换个意思来说就是，55个民族加分，那么就是1个民族减分。

那么这样我们就可以做减法，计算每个值和最小值的差值之和就可以了，

```js
/**
 * @param {number[]} nums
 * @return {number}
 */
let minMoves = function (nums) {
  let min= Math.min.apply(null, nums)
  let count = 0
  for (let key of nums) {
    count += key - min
  }
  return count
};
console.log(minMoves([1, 2, 3]));

```

