### 283. Move Zeroes

给定一个数组 `nums`，编写一个函数将所有 `0` 移动到数组的末尾，同时保持非零元素的相对顺序。

**示例:**

```
输入: [0,1,0,3,12]
输出: [1,3,12,0,0]
```

**说明**:

1. 必须在原数组上操作，不能拷贝额外的数组。
2. 尽量减少操作次数。

解法1：双次循环

思路：

- 第一次循环，利用`j`来记录需要移动`0`的长度，并将非`0`数字保持顺序前移
- 第二次循环，利用`j`来生成`0`

```js
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
let moveZeroes = function (nums) {
  if (!nums) return null
  let j = 0;
  // 第一次循环，j指针记录出现0的次数，将所有非0的数，统统赋值给nums[i]
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      nums[j++] = nums[i]
    }
  }
  // 第一次循环已经将非0的数字，全部移动到数组前面去了。
  // 第二次循环，我们只需要利用j的次数，将0填充到数组尾部即可
  for (let i = j; i < nums.length; i++) {
    nums[i] = 0
  }
  return nums
};

```

解法2：一次性遍历

思路：利用双指针，将非`0`的数字和`0`的数字交换位子

```js

let moveZeroes1 = function (nums) {
  if (!nums) return null
  let j = 0
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      let temp = nums[i]
      nums[i] = nums[j]
      nums[j++] = temp
    }
  }
  return nums
}
```

