### 给定一个非负整数 num，反复将各个位上的数字相加，直到结果为一位数。

**示例:**

```
输入: 38
输出: 2 
解释: 各位相加的过程为：3 + 8 = 11, 1 + 1 = 2。 由于 2 是一位数，所以返回 2。
```

**进阶:**

你可以不使用循环或者递归，且在 O(1) 时间复杂度内解决这个问题吗？

LeetCode题目地址：[258. 各位相加](https://leetcode-cn.com/problems/add-digits/)

解法1：递归

```js
/**
 * @param {number} num
 * @return {number}
 */
let addDigits = function (num) {
  if (num < 10) {
    return num
  }
  let cur = 0
  while (num !== 0) {
    cur += num % 10
    num = parseInt(num / 10)
  }
  return addDigits(cur)
};
```

解法2：数学解法

如果对数学比较了解的话，就可以知道，题目的意思就是让我们求数字根

[维基百科](https://wiki.hk.wjbk.site/wiki/數根)

在[数学](https://wiki.hk.wjbk.site/baike-數學)中，**数根**(又称**位数根**或**数字根**Digital root)是[自然数](https://wiki.hk.wjbk.site/baike-自然數)的一种[性质](https://wiki.hk.wjbk.site/w/index.php?title=性質&action=edit&redlink=1)，换句话说，每个[自然数](https://wiki.hk.wjbk.site/baike-自然數)都有一个**数根**。

数根是将一[正整数](https://wiki.hk.wjbk.site/baike-正整數)的各个[位数](https://wiki.hk.wjbk.site/baike-位數)相加（即横向相加），若加完后的值大于[10](https://wiki.hk.wjbk.site/baike-10)的话，则继续将各位数进行横向相加直到其值小于[十](https://wiki.hk.wjbk.site/baike-十)为止[[1\]](https://wiki.hk.wjbk.site/wiki/數根#cite_note-數學的神祕奇趣-1)，或是，将一数字重复做[数字和](https://wiki.hk.wjbk.site/baike-数字和)，直到其值小于[十](https://wiki.hk.wjbk.site/baike-十)为止，则所得的值为该数的**数根**。

例如54817的数根为[7](https://wiki.hk.wjbk.site/baike-7)，因为[5](https://wiki.hk.wjbk.site/baike-5)+[4](https://wiki.hk.wjbk.site/baike-4)+[8](https://wiki.hk.wjbk.site/baike-8)+[1](https://wiki.hk.wjbk.site/baike-1)+[7](https://wiki.hk.wjbk.site/baike-7)=[25](https://wiki.hk.wjbk.site/baike-25)，[25](https://wiki.hk.wjbk.site/baike-25)[大于](https://wiki.hk.wjbk.site/baike-大于)10则再[加](https://wiki.hk.wjbk.site/baike-加)一次，[2](https://wiki.hk.wjbk.site/baike-2)+[5](https://wiki.hk.wjbk.site/baike-5)=[7](https://wiki.hk.wjbk.site/baike-7)，[7](https://wiki.hk.wjbk.site/baike-7)[小于](https://wiki.hk.wjbk.site/baike-小于)十，则7为54817的数根。



```js
// 数学公式求解
let addDigits = function (num) {
  return (n - 1) % 9 + 1
}
```

