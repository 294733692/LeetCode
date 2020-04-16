### 给定一个范围在 1 ≤ a[i] ≤ *n* ( *n* = 数组大小 ) 的 整型数组，数组中的元素一些出现了两次，另一些只出现一次。

找到所有在 [1, *n*] 范围之间没有出现在数组中的数字。

您能在不使用额外空间且时间复杂度为*O(n)*的情况下完成这个任务吗? 你可以假定返回的数组不算在额外空间内。

**示例:**

```
输入:
[4,3,2,7,8,2,3,1]

输出:
[5,6]
```

LeetCode题目地址：[448. 找到所有数组中消失的数字](https://leetcode-cn.com/problems/find-all-numbers-disappeared-in-an-array/)



解法1：原地算法

思路：将所有整数作为数组下标，将对应数组值为负数，仍然为整数的位置就是消失的数字。

```js
let findDisappearedNumbers1 = function (nums) {
  let arr = []
  for (let i = 0; i < nums.length; i++) {
    if (nums[Math.abs(nums[i]) - 1] > 0) {
      nums[Math.abs(nums[i]) - 1] *= -1
    }
  }
  for (let i= 0; i< nums.length; i++) {
    if (nums[i] > 0) arr.push(i + 1)
  }
  return arr
}
```



解法2： hash表

思路：先利用set对数组进行去重，循环数组长度，判断set里面是否有`i`，没有就push到数组去

```js
/**
 * @param {number[]} nums
 * @return {number[]}
 */
let findDisappearedNumbers = function (nums) {
  let arr = []
  let set = new Set(nums)

  for (let i = 1; i <= nums.length; i++) {
    if (!set.has(i)) arr.push(i)
  }
  return arr
};
```

