### 编写一个函数，以字符串作为输入，反转该字符串中的元音字母。

**示例 1:**

```
输入: "hello"
输出: "holle"
```

**示例 2:**

```
输入: "leetcode"
输出: "leotcede"
```

**说明:**
元音字母不包含字母"y"。

LeetCode题目地址：[345. 反转字符串中的元音字母](https://leetcode-cn.com/problems/reverse-vowels-of-a-string/)

注意：这里的元音字母包括`aeiouAEIOU`。

解法1：循环

思路：找出给定字符串中出现的元音字母，将出现的元音字母给push到数组里面，下次循环和出现的元音字母做替换

```js
/**
 * @param {string} s
 * @return {string}
 */
let reverseVowels = function (s) {
  let res = s.split('')
  let arr = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']
  let temp = []

  for (let i = 0; i < res.length; i++) {
    if (arr.includes(s[i])) temp.push(s[i])
  }
  for (let i = 0; i < res.length; i++) {
    if (arr.includes(res[i])) {
      res[i] = temp.pop()
    }
  }
  return res.join('')
}
```



解法2：优化解法1

上个解法我们利用循环来取出出现的元音字母，这里我们可以使用正则进行匹配。

```js
/**
 * @param {string} s
 * @return {string}
 */
let reverseVowels = function (s) {
  let vowels = []
  if (s.match(/[aeiou]/ig)) {
    vowels = s.match(/[aeiou]/ig)
  } else {
    return s
  }
  return s.replace(/[aeiou]/ig, () => {
    return vowels.pop()
  })
};
```

