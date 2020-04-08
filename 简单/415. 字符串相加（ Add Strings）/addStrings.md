### 给定两个字符串形式的非负整数 `num1` 和`num2` ，计算它们的和。

**注意：**

1. `num1` 和`num2` 的长度都小于 5100.
2. `num1` 和`num2` 都只包含数字 `0-9`.
3. `num1` 和`num2` 都不包含任何前导零。
4. **你不能使用任何內建 BigInteger 库， 也不能直接将输入的字符串转换为整数形式。**

 LeetCode题目地址：[415. 字符串相加](https://leetcode-cn.com/problems/add-strings/)

解法：双指针

```js
/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
let addStrings = function (num1, num2) {
  let res = ''
  let i = num1.length - 1
  let j = num2.length - 1
  let carry = 0
  let temp = 0
  while (i >= 0 || j >= 0) {
    temp = parseInt(num1[i] || 0) + parseInt(num2[j] || 0) + carry
    carry = parseInt(temp / 10)
    res = (temp % 10) + res
    i--
    j--
  }
  // num1和num2长度为1的时候，循环结束
  // carry需要进位。就加上+res
  if (carry) res = carry + res
  return res
};
console.log(addStrings('1', '9'));

```

解法其实挺简单，从字符串的最后一位开始相加，如果有进位就记录下来，下一次循环的时候，将进位给加上去。

当`num1`和`num2`某一个字符串值不存在的时候，我们需要给当前这一位进行补`0`