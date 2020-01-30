### 给定一个非负索引 k，其中 k ≤ 33，返回杨辉三角的第 k 行。

 ![img](https://upload.wikimedia.org/wikipedia/commons/0/0d/PascalTriangleAnimated2.gif) 

 在杨辉三角中，每个数是它左上方和右上方的数的和。 

示例：

```
输入: 3
输出: [1,3,3,1]
```

LeetCode题目链接：[119. 杨辉三角 II](https://leetcode-cn.com/problems/pascals-triangle-ii/)

解法1：暴力法

这个解法和118题的解法相识，把杨辉三角的值全部给遍历出来，然后需要返回的那一项

```js
/**
 * @param {number} rowIndex
 * @return {number[]}
 */
let getRow = function (rowIndex) {
  let res = []
  for (let i = 0; i <= rowIndex; i++) {
    let arrs = [1] // 初始化当前是数组第一位数
    let prevArr = res[i - 1] || 0
    for (let j = 0; j < rowIndex; j++) {
      arrs.push(prevArr[j] + (prevArr[j + 1] || 0))
    }
    res.push(arrs)
  }
  return res[rowIndex]
};
```

解法2：上一个解法是通过上一行推到出下一行的数据，这里我们可以直接覆盖上一行的内容就可以了。

```js
let resultArr = [1];
  for (let i = 0; i < rowIndex; i++) {
    resultArr.unshift(0);
    for (let j = 0; j < i + 1; j++) {
      resultArr[j] = resultArr[j] + resultArr[j + 1];
    }
  }
  return resultArr;
```

解法3：因为是对称的是，折半计算

```js
var getRow2 = function (numRows) {
  const result = [];
  for (let i = 0; i < numRows + 1; i++) {
    const subArr = [1];
    for (let j = 1; j <= (i >>> 1); j++) {
      subArr[j] = result[i - 1][j - 1] + result[i - 1][j];
    }
    for (let k = (i >>> 1) + 1; k <= i; k++) {
      subArr[k] = subArr[i - k]
    }
    result.push(subArr);
  }
  return result[numRows]
};
```

