### 给定一个正整数，返回它在 Excel 表中相对应的列名称。

 例如， 

```
   1 -> A
    2 -> B
    3 -> C
    ...
    26 -> Z
    27 -> AA
    28 -> AB 
    ...
```

 **示例 1:** 

```
输入: 1
输出: "A"
```

 **示例 2:** 

```
输入: 28
输出: "AB"
```

 **示例 3:** 

```
输入: 701
输出: "ZY"
```

LeetCode题目地址：[168. Excel表列名称](https://leetcode-cn.com/problems/excel-sheet-column-title/)

解法1：10进制转化26进制

思路：本质上就是将10进制转化为26进制，这里需要注意的是`A`是从1开始的，所以我们要在`26进制`的基础上+1，需要知道的是`A`的ASCII是从`65`开始的，所以我们在计算进制的时候，需要加上`65`.

- 处理边界：`A`从1开始的。所以满足条件`n>0`
- `10进制`转化`26`进制，这里需要从`27 - 1`为一个轮回
- `n % 26 + 65`，ASCll的A是从`65`开始，所以需要加上`65`
-  最后，`27` 转了一圈，应该换掉：`(n - 1) / 26`，得到的就是它处在新一轮的第 `1` 个位置。 

```js
/**
 * @param {number} n
 * @return {string}
 */
let convertToTitle = function (n) {
  let res = ''
  while (n > 0) {
    n--
    res = String.fromCharCode(n % 26 + 65) + res
    n = parseInt(n / 26)
  }
  return res
};
console.log(convertToTitle(701))
```

