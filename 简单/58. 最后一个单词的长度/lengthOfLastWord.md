### 给定一个仅包含大小写字母和空格 ' ' 的字符串 s，返回其最后一个单词的长度。如果字符串从左向右滚动显示，那么最后一个单词就是最后出现的单词。如果不存在最后一个单词，请返回 0 。

说明：一个单词是指仅由字母组成、不包含任何空格的 最大子字符串。

示例：

```js
输入: "Hello World"
输出: 5
```

LeetCode链接：[58. 最后一个单词的长度](https://leetcode-cn.com/problems/length-of-last-word/)

根据题目意思，只能输入英文字母和空格，那么空格可能出现在首尾，需要对输入的字符串进行处理

- 删除可能出现在首尾的字符串，这里需要用到trim()方法。
- 将处理过后的字符串用空格进行拆分，将其转化为数组。
- 取出最后一位的数组，并返回数组的长度

```js
var lengthOfLastWord = function(s) {
   let arr = s.trim().split(' ') // trim()函数，删除首尾空格
   return arr[arr.length - 1].length
};
```

