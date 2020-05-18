给定一个单词列表，只返回可以使用在键盘同一行的字母打印出来的单词。键盘如下图所示。

<img src="https://assets.leetcode-cn.com/aliyun-lc-upload/uploads/2018/10/12/keyboard.png" alt="American keyboard" style="zoom:80%;" />

**示例：**

```
输入: ["Hello", "Alaska", "Dad", "Peace"]
输出: ["Alaska", "Dad"]
```

**注意：**

1. 你可以重复使用键盘上同一字符。
2. 你可以假设输入的字符串将只包含字母。

LeetCode题目地址：[500. 键盘行](https://leetcode-cn.com/problems/keyboard-row/)

解法：正则

```js
/**
 * @param {string[]} words
 * @return {string[]}
 */
let findWords = function (words) {
  let reg = /^([qwertyuiop]+|[asdfghjkl]+|[zxcvbnm]+)$/i

  return words.filter(item => {
    return reg.test(item.toLowerCase())
  })
};
console.log(findWords(["Hello", "Alaska", "Dad", "Peace"]));

```

