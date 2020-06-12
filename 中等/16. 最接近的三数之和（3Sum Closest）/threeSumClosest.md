给定一个包括 n 个整数的数组 nums 和 一个目标值 target。找出 nums 中的三个整数，使得它们的和与 target 最接近。返回这三个数的和。假定每组输入只存在唯一答案。

**示例：**

```
输入：nums = [-1,2,1,-4], target = 1
输出：2
解释：与 target 最接近的和是 2 (-1 + 2 + 1 = 2) 。
```

**提示：**

- `3 <= nums.length <= 10^3`
- `-10^3 <= nums[i] <= 10^3`
- `-10^4 <= target <= 10^4`

leetCode题目地址：[16. 最接近的三数之和](https://leetcode-cn.com/problems/3sum-closest/)

解法：排序+双指针

- 先对数组进行排序，从大到小
- 题目要求的是三个数之和，开始先求出一个前3位的值，用于和后面做比较
- 形成一个固定值`nums[i]`
- 在将前指针向前移动一位`start = i+1`，在去数组最后一位`end = nums.length - 1`
- 计算出当前循环三个数的和，与`target`目标数值做比较，如果当前和和`target`更接近，更新`res`
- 接着判断当前和是大于还是小于`target`目标数值，小于说明`start++`可能会有更接近的值，大于这`end--`，等于直接返回
- 循环结束，返回`res`结果



```js
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
let threeSumClosest = function (nums, target) {
  nums.sort((a, b) => a -b)
  let res = nums[0] + nums[1] + nums[2] // 三个数之和，记录前3个之和，存放初始数据
  for (let i = 0; i < nums.length - 1; i++) {
    let start = i + 1, end = nums.length - 1
    while (start < end) {
      let sum = nums[start] + nums[end] + nums[i]
      // 求出当前循环中最接近target的值
      if (Math.abs(target - sum) < Math.abs(target - res)) res = sum
      // 如果当前结果大于target值，说明前面的值可能有跟适合的数值
      if (sum > target) {
        end--
      } else if (sum < target) {
        start++
      } else {
        return res
      }
    }
  }
  return res
};
console.log(threeSumClosest([1,2,4,8,16,32,64,128], 82))
```

