给你 n 个非负整数 a1，a2，...，an，每个数代表坐标中的一个点 (i, ai) 。在坐标内画 n 条垂直线，垂直线 i 的两个端点分别为 (i, ai) 和 (i, 0)。找出其中的两条线，使得它们与 x 轴共同构成的容器可以容纳最多的水。

**说明：**你不能倾斜容器，且 *n* 的值至少为 2。

![img](https://aliyun-lc-upload.oss-cn-hangzhou.aliyuncs.com/aliyun-lc-upload/uploads/2018/07/25/question_11.jpg)

**示例：**

```
输入：[1,8,6,2,5,4,8,3,7]
输出：49
```

leetCode题目地址：[11. 盛最多水的容器](https://leetcode-cn.com/problems/container-with-most-water/)

解法1：双指针

思路：用题目给定的例子来说`[1,8,6,2,5,4,8,3,7]`，

- 从两端开始`1`和`7`，当前最大的容水量为`Math.min(1, 7) * 8`，这里我们知道木桶效应，木桶能装多少水，取决于木桶当前最短的那个木块，所以我们这里要去最小值。

那么这个时候我们会去移动那个木块呢，一般来说，都是会去移动最小的那块木板（这个时候就是`1`指针，左边那个指针）。

​	从这里我们可以得出一个结论：

> 当前最大容水量 = 当前两个指针的较小值 * 两个指针之间的距离

所有，我们会移动当前两个指针的较小值，在移动的过程中，需要把当前存储的容水量使用`curArea`给存储起来，和存储的最大容水量做比较。

```js
/**
 * @param {number[]} height
 * @return {number}
 */
let maxArea = function (height) {
  let left = 0
  let right = height.length - 1
  let maxArea = 0 // 记录最大容量
  while (left < right) {
    // 记录当前最大area
    let currArea = Math.min(height[left], height[right]) * (right - left)
    // 比较当前area和记录最大的area
    maxArea = Math.max(currArea, maxArea)
    height[left] <= height[right] ? left += 1 : right -= 1
  }
  return maxArea
};
console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]));

```

