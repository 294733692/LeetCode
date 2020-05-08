给定一个正整数，输出它的补数。补数是对该数的二进制表示取反。

**示例 1:**

```
输入: 5
输出: 2
解释: 5 的二进制表示为 101（没有前导零位），其补数为 010。所以你需要输出 2 。
```

**示例 2:**

```
输入: 1
输出: 0
解释: 1 的二进制表示为 1（没有前导零位），其补数为 0。所以你需要输出 0 。
```

**注意:**

1. 给定的整数保证在 32 位带符号整数的范围内。
2. 你可以假定二进制数不包含前导零位。
3. 本题与 [1009. 十进制整数的反码](https://leetcode-cn.com/problems/complement-of-base-10-integer/) 相同

leetCode题目地址：[476. 数字的补数](https://leetcode-cn.com/problems/number-complement/)



解法1：暴力法

- 将`num`转化为二进制，然后转为为数组
- 循环数组，判断每一位，然后对每一项进行取反
- 将数组组成字符串，并返回

```js
let findComplement = function (num) {
  let temp = num.toString(2).split('')
  let arr = []

  for (let key of temp) {
    if (key === '0') {
      arr.push('1')
    } else {
      arr.push('0')
    }
  }
  return parseInt(arr.join(''), 2)
}
```



解法2：位移+异或运算

根据题目意思，需要取反，第一反应就是需要采用异或运算，

首先我们得知道 1 ^ 0 = 1  1 ^ 1 = 0

举一个例子：5=》101，这里我们需要对5的二进制进行取反，采用异或运算就是

101^111 = 010，满足题目给出的答案。

所有我们就只要求出，与`num`二进制长度相等的数就可以了，注意这个数必须全是都是由1构成

那么现在最重要的就是，怎么获得与`num`进行异或运算的数字呢。

这里就可以采用`位移运算`，计算出，所需要的数

- `>>`符号：例如 2>>1，就是`010`向右移动一位，变成`001`
- `<<`符号：例如 2<<1，就是`010`向左位移一位，变成`100`

```js
/**
 * @param {number} num
 * @return {number}
 */
let findComplement = function (num) {
  let temp = num, res = 0
  while (temp > 0) {
    temp >>= 1
    // 这里+1，位为了让每一位都是1  
    res = (res << 1) + 1
  }
  return num ^ res
};
```



解法3：优化解法2

解法和解法2基本类型，减少了参数和计算次数

```js
let findComplement = function (num) {
  let temp = 1
  while (temp < num) {
    temp = temp << 1 | 1
  }
  return num ^ temp
}
```

