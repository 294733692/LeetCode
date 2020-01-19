### 给定两个有序整数数组 nums1 和 nums2，将 nums2 合并到 nums1 中，使得 num1 成为一个有序数组。

说明:

初始化 nums1 和 nums2 的元素数量分别为 m 和 n。
你可以假设 nums1 有足够的空间（空间大小大于或等于 m + n）来保存 nums2 中的元素。

示例：

```
输入:
nums1 = [1,2,3,0,0,0], m = 3
nums2 = [2,5,6],       n = 3

输出: [1,2,2,3,5,6]
```

LeetCode题目地址：[88. 合并两个有序数组](https://leetcode-cn.com/problems/merge-sorted-array/)

解法1：API解法

```js
var merge = function(nums1, m, nums2, n) {
    return nums1.splice(0, m).concat(nums2.splice(0, n)).sort((a, b) => a - b)
}
```

正常情况下，这里是就完成了题目的要求，但是上传到leetCode的时候发现，提交错误，在这道题上不需要return，leetCode直接读取nums1的值。

解法2：双指针 / 从后往前

```js
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
let merge = function (nums1, m, nums2, n) {
  let p1 = m - 1
  let p2 = n - 1
  let p = m + n - 1  // 记录指针问题

  while ((p1 >= 0) && (p2 >= 0)) {
    nums1[p--] = nums1[p1] < nums2[p2] ? nums2[p2--] : nums1[p1--]
  }

  function arraycopy (src, srcPos, dest, destPost, length) {
    return dest.splice(destPost, length, ...src.slice(srcPos, srcPos + length))
  }
  // 表示将nums2数组从下标0位置开始，拷贝到nums1数组中，从下标0位置开始，长度为p2+1
  return arraycopy(nums2, 0, nums1, 0, p2 + 1)
};
```

