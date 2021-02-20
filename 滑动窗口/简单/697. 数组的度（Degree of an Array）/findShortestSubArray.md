给定一个非空且只包含非负数的整数数组 `nums`，数组的度的定义是指数组里任一元素出现频数的最大值。

你的任务是在 `nums` 中找到与 `nums` 拥有相同大小的度的最短连续子数组，返回其长度。

**示例 1：**

```
输入：[1, 2, 2, 3, 1]
输出：2
解释：
输入数组的度是2，因为元素1和2的出现频数最大，均为2.
连续子数组里面拥有相同度的有如下所示:
[1, 2, 2, 3, 1], [1, 2, 2, 3], [2, 2, 3, 1], [1, 2, 2], [2, 2, 3], [2, 2]
最短连续子数组[2, 2]的长度为2，所以返回2.
```

**示例 2：**

```
输入：[1,2,2,3,1,4,2]
输出：6
```

LeetCode题目地址：[697. 数组的度](https://leetcode-cn.com/problems/degree-of-an-array/)

题目解析：

题目的意思是找出数组中出现频率最高的数的，并返回他们的最短距离

示例2中，`2`出现了`3`次，出现频率最高，计算第一次出现的位置和最后一次出现的位置，长度为6

```js
/**
 * @param {number[]} nums
 * @return {number}
 */
var findShortestSubArray = function(nums) {
  let map = {}
  for (const [index, num] of nums.entries()) {
    // 0：该数字出现的频率
    // 1：该数第一次出现的位置
    // 2：该数字最后一次出现的位置
    if (num in map) { // 如果map里面有num
      map[num][0]++ // 修改num出现的次数
      map[num][2] = index // 最后一次出现的位置
    } else {
      map[num] = [1, index, index] // 记录num第一次出现
    }
  }
  console.log(map)
  let maxNum = 0, minLen = 0
  for (const [count, left, right] of Object.values(map)) {
    if (maxNum < count) { // 如果当前记录最大的次数小于该数的出现次数
      maxNum = count
      minLen = right - left + 1 // 计算出现的最小长度，因为数组是从0开始，所以需要最小长度需要+1
    } else if (maxNum === count) { // 如果出现最大次数和该数的出现次数相等
      // 比较两个数出现的最小距离
      if (minLen > (right - left + 1)) {
        minLen = right - left + 1
      }
    }
  }
  return minLen
};
```

