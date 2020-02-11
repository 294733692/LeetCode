### 给定一个大小为 n 的数组，找到其中的多数元素。多数元素是指在数组中出现次数大于 ⌊ n/2 ⌋ 的元素。

 你可以假设数组是非空的，并且给定的数组总是存在多数元素。 

 **示例 1:** 

```
输入: [3,2,3]
输出: 3
```

 **示例 2:** 

```
输入: [2,2,1,1,1,2,2]
输出: 2
```

LeetCode题目地址：[169. 多数元素](https://leetcode-cn.com/problems/majority-element/)

解法1：暴力法

- 找出数组数组长度，并`count`计算数字出现的次数，如果大于数组长度的一半，那么必然是出现次数最多的

```js
/**
 * @param {number[]} nums
 * @return {number}
 */
// 暴力法,会出现超时情况
let majorityElement = function (nums) {
  // 取出数组长度中位数，用于比较出现次数最多的数字
  let majorityCount = nums.length / 2
  // 第一层循环数组
  for (let num of nums) {
    // 计数器，用于存储出现数字的次数
    let count = 0
    // 第二层循环，统计每个数字出现的次数
    for (let ele of nums) {
      // 如果第一层数组和第二次循环的数字相等，计数器+1
      if (ele === num) {
        count += 1
      }
    }
    // 如果计数器的数字大于数组长度的一半，那么这个数字必然是出现次数最多的数组
    if (count > majorityCount) {
      return num
    }
  }
  // 如果不满足上面条件，那么返回-1
  return -1
};
```

解法2：排序

- 使用API进行排序
- 返回数组最中间的数字，这里需要说明一下为什么返回数组最中间的数，如果是出现次数最多的数字，在这道题目上必然是比大于数组长度的一半的。

```js
// 排序
let majorityElement1 = function (nums) {
  nums.sort()
  return nums[parseInt(nums.length / 2)]
}
```

解法3：投票法

- 一次遍历
- 生成一个计数器`count`和一个存储数字的`candidate`
- 把众数记为`+1`，其余数记为`-1`,把这些数相加起来，那么结果必然是大于0的。从这个结果本身也就可以看出来比其他数多就是众数

```js
let majorityElement2 = function (nums) {
  let count = 0
  let candidate = null
  for (let num of nums) {
    if (count === 0) {
      candidate = num
    }
    count += (num === candidate) ? 1 : -1
  }
  return candidate
};
```

