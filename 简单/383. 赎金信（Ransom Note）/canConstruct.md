### 给定一个赎金信 (ransom) 字符串和一个杂志(magazine)字符串，判断第一个字符串ransom能不能由第二个字符串magazines里面的字符构成。如果可以构成，返回 true ；否则返回 false。

(题目说明：为了不暴露赎金信字迹，要从杂志上搜索各个需要的字母，组成单词来表达意思。)

**注意：**

你可以假设两个字符串均只含有小写字母。

```
canConstruct("a", "b") -> false
canConstruct("aa", "ab") -> false
canConstruct("aa", "aab") -> true
```

LeetCode题目地址：[383. 赎金信](https://leetcode-cn.com/problems/ransom-note/)

解法1：map

根据题目意思来看，只要同一字母在**杂志**里面出现的次数大于**赎金信**里面出现的次数，那么久可以为`true`，否则为`false`

那么这里我们可以采用`map`收集**杂志**里面字母出现的次数，然后和**赎金信**的字母次数做对比，如果同一字母的次数小于或等于`0`，那么说明不**杂志**里面的字母不能组成**赎金信**。

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
      // 这里判断同一字母出现的次数，小于等于0，就不能组成赎金信  
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

解法2：正则匹配

从上一个解法我们可以知道，如果**杂志**里面的字母能够构成**赎金信**的话，那么必然**杂志**出现的同一字母次数大于**赎金信**。那么这里我们就可以采用正则进行匹配。**杂志**出现一个字母我们就去**赎金信**去匹配，并把匹配到的字符清空，如果最后**赎金信**的长度为0，那么说明**杂志**能够组成**赎金信**

```js
// 正则
let canConstruct1 = function (ransomNote, magazine) {
  for (let key of magazine) {
    if (ransomNote.includes(key)) {
      ransomNote = ransomNote.replace(new RegExp(key), '')
      console.log(ransomNote);
    }
  }
  return ransomNote.length === 0
};
```

这里需要说明的为什么要采用`new RegExp(key)`，这里需要说明一下`new RegExp`和`/a/`的区别

- `new RexExp`能够对变量进行构造，而`//`不能
- 剩下的都是相同的

因为这里的`key`是变量，所有只能采用`new RexExp()`进行构造正则