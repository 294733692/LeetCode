数字 *n* 代表生成括号的对数，请你设计一个函数，用于能够生成所有可能的并且 **有效的** 括号组合。

**示例：**

```
输入：n = 3
输出：[
       "((()))",
       "(()())",
       "(())()",
       "()(())",
       "()()()"
     ]
```

LeetCode题目地址：[22. 括号生成](https://leetcode-cn.com/problems/generate-parentheses/)

解法1：深度优先算法（回溯）+ 剪枝

![LeetCode 第 22 题：“括号生出”题解配图.png](https://pic.leetcode-cn.com/7ec04f84e936e95782aba26c4663c5fe7aaf94a2a80986a97d81574467b0c513-LeetCode%20%E7%AC%AC%2022%20%E9%A2%98%EF%BC%9A%E2%80%9C%E6%8B%AC%E5%8F%B7%E7%94%9F%E5%87%BA%E2%80%9D%E9%A2%98%E8%A7%A3%E9%85%8D%E5%9B%BE.png)

思路：

- 当剩余的左右括号都大于0的时候，才会产生新的分支
- 产生左分支的时候，需要判断是有还有剩余的左括号
- 产生右分支的时候，右分支需要收到左分支的限制，也就是说，剩余右括号大于剩余左括号的时候，才能继续拼接右括号
- 结束条件：当剩余左右括号数量都为0的时候，就终止函数的执行。

```js
/**
 * @param {number} n
 * @return {string[]}
 */
// 深度遍历（回溯） + 减枝
let generateParenthesis = function (n) {
  let res = []
  let _dfs = (left, right, curStr) => {
    // 左右括号都不剩余，递归终止
    if (left === 0 && right === 0) {
      res.push(curStr)
      return
    }
    // 如果左括号还有剩余，那么继续拼接左括号
    if (left > 0) _dfs(left - 1, right, curStr + '(')
    // 如果剩余右括号大于剩余左括号的话，那么继续拼接右括号
    if (right > left) _dfs(left, right - 1, curStr + ')')
  }
  _dfs(n, n, '')
  return res
};

console.log(generateParenthesis(3));
```

