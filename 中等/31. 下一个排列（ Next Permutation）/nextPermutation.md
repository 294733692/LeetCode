实现获取下一个排列的函数，算法需要将给定数字序列重新排列成字典序中下一个更大的排列。

如果不存在下一个更大的排列，则将数字重新排列成最小的排列（即升序排列）。

必须**[原地](https://baike.baidu.com/item/原地算法)**修改，只允许使用额外常数空间。

以下是一些例子，输入位于左侧列，其相应输出位于右侧列。

```
1,2,3 → 1,3,2
3,2,1 → 1,2,3
1,1,5 → 1,5,1
```

leetCode題目地址：[31. 下一个排列](https://leetcode-cn.com/problems/next-permutation/)

解法：倒序一次性遍历

题目的意思就是让我们求出[字典序](https://baike.hk.xileso.top/wiki/字典序),

具体思路：

- 从后往前找到第一个【相邻升序对】，即`A[i]<A[i+1]`。此时`A[i+1,end)`为降序。
- 在区间`[i+1,end)`中，从后往前找到第一个大于`A[i]`的元素`A[j]`
- 交换`A[i]`和`A[j]`，此时`A[i+1,end)`一定还是降序，因为`A[j]`是从右侧起第一个大于`A[i]`的值
- 反转`A[i+1,end)`，变成升序

```js
let nextPermutation = function (nums) {
  let _reverse = (nums, start) => {
    let i = start, j = nums.length - 1;
    while (i < j) {
      _swap(nums, i, j);
      i++;
      j--;
    }
  }

  // 双指针交换数组位子
  let _swap = (nums, i, j) => {
    let temp = nums[i]
    nums[i] = nums[j]
    nums[j] = temp
  }

  let i = nums.length - 2;
  while (i >= 0 && nums[i + 1] <= nums[i]) {
    i--;
  }
  if (i >= 0) {
    let j = nums.length - 1;
    while (j >= 0 && nums[j] <= nums[i]) {
      j--;
    }
    _swap(nums, i, j);
  }
  _reverse(nums, i + 1);
};
```

解法2：

```js
// 倒序
let nextPermutation1 = function (nums) {
  let i = nums.length - 2
  while (i >= 0 && nums[i + 1] <= nums[i]) {
    i--
  }
  if (i >= 0) {
    let j = nums.length - 1
    while (j >= 0 && nums[j] <= nums[i]) {
      j--
    }
    // 交换两个数组的值
    [nums[i], nums[j]] = [nums[j], nums[i]]
  }
  i++
  let j = nums.length - 1
  while (i < j) {
    [nums[i], nums[j]] = [nums[j], nums[i]]
    i++;
    j--;
  }
  return nums
}
```

