### 实现 strStr() 函数。给定一个 haystack 字符串和一个 needle 字符串，在 haystack 字符串中找出 needle 字符串出现的第一个位置 (从0开始)。如果不存在，则返回  -1。
示例1:
```js
输入: haystack = "hello", needle = "ll"
输出: 2
```
示例2
```js
输入: haystack = "aaaaa", needle = "bba"
输出: -1
```
示例2
```js
输入: haystack = "mississippi", needle = "issi"
输出: 1
```

解法1：双指针解法

```js
let strStr = function (haystack, needle) {
  // 特殊情况
  if (!needle) return 0
  let hLen = haystack.length
  let nLen = needle.length

  // 数组长度从0开始，不加1的话，实际循环会少一次
  for (let i = 0; i < hLen - nLen + 1; i++) {
    for (let j = 0; j < nLen; j++) {
      if (haystack[i + j] !== needle[j]) {
        break
      }
      if (j + 1 === nLen) return i
    }
  }
  return -1
};
```

解法2：截取法，截取需要查询的长度，对目标字符串进行对比

```js
let strStr = function (haystack, needle) {
  let hLen = haystack.length
  let nLen = needle.length

  //  循环次数为hLen - nLen，超过这个范围，haystack后面不满足needle的长度
  for (let i = 0; i <= hLen - nLen; i++) {
    if (needle !== haystack.slice(i, i + nLen)) {
      continue
    } else {
      return i
    }
  }
  return -1
};
```

