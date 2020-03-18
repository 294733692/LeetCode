### 编写一个函数，其作用是将输入的字符串反转过来。输入字符串以字符数组 char[] 的形式给出。

不要给另外的数组分配额外的空间，你必须原地修改输入数组、使用 O(1) 的额外空间解决这一问题。

你可以假设数组中的所有字符都是 ASCII 码表中的可打印字符。

示例 1：
```
输入：["h","e","l","l","o"]
输出：["o","l","l","e","h"]
```

示例 1：
```
输入：["H","a","n","n","a","h"]
输出：["h","a","n","n","a","H"]
```

LeetCode题目地址：[344. 反转字符串](https://leetcode-cn.com/problems/reverse-string/)


解法1：Api解法

根据示例可以看出，是一个数字反转，那么直接利用数组反转的Api即可

```js
let reverseString = function (s) {
  // Api解法
  return s.reverse()
}
```

解法2：递归
如果直接使用Api那么失去做算法题的意思了。利用中间变量，完成数据的反转
```js
// 递归
let reverseString1 = function (s) {
  let _helper = (s, left, right) => {
    if (left >= right) return
    let temp = s[right]
    s[right--] = s[left]
    s[left++] = temp
    _helper(s, left, right)
  }

  return _helper(s, 0, s.length - 1)
}
```

解法3：双指针

题目给出的要求是原地修改数组（原地算法），那么使用双指针`start`和`end`对数组进行反转

```js
/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
let reverseString = function (s) {
  // 双指针
  let start = 0
  let end = s.length

  while (start < end) {
    let temp = s[end]
    s[end] = s[start]
    s[start] = temp
    start++
    end--
  }
  return s
};
```
