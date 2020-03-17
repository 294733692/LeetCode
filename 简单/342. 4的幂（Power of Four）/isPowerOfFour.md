### 给定一个整数 (32 位有符号整数)，请编写一个函数来判断它是否是 4 的幂次方。

**示例 1:**

```
输入: 16
输出: true
```

**示例 2:**

```
输入: 5
输出: false
```

**进阶：**
你能不使用循环或者递归来完成本题吗？

LeetCode题目地址：[342. 4的幂](https://leetcode-cn.com/problems/power-of-four/)

解法1：递归

```js
/**
 * @param {number} num
 * @return {boolean}
 */
var isPowerOfFour = function (num) {
  // 循环
  // while (num >=4) {
  //   num /=4
  // }
  // return num === 1

  // 基底转换
  // return num.toString(4).match(/^10*$/) !== null

  // 数学公式转换
  // return (Math.log10(num) / Math.log10(4)) % 1 === 0

  // 同上，既然是4的幕，那么肯定也是2的幕
  // return (num > 0) && (Math.log(num) / Math.log(2) % 2 == 0)
};

```

上面这几种解法和[326. 3的幂（Power of Three）](https://github.com/294733692/LeetCode/blob/master/%E7%AE%80%E5%8D%95/326.%203%E7%9A%84%E5%B9%82%EF%BC%88Power%20of%20Three%EF%BC%89/isPowerOfThree.md)解法大同小异，可以看看这里解法解释。

解法2：位运算

```js
let isPowerOfFour = function (num) {
    return (num > 0) && ((num & (num - 1)) == 0) && ((num & 0xaaaaaaaa) == 0)
}
```

- 首先我们可以明确一点的是，既然是`4`的幂次方，那么必然也是`2`的幂次方
- 那么我们就可以判断`num`是否是`2`的幂次方，`(num > 0) && ((num & (num - 1)) == 0)`
- 从下面这张图片我们可以发现，将`num`转化二进制数，`1`在奇数位的是`4`的幂次方，`1`在偶数位的是`2`的幂次方

<img src="https://pic.leetcode-cn.com/0f9a7930019058316c0e139dc59935b8a10ef6291d2e9fd7b64ff1b09573e016-file_1577945397186" alt="在这里插入图片描述" style="zoom:50%;" />

- 根据这个规律，我们需要与一个特殊数做位运算

  - 这个数不能超过32位，
  - 这个数二进制奇数位为`1`，偶数位为`0`

  满足这个条件的这个数为`1010101010101010101010101010101`

如果用`4`的幂次方和这个数做与运算，得到的数还是是`4`的幂次方



解法3：位运算+数学运算

详情可以看看官方题解：[4的幂](https://leetcode-cn.com/problems/power-of-four/solution/4de-mi-by-leetcode/)

```js
let isPowerOfFour = function (num) {
    return (num > 0) && ((num & (num - 1)) == 0) && (num % 3 == 1);
}
```

具体思路：

- 从位运算我们可以知道既然是`4`的幂次方，那么必然是`2`的幂次方，我们可以通过`(num > 0) && ((num & (num - 1)) == 0)`,找出`2`的幂次方。
- 如果`num = 4`，那么`2^x=4`，那么可以知道`x=2`位偶数。
- 接下来有`x = 2k或x=2k+1`两种情况，为奇数或位偶数。对x对与`3`进行取模
  - （2^2k mod 3） = (4^k mod 3) = ((3+1)^k mod 3) = 1
  - (2^(2k + 1) mod 3) = ((2+4k) mod 3) = ((2 + (3+1)^k) mod 3) = 2

如果`x`为2，那么`x%3=1`，那么`x`就是`4`的幂
