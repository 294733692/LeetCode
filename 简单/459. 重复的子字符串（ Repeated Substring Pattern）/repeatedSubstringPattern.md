### 给定一个非空的字符串，判断它是否可以由它的一个子串重复多次构成。给定的字符串只含有小写英文字母，并且长度不超过10000。

**示例 1:**

```
输入: "abab"

输出: True

解释: 可由子字符串 "ab" 重复两次构成。
```

**示例 2:**

```
输入: "aba"

输出: False
```

示例 3:

```
输入: "abcabcabcabc"

输出: True

解释: 可由子字符串 "abc" 重复四次构成。 (或者子字符串 "abcabc" 重复两次构成。)
```

leetCode题目地址：[459. 重复的子字符串](https://leetcode-cn.com/problems/repeated-substring-pattern/)

解法1：构造法（掐头去尾留中间）

1、复制原字符串一份，组成新的字符串

2、掐头去尾留中间

3、如果剩下的字符串还包换原字符串，说明符合提议



举例：

- s = abc|abc; // 2abc
- s+s = abc|abc|abc|abc; // 4abc
- s1 = a|bcabcabcab|c = bcabcabcab; // bc + 2*abc + ab

```js
/**
 * @param {string} s
 * @return {boolean}
 */
// 数学法
let repeatedSubstringPattern = function (s) {
  return (s + s).slice(1, -1).includes(s)
};
```



解法2：正则匹配

```js
// 正则
let repeatedSubstringPattern1 = function (s) {
  let reg = /^(\w+)\1+$/
  return reg.test(s)
}
```
