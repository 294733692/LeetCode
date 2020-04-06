### 给定一个包含大写字母和小写字母的字符串，找到通过这些字母构造成的最长的回文串。

在构造过程中，请注意区分大小写。比如 `"Aa"` 不能当做一个回文字符串。

**注意:**
假设字符串的长度不会超过 1010。

**示例 1:**

```
输入:
"abccccdd"

输出:
7

解释:
我们可以构造的最长的回文串是"dccaccd", 它的长度是 7。
```

LeetCode题目地址：[409. 最长回文串](https://leetcode-cn.com/problems/longest-palindrome/)

解法1：

题目让我们根据给出的字符串组成最长的回文，回文的构成有以下几种组合

- `abba`，对应的回文中心就是`ab|ba`
- `abcba`，对应的回文中心就是`ab(c)ba`

我们可以从上面发现一个回文中，最多一个字符出现奇数次，其余的字符都是出现偶数次。

我们可以根据这个规律来做

```js
/**
 * @param {string} s
 * @return {number}
 */
let longestPalindrome = function (s) {
  let set = new Set()
  let count = 0
  for (let i = 0; i < s.length; i++) {
    // 如果set集合里面存在当前字符串，说明字符构成偶数个，count+2
    // 并且删除当前set集合的字符串  
    if (set.has(s[i])) {
      count += 2
      set.delete(s[i])
    } else {
      // 不存在，将该字符添加进去  
      set.add(s[i])
    }
  }
  // 如果set里面存在字符，说明里面有出现过一次的字符：那么根据上面特性，让count长度+1
  // 如果长度为0，说明符合第一个情况，直接返回count即可 
  return set.size > 0 ? count + 1 : count
};

console.log(longestPalindrome1('abccccdd'));
```

