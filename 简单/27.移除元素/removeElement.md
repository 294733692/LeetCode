### 给定一个数组 nums 和一个值 val，你需要原地移除所有数值等于 val 的元素，返回移除后数组的新长度。

不要使用额外的数组空间，你必须在**[原地](https://baike.baidu.com/item/原地算法)修改输入数组**并在使用 O(1) 额外空间的条件下完成

元素的顺序可以改变。你不需要考虑数组中超出新长度后面的元素。

示例1：

```js
给定 nums = [3,2,2,3], val = 3,
函数应该返回新的长度 2, 并且 nums 中的前两个元素均为 2。
你不需要考虑数组中超出新长度后面的元素
你不需要考虑数组中超出新长度后面的元素。
```

示例2：

```js
给定 nums = [0,1,2,2,3,0,4,2], val = 2,
函数应该返回新的长度 5, 并且 nums 中的前五个元素为 0, 1, 3, 0, 4。
注意这五个元素可为任意顺序。
你不需要考虑数组中超出新长度后面的元素。
```

解法1：双指针

这里的解法和[26.删除排序数组中的重复项](https://github.com/294733692/LeetCode/blob/master/%E7%AE%80%E5%8D%95/26.%20%E5%88%A0%E9%99%A4%E6%8E%92%E5%BA%8F%E6%95%B0%E7%BB%84%E4%B8%AD%E7%9A%84%E9%87%8D%E5%A4%8D%E9%A1%B9/removeDuplicates.md)，思路基本相同

```js
var removeElement = function(nums, val) {
  if (nums.length === 0) return 0
  let i = 0
  for (let j = 0; j < nums.length; j++) {
    if(nums[j] !== val) {
      // 这里需要注意的是，i的增加需要在nums[i]的nums[j]的后面
      nums[i] = nums[j]
      i++
    }
  }
  return i
};
```

解法2：双指针（当要删除的元素很少时）

- 当`nums[j]=== val`的时候，将当前元素和最后一位元素进行交换，并释放最后一个元素，这样实际让数组的长度 -1
- 需要注意到的是，交换的最后一个元素可能就是需要移除的的元素，但是，在下一次迭代的时候，会检查这个元素的

```js
var removeElement = function (nums, val) {
  if (nums.length === 0) return 0
  let n = nums.length
  let i = 0
  while (i < n) {
    if (nums[i] === val) {
      nums[i] = nums[n - 1]
      //　数组长度－１，实际上就是上面我们检查过的第ｉ位数，后面迭代不需要再次检查
      n--
    } else {
      // 标记删除的的数组长度
      i++
    }
  }
  return i
};
```

