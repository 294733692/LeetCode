### 给定一个数组，将数组中的元素向右移动 k 个位置，其中 k 是非负数。

###  **示例 1:** 

```
输入: [1,2,3,4,5,6,7] 和 k = 3
输出: [5,6,7,1,2,3,4]
解释:
向右旋转 1 步: [7,1,2,3,4,5,6]
向右旋转 2 步: [6,7,1,2,3,4,5]
向右旋转 3 步: [5,6,7,1,2,3,4]
```

 **示例 2:** 

```
输入: [-1,-100,3,99] 和 k = 2
输出: [3,99,-1,-100]
解释: 
向右旋转 1 步: [99,-1,-100,3]
向右旋转 2 步: [3,99,-1,-100]
```

**说明:**

- 尽可能想出更多的解决方案，至少有三种不同的方法可以解决这个问题。
- 要求使用空间复杂度为 O(1) 的 **原地** 算法。

LeetCode题目地址：[189. 旋转数组](https://leetcode-cn.com/problems/rotate-array/)

解法1：暴力法

看到题目第一反应就是暴力解决，哈哈~~

最简单的把数组旋转k次，每次将数组旋转一个元素

```js
let rotate1 = function (nums, k) {
  let temp, previos
  for (let i = 0; i < k; i++) {
    previos = nums[nums.length - 1]
    for (let j = 0; j < nums.length; j++) {
      temp = nums[j]
      nums[j] = previos
      previos = temp
    }
  }
  return nums
};
```

解法2：Api解法

根据解法1进行简化，循环一次，只是需要对数数组进行操作

```js
let rotate = function (nums, k) {
  for (let i = k; i > 0; i--) {
    nums.unshift(nums[nums.length - 1])
    nums.pop()
  }
  return nums
};
```

解法3：额外数组

- 创建一个临时数组，将每个存放到正确的位置上，也是就是数组下标`i`的，我们把它放到`(i + k)%nums.length`的位置，然后重新把数组拷贝过去

```js
let rotate2 = function (nums, k) {
  let arr = new Array(nums.length)
  for (let i = 0; i < nums.length; i++) {
    // 这一步很关键  
    arr[(i + k) % nums.length] = nums[i]
  }
  for (let j = 0; j < nums.length; j++) {
    nums[j] = arr[j]
  }
  return nums
};
```

解法4：环状替换（参考官方题解）

题解地址： https://leetcode-cn.com/problems/rotate-array/solution/xuan-zhuan-shu-zu-by-leetcode/ 

```js
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
  k = k % nums.length
  let count = 0
  for (let start = 0; count < nums.length; start++) {
    let current = start
    let prev = nums[start]
    do {
      let next = (current + k) % nums.length
      let temp = nums[next]
      nums[next] = prev
      prev = temp
      current = next
      count++
    } while (start != current)
  }
  return nums
};
```

解法5：反转

当我们旋转数组k次，`k%n`个尾部元素会被移动到头部，剩下的元素后移

```js
// 数组反转
let rotate4 = function (nums, k) {
  // 获得最小次数反转
  k %= nums.length

  let reverse = (nums, start, end) => {
    while (start < end) {
      let temp = nums[start]
      nums[start] = nums[end]
      nums[end] = temp
      start++
      end--
    }
  }

  reverse(nums, 0, nums.length - 1)
  reverse(nums, 0, k - 1)
  reverse(nums, k, nums.length - 1)
    
  return nums
};
```

