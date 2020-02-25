###  给定一个整数数组，判断是否存在重复元素。 

 如果任何值在数组中出现至少两次，函数返回 true。如果数组中每个元素都不相同，则返回 false。 

 **示例 1:** 

```
输入: [1,2,3,1]
输出: true
```

 **示例 2:** 

```
输入: [1,2,3,4]
输出: false
```

**示例 3:**

```
输入: [1,1,1,3,3,4,3,2,4,2]
输出: true
```

LeetCode题目地址：[217. 存在重复元素](https://leetcode-cn.com/problems/contains-duplicate/)

解法1：API解法

思路：利用indexOf方法判断判断当前元素是否在数组种有重复。这种太费时间了

```js
/**
 * @param {number[]} nums
 * @return {boolean}
 */
let containsDuplicate = function (nums) {
  for (let i = 0; i < nums.length; i++) {
    console.log(nums.indexOf(nums[i]) !== i);
    if (nums.indexOf(nums[i]) !== i) {
      return true
    }
  }
  return false
};
```

解法2：去重法

思路：使用`set`对数组进行去重，如果数组中有重复数组，那么去重后的数组长度小于原数组长度

```js
let containsDuplicate1 = function (nums) {
  return new Set(nums).size !== nums.length
}
```

解法3：hash表解法

思路：原理和去重类似，如果当前数字在hash表里面，说明有重复，返回`true`，反之返回`false`

```js
// hast表解法
let containsDuplicate2 = function (nums) {
  let set = new Set()
  for (let i = 0; i < nums.length; i++) {
    if (set.has(nums[i])) {
      return true
    } else {
      set.add(nums[i])
    }
  }
  return false
}
```

解法4：排序

思路：对数组进行排序，如果数组中有相同的元素，那么想相同数必然就在旁边一位

```js
let containsDuplicate3 = function (nums) {
  nums.sort()
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === nums[i + 1]) {
      return true
    }
  }
  return false
}
```

