给定一个二进制数组， 计算其中最大连续1的个数。

**示例 1:**

```
输入: [1,1,0,1,1,1]
输出: 3

解释: 开头的两位和最后的三位都是连续1，所以最大连续1的个数是 3.
```

**注意：**

- 输入的数组只包含 `0` 和`1`。
- 输入数组的长度是正整数，且不超过 10,000。

leetCode题目地址：[485. 最大连续1的个数](https://leetcode-cn.com/problems/max-consecutive-ones/)

解法1：正则

用正则匹配，计算包含`1`的数组，对比数组的长度，返回最大的数组长度，其实也可以是采用以`0`的分隔符进行拆分，当时没注意的是二进制的数。

```js
/**
 * @param {number[]} nums
 * @return {number}
 */
let findMaxConsecutiveOnes = function (nums) {
  let arr = nums.join('').match(/1+/ig)
  let res = 0
  for (let i = 0; i < arr.length; i++) {
    res = res > arr[i].length ? res : arr[i].length
  }
  return res
};
```

解法2：一次遍历

遍历数据，维护连个数`count`和`res`，遇到为`1`的数`count+1`，否则`count`置为`0`，`res`如果比`count`小，说明`res`维护的是不是当前最大长度，将`count`的赋值给`res`，如果`res`比`count`大，说明`res`维护的是当前最大长度

```js
let findMaxConsecutiveOnes1 = function (nums) {
  let count = 0
  let res = 0

  for (let i = 0; i < nums.length; i++) {
    count = nums[i] === 1 ? count + 1 : 0
    res = count > res ? count : res
  }
  return res
};
```

