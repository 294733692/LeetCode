### 给定一个包含 `0, 1, 2, ..., n` 中 *n* 个数的序列，找出 0 .. *n* 中没有出现在序列中的那个数。

**示例 1:**

```
输入: [3,0,1]
输出: 2
```

**示例 2:**

```
输入: [9,6,4,2,3,5,7,0,1]
输出: 8
```

**说明:**
你的算法应具有线性时间复杂度。你能否仅使用额外常数空间来实现?

LeetCode题目地址：[268. 缺失数字](https://leetcode-cn.com/problems/missing-number/)

解法1：排序

如果给定的数组使有序的，这样我们就可以快速找出缺失的数字，和去重的做法基本类似。这种解法太消耗时间了

```js
/**
 * @param {number[]} nums
 * @return {number}
 */
// 排序
let missingNumber = function (nums) {
  nums.sort((a, b) => a - b)
  console.log(nums);
  let len = nums.length
  for (let i = 0; i <= nums[len - 1]; i++) {
    if (!nums.includes(i)) return i
  }
  return nums.length
};
```

解法2：hash

思路，和解法1有点像是，只不过是使用的set解法。将数组的值放到set结构里面，循环数组长度，判断set里面是有当前数字，如果不存在就说明，该数字缺失

```js
let missingNumber1 = function (nums) {
  let set = new Set()
  for (let num of nums) set.add(num)
  let count = set.size + 1

  for (let i = 0; i < count; i++) {
    if (!set.has(i)) return i
  }
  return -1
}
```

解法3：异或运算

思路：对一个数进行两次完全相同的异或运算会得到原来的数，因此我们可以通过异或运算找到缺失的数字。

- 1 ^ 1 = 0
- 1 ^ 0 = 1
- 1 ^ 0 = 1
- 0 ^ 1 = 1

需要注意的是，这里的异或运算是`2`进制运算，不是单纯的数字运算

```js
// 或运算
let missingNumber2 = function (nums) {
  let missingNum = nums.length
  for (let i = 0; i < nums.length; i++) {
    missingNum = missingNum ^ i ^ nums[i]
  }
  return missingNum
}
```

解法4：高斯求和解法

思路：我们在线性时间内可以求出数组中所有数的和，并在常数时间内求出前 n+1*n*+1 个自然数（包括 0）的和，将后者减去前者，就得到了缺失的数字

```js
let missingNumber3 = function (nums) {
  let expectedSum = (nums.length * (nums.length + 1)) / 2
  let actualSum = 0
  for (let num of nums) actualSum += num
  return expectedSum - actualSum
}
```

