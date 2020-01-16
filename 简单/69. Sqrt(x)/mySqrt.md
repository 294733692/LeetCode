### 实现 int sqrt(int x) 函数。计算并返回 x 的平方根，其中 x 是非负整数。由于返回类型是整数，结果只保留整数的部分，小数部分将被舍去。

示例1：

```
输入: 4
输出: 2
```

示例2：

```
输入: 8
输出: 2
说明: 8 的平方根是 2.82842..., 
     由于返回类型是整数，小数部分将被舍去。
```

LeetCode题目：[69. x 的平方根](https://leetcode-cn.com/problems/sqrtx/)

看到这个题目的第一个想法就是原生Api来做

解法1：

```js
let mySqrt2 = function (x) {
  return parseInt(Math.sqrt(x))
}
```

简单快捷.......，但是这样做，又失去了这题的意义；

解法2：二分法

> https://leetcode-cn.com/problems/sqrtx/solution/er-fen-cha-zhao-niu-dun-fa-python-dai-ma-by-liweiw/

```js
/**
 * @param {number} x
 * @return {number}
 */
let mySqrt = function (x) {
  if (x === 0) return 0
  if (x < 4) return 1
  let left = 0
  let right = x
  while (right - left > 1) {
    let mid = parseInt((left + right) / 2)
    if (x / mid < mid) {
      right = mid
    } else {
      left = mid
    }
  }
  return left
}
```

解法2：牛顿法

> 作者：liweiwei
>
> 链接：https://leetcode-cn.com/problems/sqrtx/solution/er-fen-cha-zhao-niu-dun-fa-python-dai-ma-by-liweiw/

```js
let mySqrt1 = function (x) {
  let num = x
  while (num * num > x) {
    num = parseInt((num + x / num) / 2)
  }
  return num
}
```

