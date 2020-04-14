### 你总共有 n 枚硬币，你需要将它们摆成一个阶梯形状，第 k 行就必须正好有 k 枚硬币。

给定一个数字 *n*，找出可形成完整阶梯行的总行数。

*n* 是一个非负整数，并且在32位有符号整型的范围内。

**示例 1:**

```
n = 5

硬币可排列成以下几行:
¤
¤ ¤
¤ ¤

因为第三行不完整，所以返回2.
```



**示例 2:**

```
n = 8

硬币可排列成以下几行:
¤
¤ ¤
¤ ¤ ¤
¤ ¤

因为第四行不完整，所以返回3.
```

LeetCode题目地址：[441. 排列硬币](https://leetcode-cn.com/problems/arranging-coins/)



解法1：暴力法

根据题目说的，组成梯形，第`k`行有`k`的硬币，那么这样，我们定义一个`count`，来存放每次循环组成梯形的最大值，如果`count > n`，那就说明组成的梯形不完整，就返回结果；这里的`i`代表第`k`行

```js
/**
 * @param {number} n
 * @return {number}
 */
let arrangeCoins = function (n) {
  let i = 0
  let count = 0
  if (n === 1) return 1

  for (i; i <= n; i++) {
    count += i
    if (count > n) break
  }
  return i - 1
};
```



解法2：二分法

这里使用二分法查找，有一个需要注意的地方是我们需要找到二分法的判断条件。这种题目一般来说有一个数学规律，

- 1  =》 1 	=》（1 + 1）* 1 / 2  = 1
- 2  =》 3     =》（1 + 2）* 2 / 2  = 3
- 3  =》 6 	=》（1 + 3）* 3 / 2  =  6
- 4  =》 10 	=》（1 + 4）* 4 / 2  = 10
- 5  =》 15 	=》（1 + 5）* 5 / 2  = 15 
- n  =》 （1 + n）* n / 2 

从上面我们可以推导出第`k`行组成的硬币数。

剩下的就是二分法查找的基本套路

```js
let arrangeCoins1 = function (n) {
  if (n === 0) return 1
  let left = 0
  let right = n

  while (left <= right) {
    let mid = left + ((right - left) >> 1)
    let trapezoidMidCount = (1 + mid) * mid / 2
    if (trapezoidMidCount === n) {
      return mid
    } else if (trapezoidMidCount < n) {
      left = mid + 1
    } else if (trapezoidMidCount > n) {
      right = mid - 1
    }
  }
  return right
}
```

