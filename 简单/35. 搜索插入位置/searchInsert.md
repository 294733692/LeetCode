### 给定一个排序数组和一个目标值，在数组中找到目标值，并返回其索引。如果目标值不存在于数组中，返回它将会被按顺序插入的位置。
你可以假设数组中无重复元素。

示例1：

```js
输入: [1,3,5,6], 5
输出: 2
```

示例1：

```js
输入: [1,3,5,6], 2
输出: 1
```

示例1：

```js
输入: [1,3,5,6], 7
输出: 4
```
示例1：

```js
输入: [1,3,5,6], 0
输出: 0
```

刚开始看到这个题目，第一个想法是先用indexOf判断target是否在nums数组里面，存在直接返回相等数字的下标，不存在在遍历数字，判断第一个比target大的nums的数字的下标

解法1： 暴力法

```js
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
let searchInsert = function (nums, target) {
  let i = nums.indexOf(target)  // indexOf存在返回index索引，不存在为-1
  if (i !== -1) return i

  for (let j = 0; j < nums.length; j++) {
    // 题目说是一个有序数组，所以不存在的时候，必然是插入在第一个比target大的那位
    if (nums[j] >= target) {
      return j
    }
  }
  // 如果nums不存在比target大的数字，说明插入在最后一个，直接返回nums的长度
  // 下标是从0开始的，所以返回及长度，刚好是插入的位子  
  return nums.length
};
```

解法1对于数组长度较小的时候，执行速度较快，当数组长度较大的时候，使用暴力法很费时间，这里我们采用二分法来进行扫描查找



解法2：

```js
let searchInsert = function (nums, target) {
  let left = 0
  let right = nums.length - 1
  while(left <= right){
    let mid = parseInt((left + right)/2) // 找中间数，去整数
    if (nums[mid] === target) {
        return mid
    } else if (nums[left] < target) {
        left = mid + 1       
	} else {
        right = mid - 1
    }
  }
  return left  
};
```

