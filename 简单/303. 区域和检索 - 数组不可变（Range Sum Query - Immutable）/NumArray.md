### 给定一个整数数组  *nums*，求出数组从索引 *i* 到 *j* (*i* ≤ *j*) 范围内元素的总和，包含 *i, j* 两点。



**示例：**

```
给定 nums = [-2, 0, 3, -5, 2, -1]，求和函数为 sumRange()

sumRange(0, 2) -> 1
sumRange(2, 5) -> -1
sumRange(0, 5) -> -3
```

**说明:**

1. 你可以假设数组不可变。
2. 会多次调用 *sumRange* 方法。

题目地址：[303. 区域和检索 - 数组不可变](https://leetcode-cn.com/problems/range-sum-query-immutable/)



解法1：暴力法

如果是忽略掉提示2的话，直接使用暴力法应该是最开始就能想到的方法了。

```js
/**
 * @param {number[]} nums
 */
let NumArray = function (nums) {
  this.arr = nums
};

/**
 * @param {number} i
 * @param {number} j
 * @return {number}
 */
NumArray.prototype.sumRange = function (i, j) {
  let res = 0
  let len = this.arr.length
  for (let n = i; n <= j; n++) {
    res += this.arr[n]
  }
  return res
};

/**
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(i,j)
 */
```

但是这里有个缺陷就是，提示2给出的，会多次调用`sumRange`方法，如果需要调用1000的话，这里就会执行1000次的循环，会非常的消耗时间

解法2：前缀和

就像上面说的一样，如果`sumRange`被调用1000次的，而且参数都是相同的话，我们是不是可以预先计算出所有范围的可能的结果，放到额外空间里面。

```js
/**
 * @param {number[]} nums
 */
let NumArray = function (nums) {
  this.sum = new Array(nums.length + 1)
  this.sum[0] = 0
  for (let i = 1; i < nums.length + 1; i++) {
    this.sum[i] = this.sum[i - 1] + nums[i - 1]
  }
};

/**
 * @param {number} i
 * @param {number} j
 * @return {number}
 */
NumArray.prototype.sumRange = function (i, j) {
  return this.sum[j + 1] - this.sum[i]
};

/**
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(i,j)
 */
let nums = [-2, 0, 3, -5, 2, -1]
let obj = new NumArray(nums)
let sum = obj.sumRange(0, 5)
console.log(sum);
```

