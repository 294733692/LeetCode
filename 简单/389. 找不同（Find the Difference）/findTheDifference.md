### 给定两个字符串 s 和 t，它们只包含小写字母。

字符串 ***t\*** 由字符串 ***s\*** 随机重排，然后在随机位置添加一个字母。

请找出在 ***t*** 中被添加的字母。

**示例:**

```
输入：
s = "abcd"
t = "abcde"

输出：
e

解释：
'e' 是那个被添加的字母。
```

LeetCode题目地址：[389. 找不同](https://leetcode-cn.com/problems/find-the-difference/)

解法1：hash表

思路，遍历s，将出现的字母和次数记录到map中，然后遍历t，如果map里面有当前字符串，那么出现次数-1，相当于把该字母从t中取出掉了，如果记录到或者是该字母出现次数为1了，那么说明就是新增的

```js
/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
let findTheDifference = function (s, t) {
  let map = new Map()
  for (let key of s) {
    if (map.has(key)) {
      map.set(key, map.get(key) + 1)
    } else {
      map.set(key, 1)
    }
  }
  for (let key of t) {
    if (map.get(key)) {
      map.set(key, map.get(key) - 1)
    } else {
      return key
    }
  }
}
```

解法2：正则匹配

思路挺简单的，就是遍历s，用出现的字母对t进行单个删除。最后剩下的就是新添加的元素

```js
// 正则
let findTheDifference1 = function (s, t) {
  for (let key of s) {
    t = t.replace(new RegExp(key), '')
  }
  return t
}
```



解法3：ASCII值

思路：就是利用字符串`s`的ascll值总和和`t`ascll值总和的差值，找出新增加的字母

```js
// ASCII值
let findTheDifference2 = function (s, t) {
  let res = 0
  for (let key of t) {
    res += key.charCodeAt()
  }
  for (let key of s) {
    res -= key.charCodeAt()
  }
  return String.fromCharCode(res)
}
```

