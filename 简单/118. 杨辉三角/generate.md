### 给定一个非负整数 numRows，生成杨辉三角的前 numRows 行。

 ![img](https://upload.wikimedia.org/wikipedia/commons/0/0d/PascalTriangleAnimated2.gif) 

 在杨辉三角中，每个数是它左上方和右上方的数的和 

 **示例:** 

```
输入: 5
输出:
[
     [1],
    [1,1],
   [1,2,1],
  [1,3,3,1],
 [1,4,6,4,1]
]
```

LeetCode题目地址：[118. 杨辉三角](https://leetcode-cn.com/problems/pascals-triangle/)

解法1：双循环

- 第一层循环用来取出上一个数组
- 第二层循环用来生成当前数组

```js
/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
  const res = [];
  for (let i = 0; i < numRows; i++) {
    if (i === 0) {
      res.push([1]); // 第一行 基础行
    } else {
      const arrs = [1]; // 初始化当前行的第一个元素为1
      const preRows = res[i - 1]; // 上一行数据
      for (let j = 0; j < preRows.length; j++) {
        // 上一行遍历获取左上方和右上方的数的和，如果第j+1位不存在，就为0
        arrs.push(preRows[j] + (preRows[j + 1] || 0));
      }
      res.push(arrs);
    }
  }
  return res;  
};
```

解法2：左右对半循环，计算只用一半时间

```js
var generate1 = function (numRows) {
  const result = [];
  for (let i = 0; i < numRows; i++) {
    const subArr = [1];
    for (let j = 1; j <= (i >>> 1); j++) {
      subArr[j] = result[i - 1][j - 1] + result[i - 1][j];
    }
    for (let k = (i >>> 1) + 1; k <= i; k++) {
      subArr[k] = subArr[i - k]
    }
    result.push(subArr);
  }
  return result
};
```

解法3：公式法

-  二项式每一项的系数对应杨辉三角的第n行。就直接通过计算二项式的系数，算出该行的值。 

```js
/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
  let res = [];
  for (let i = 0; i < numRows; i++) {
    res[i] = [];
    for (let j = 0; j < i + 1; j++) {
      res[i].push(C(i, j));
    }
  }
  return res;
};
/**
* 组合数
* @param n
* @param r
* @returns {number}
* @constructor
*/
const C = function (n, r) {
  if (n === 0) return 1;
  return F(n) / F(r) / F(n - r);
}
/**
* 阶乘
* @param n
* @returns {number}
* @constructor
*/
const F = function (n) {
  var s = 1;
  for (var i = 1; i <= n; i++) {
    s *= i;
  }
  return s;
}

// 阶乘也可以用尾递归写：
var factor = function (n, total = 1) {
  if (n === 1) {
    return 1
  } else {
    return factor(n - 1, n * total)
  }
}
```

