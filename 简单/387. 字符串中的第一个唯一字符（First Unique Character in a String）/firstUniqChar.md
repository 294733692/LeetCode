### 给定一个字符串，找到它的第一个不重复的字符，并返回它的索引。如果不存在，则返回 -1。

**案例:**

```
s = "leetcode"
返回 0.

s = "loveleetcode",
返回 2.
```

**注意事项：**您可以假定该字符串只包含小写字母。

LeetCode题目地址：[387. 字符串中的第一个唯一字符](https://leetcode-cn.com/problems/first-unique-character-in-a-string/)



#### 解法1：map

思路：对字符串`s`进行遍历，利用map记录字符串里面字母出现的次数。然后再次遍历字符串`s`，和map对比里面字母出现的次数，如果出现次数为1，那么返回当前循环的下标

```js
/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
let canConstruct = function (ransomNote, magazine) {
  let map = new Map()
  for (let key of magazine) {
    if (map.has(key)) {
      map.set(key, map.get(key) + 1)
    } else {
      map.set(key, 1)
    }
  }

  for (let key of ransomNote) {
    if (map.has(key)) {
      if (map.get(key) <= 0) {
        return false
      }
      map.set(key, map.get(key) - 1)
    } else {
      return false
    }
  }
  return true
};
```

#### 解法2：indexOf、lastIndexOf

思路：利用js提供的Api，获取字母第一次、最后一次出现的下标。如果两次下标相同，那么说明该字母只出现了一次，那么返回下标即可

```js
let firstUniqChar = function (s) {
  for (let key of s) {
    if (s.indexOf(key) === s.lastIndexOf(key)) return s.indexOf(key)
  }
  return -1
}
```

解法1和解法2都是遍历的对`s`进行遍历的，这里会有一个问题，就是当`s`的长度很大的时候，遍历就会非常的消耗时间。



解法3：优化解法2

思路：相比于解法2，我们遍历26个英文字母，这边的好处是，不管`s`的长度有好大，我们最多也遍历26次。

```js
let firstUniqChar = function (s) {
  // 记录没重复字母的下标  
  let index = s.length
  let str = 'abcdefghijklmnopqrstuvwxyz'
  for (let key of str) {
    // 记录字母第一次出现的位置
    let first = s.indexOf(key)
    // 记录字母最后一次出现的位置
    let last = s.lastIndexOf(key)
    if (first !== -1 && first === last) {
      index = Math.min(index, first)
    }
  }
  return index === s.length ? -1 : index
}
```

