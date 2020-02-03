给定一个非空整数数组，除了某个元素只出现一次以外，其余每个元素均出现两次。找出那个只出现了一次的元素。

**说明：**

你的算法应该具有线性时间复杂度。 你可以不使用额外空间来实现吗？

 **示例 1:** 

```
输入: [2,2,1]
输出: 1
```

 **示例 2:** 

```
输入: [4,1,2,1,2]
输出: 4
```

LeetCode题目地址:[136. 只出现一次的数字](https://leetcode-cn.com/problems/single-number/)

先来分析题目：题目总有一个很重要的信息就是，其余元素值出现了两次，根据这个提示，我们可以把这个数组先进行排序，然后进行左右数组的判断就可以了

解法1：暴力法

```js
 * @param {number[]} nums
 * @return {number}
 */
let singleNumber = function (nums) {
  nums = nums.sort()
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== nums[i - 1] && nums[i] !== nums[i + 1]) {
      return nums[i]
    }
  }
};
```

解法2：异或

根据题目说明要求，优先考虑不使用额外的空间

那么可以进行异或操作

异或：

- 如果`a`、`b`两个值相同，那么异或结果为`0`，如果不相同，那么异或结果为`1`
  - 注意，这里在异或的时候是先将`a`、`b`转化为二进制进行异或，异或结束后返回`十进制`数
  - 例如：[2, 1, 2, 1, 4]，这里二进制为[010，001，010，001，100]
    - `2^1=011`返回结果为`3`
    - `3^2`=>`011^010=001`返回结果为`1`
    - `1^1`=>`001^001=000`返回结果为`0`
    - `0^4`=>`000^100=100`返回结果为`4`

```js
let singleNumber2 = function (nums) {
  let res = 0
  for (let key of nums) {
    res ^= key
  }
  return res
}
```

解法3：Api异或（数组reduce方法）

- reduce()方法接受一个函数作为累加器(accumulator)，数组中的每个值（从左到右）开始缩减，最终为一个值

- reduce为数组中的元素依次执行回调函数，不包括数组中被删除的或从未赋值的元素，接收4个参数：初始值（或上一次函数的返回值）、当前元素值、当前索引、调用reduce的数组

- 语法：

  - ```js
    arr.reduce(callback,[initalValue])
    ```

  - callback（执行数组中每个值的函数，包含四个参数）

    - previousValue（上一次调用函数的返回值，或者是提供的初始值（initValue））
    - currentValue（数组中当前被处理的元素）
    - index（当前元素在数组中的索引）
    - array（调用reduce的数组）

  - initialValue（作为第一次调用callback的第一个参数）

```js
let singleNumber = function (nums) {
  return nums.reduce((pre, cur) => pre ^ cur)
}
```

