### LeetCode 20 给定一个只包括 `'('`，`')'`，`'{'`，`'}'`，`'['`，`']'` 的字符串，判断字符串是否有效。

有效字符串需满足：

1. 左括号必须用相同类型的右括号闭合。
2. 括号必须以正确的顺序闭合。

注意空字符串可被认为是有效字符串

示例：

```js
输入: "()"
输出: true
输入: "()[]{}"
输出: true
输入: "(]"
输出: false
输入: "([)]"
输出: false
输入: "{[]}"
输出: true
```

方法1：暴躁解法

- 直接循环，判断s里面是否包含着三种括号（闭合）
- 如果满足条件，直接替换为空

```js
let isValid = function (s) {
  while (s.indexOf('[]') > -1 || s.indexOf('{}') > -1 || s.indexOf('()') > -1) {
    s = s.replace('{}', '')
    s = s.replace('[]', '')
    s = s.replace('()', '')
  }
  return s == ''
};
```

方法2：栈

![img](https://pic.leetcode-cn.com/Figures/20/20-Valid-Parentheses-Recursive-Property.png)

- 初始化栈stack

- 建立map映射集合

- 依次处理表达式的每个括号

- 遇到括号，判断当前这个括号是否存在于map映射集合里面

- 不存在，就存放到栈里面

- 存在和和栈的最后一个括号进行对比

  - 如果栈的最后一位和当前map集合的括号想对应，说明匹配成功，删除栈的最后一位，继续循环

  - 如果不存在，就继续把当前括号存放到栈里面，继续循环
  
    

```js
/**
 * @param {string} s
 * @return {boolean}
 */
let isValid = function (s) {
  // 初始化栈
  let stack = []
  // 建立字典
  let map = {
    ")": "(",
    "}": "{",
    "]": "[",
  }
  for (let key of s) {
    // 如果key不存在map里面
    // 存放到数组里面  
    if (!map.hasOwnProperty(key)) {
      stack.push(key)
    } else {
      // 如果相等，去和数组的最后一位进行对比，如果相等(说明匹配成功)，删除数组最后一位  
      if (stack[stack.length - 1] === map[key]) {
        stack.pop()
      } else {
      // 如果不相等（括号没闭合，未匹配成功），继续存放到数组    
        stack.push(key)
      }
    }
  }
  return !stack.length
};
```

