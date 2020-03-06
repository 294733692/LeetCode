### 242. 有效的字母异位词

给定两个字符串 s 和 t ，编写一个函数来判断 t 是否是 s 的字母异位词。

**示例 1:**

```
输入: s = "anagram", t = "nagaram"
输出: true
```

**示例 2:**

```
输入: s = "rat", t = "car"
输出: false
```

**说明:**
你可以假设字符串只包含小写字母。

**进阶:**
如果输入字符串包含 unicode 字符怎么办？你能否调整你的解法来应对这种情况？

LeetCode题目地址:[242. 有效的字母异位词](https://leetcode-cn.com/problems/valid-anagram/)



题目的意思是，判断两个英文字符串里面的字母，出现的次数是否相同



解法1：排序

这个方法比较简单， 也比较容易想到，将两个字符串转化为数组进行排序，然后在转化为字符串，最后在判断两个字符串是否相等即可。但是相对来说，使用了Api，如果两个字符串长度过大，也是非常消耗内存和时间的

```js
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
// 排序
let isAnagram = function (s, t) {
  let sArr = s.split('').sort().join('')
  let tArr = t.split('').sort().join('')
  return sArr === tArr
};
```

解法2：hash表

思路：利用map集合特性，可以统计出现字符的次数

```js
let isAnagram1 = function (s, t) {
  if (s.length !== t.length) return false

  let map = new Map()
  // 将n放入map中，
  for (let n of s) {
    // 判断map中是否有n
    if (map.has(n)) {
      // 如果存在重复元素，重复元素值+1，用于计数标记
      map.set(n, map.get(n) + 1)
    } else {
      // 如果没有存在，将n存入map中，值标记为1
      map.set(n, 1)
    }
  }
  console.log(map);

  for (let n of t) {
    // 判断map里面是否存在该值，并且出现次数是否大于0次
    if (map.has(n) && map.get(n) > 0) {
      // 如果存在，将出现重复值的次数-1
      map.set(n, map.get(n) - 1)
    } else {
      // 如果不满足上面条件，说明不是不是字母异位词
      return false
    }
  }
  //如果上面循环完毕，没有返回false，那么说明，两个字符串是字母异位词
  return true
}
```

