### 给定一个整数数组和一个整数 k，判断数组中是否存在两个不同的索引 i 和 j，使得 nums [i] = nums [j]，并且 i 和 j 的差的绝对值最大为 k。

 **示例 1:** 

```
输入: nums = [1,2,3,1], k = 3
输出: true
```

 **示例 2:** 

```
输入: nums = [1,0,1,1], k = 1
输出: true
```

 **示例 3:** 

```
输入: nums = [1,2,3,1,2,3], k = 2
输出: false
```

LeetCode题目地址：[219. 存在重复元素 II](https://leetcode-cn.com/problems/contains-duplicate-ii/)

这里需要说明的是，题目最后一句话的意思是`i`和`j`的差的绝对值不超过`k`



解法1：暴力法

思路：这里我需要维护一个滚动的区间，也就是`i - k`的滚动区间，将每个元素于滚动区间里面的的元素比较，看元素是否存在

```js
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
let containsNearbyDuplicate = function (nums, k) {
  for (let i = 0; i < nums.length; i++) {
    // 维护滚动区间 
    for (let j = Math.max(i - k, 0); j < i; j++) {
      if (nums[i] === nums[j]) return true
    }
  }
  return false
};
```

解法2：hash表

思路：维护一个hash表，里面存在长度不超过`k`的元素，当出现重复值的时候，那么说明在`k`的范围内存在重复元素

- 每次遍历判断hash表中是否存在改元素，如果存在说明存重复值
- 如果不存在，将该值存放到hash表中，
- 如果hash长度大于`k`，那么我们需要删除第`nums[i-k]`元素

```js
let containsNearbyDuplicate = function (nums, k) {
  let set = new Set()
  for (let i = 0; i < nums.length; i++) {
    if (set.has(nums[i])) {
      return true
    }
    set.add(nums[i])
    if (set.size > k) set.delete(nums[i - k])
  }
  return false
}
```

