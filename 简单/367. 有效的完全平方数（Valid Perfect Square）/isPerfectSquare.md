### 给定一个正整数 *num*，编写一个函数，如果 *num* 是一个完全平方数，则返回 True，否则返回 False。

**说明：**不要使用任何内置的库函数，如 `sqrt`。

**示例 1：**

```
输入：16
输出：True
```

**示例 2：**

```
输入：14
输出：False
```

LeetCode题目地址：[367. 有效的完全平方数](https://leetcode-cn.com/problems/valid-perfect-square/)

解法1：二分法

求完全平方数，举个粒子：`2*2=4`和`4*4=16`，从这个例子上我们可以看到，平方数小于最后结果（16）的一半还小。所以我们可以从中间查找

- 当`left <=right`的时候。我们可以猜测一个中间数，也就是`(left + right) >>>1`的一半。有下面三种情况
  - 如果`squared = mid * mid =num`的时候，那么必然是平方数；那么返回true
  - 如果`squared < num`。说明猜测结果小于`num`，那么我们可以试着将`left`的变大，变为`left = mid + 1`
  - 如果`squared > num`，说明猜测结果过大，需要将`right`给减小，变为`right = mid - 1`
- 如果没出现上面那三种情况，该数不是完全平方数。直接返回false

```js
/**
 * @param {number} num
 * @return {boolean}
 */
// 二分法
let isPerfectSquare = function (num) {

  let left = 0
  let right = num >>> 1
  let mid = 0
  let squared = 0

  while (left <= right) {
    mid = (left + right) >>> 1
    squared = mid * mid

    if (squared === num) {
      return true
    } else if (squared < num) {
      left = mid + 1
    } else {
      right = mid - 1
    }
  }
  return false
};
```

看看其他大佬的解法

解法2：牛顿迭代法

思想就是：从一个初始近似值开始，然后做一系类的改进的逼近根的操作

```js
let isPerfectSquare1 = function (num) {
  if (num < 2) return true
  let mid = num >>> 1
  while (mid * mid > num) {
    mid = parseInt((mid + parseInt(num /mid)) / 2)
  }
  return (mid * mid) === num
}
```

