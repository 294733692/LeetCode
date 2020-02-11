### 给定一个Excel表格中的列名称，返回其相应的列序号。

 例如， 

```
    A -> 1
    B -> 2
    C -> 3
    ...
    Z -> 26
    AA -> 27
    AB -> 28 
    ...
```

 **示例 1:** 

```
输入: "A"
输出: 1
```

 **示例 2:** 

```
输入: "AB"
输出: 28
```

 **示例 3:** 

```
输入: "ZY"
输出: 701
```

leetCode题目地址：[171. Excel表列序号](https://leetcode-cn.com/problems/excel-sheet-column-number/)

这道题和[168. Excel表列名称](https://leetcode-cn.com/problems/excel-sheet-column-title/)，类式，只是给出英文字符求出对应的数字

解法：

- 大体思路和168题基本类式，转化为26进制，只不过是反向求解
- 遍历字符串，将字符串转化为ASCLL值，因为是要转化为26进制，所以要减去A，也就是减去`65`，在加上是从1开始的，所以还要减去1

```js
/**
 * @param {string} s
 * @return {number}
 */
var titleToNumber = function(s) {
  let res = 0
  for (let i = 0; i < s.length; i++) {
    let num = s[i].charCodeAt() - 64
    res = res * 26 + num
  }
  return res    
};
```

