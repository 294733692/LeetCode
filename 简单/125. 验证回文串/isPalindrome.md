### 给定一个字符串，验证它是否是回文串，只考虑字母和数字字符，可以忽略字母的大小写。

**说明：**本题中，我们将空字符串定义为有效的回文串。

 **示例 1:** 

```
输入: "A man, a plan, a canal: Panama"
输出: true
```

 **示例 2:** 

```
输入: "race a car"
输出: false
```

leetCode题目地址：[125. 验证回文串](https://leetcode-cn.com/problems/valid-palindrome/)

解法1：Api解法

- 根据题目， 掉非大小写字符或者数字的字符串，并将字符串转换成小写。 
- 将得到的字符串给转化为数组，并反序一下，然后转化为字符串。
- 将第一步处理的字符串和第二步的字符串对比是否相同

```js
/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  // 去除除了数字和字母之外的所有字符，并全部转化为小写
  s = s.replace(/[^0-9a-zA-Z]/g, '').toLocaleLowerCase();
  // 将处理后的数组进行反序
  let reverse = s.split('').reverse().join('');
  // 对比出去后的字符传和反序后的字符串是否相等
  return s === reverse;
};

```

解法2：双指针解法

-  掉非大小写字符或者数字的字符串，并将字符串转换成小写。 
- 既然是判断是否是回文字符串，那么左右必然是对称的，所以循环字符串长度的一半就可以了
- 循环第一位和最后一位做对比，不相同，那么说明是不回文，直接返回false，如果相同就继续循环，第二位和倒数第二位做比较，依次类推

```js
var isPalindrome1 = function (s) {
  // 去除除了数字和字母之外的所有字符，并全部转化为小写
  s = s.replace(/[^0-9a-zA-Z]/g, '').toLocaleLowerCase();
  // 循环长度的一半，因为回文，那说明对半相等。
  for (let i = 0; i < s.length / 2; i++) {
    // 数组是从0开始的，所以数组长度需要减一
    // 比较第一位和最后一位，如果不相同，就不是会问，否则继续对比第二位和倒数第二位，依次类推
    if (s[i] !== s[s.length - 1 - i]) {
      return false
    }
  }
  return true
};

```

