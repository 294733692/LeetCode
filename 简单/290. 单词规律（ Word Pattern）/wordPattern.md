### 给定一种规律 `pattern` 和一个字符串 `str` ，判断 `str` 是否遵循相同的规律。

这里的 **遵循** 指完全匹配，例如， `pattern` 里的每个字母和字符串 `str` 中的每个非空单词之间存在着双向连接的对应规律。

**示例1:**

```
输入: pattern = "abba", str = "dog cat cat dog"
输出: true
```

**示例 2:**

```
输入:pattern = "abba", str = "dog cat cat fish"
输出: false
```

**示例 3:**

```
输入: pattern = "aaaa", str = "dog cat cat dog"
输出: false
```

**示例 4:**

```
输入: pattern = "abba", str = "dog dog dog dog"
输出: false
```

LeetCode题目地址：[290. 单词规律](https://leetcode-cn.com/problems/word-pattern/)

解法1：hash表解法

```js
/**
 * @param {string} pattern
 * @param {string} str
 * @return {boolean}
 */
let wordPattern = function (pattern, str) {
  str = str.split(' ')
  pattern = pattern.split('')

  if (pattern.length !== str.length) return false
  let map = new Map()
  for (let i = 0; i < str.length; i++) {
    // 如果值存在,并且当前hash表中的值和parttern对应的值不相等，说明规则不对
    if (map.get(str[i]) && map.get(str[i]) !== pattern[i]) return false
    // 如果hash中不在当前值，并且pattern对应值的索引不是当前索引，说明规则不对
    if (!map.get(str[i]) && pattern.indexOf(pattern[i]) !== i) return false
    map.set(str[i], pattern[i])
  }

  return true
};
```

解法2：双map解法

```js
let wordPattern1 = function (pattern, str) {
  let arr = str.split(' ')
  if (arr.length !== pattern.length) return false

  let map = new Map()
  let map1 = new Map()
  for (let i = 0; i < arr.length; i++) {
    map.set(pattern[i], arr[i])
    map1.set(arr[i], pattern[i])
  }
  for (let j = 0; j < arr.length; j++) {
    if (map.get(pattern[j]) !== arr[j]) return false
    if (map1.get(arr[j]) !== pattern[j]) return false
  }
  return true
}

```

解法3: 

```js
let wordPattern2 = function (pattern, str) {
  let arr = str.split(' ')
  if (arr.length !== pattern.length) return false

  let _helper = (s1, s2) => {
    const map = new Map();
    for (let i = 0; i < s1.length; i++) {
      if (map.has(s1[i])) {
        if (map.get(s1[i]) !== s2[i]) return false
      } else {
        map.set(s1[i], s2[i])
      }
    }
    return true;
  }
  return _helper(pattern, arr) && _helper(arr, pattern)
}
```

