### 两个整数之间的[汉明距离](https://baike.baidu.com/item/汉明距离)指的是这两个数字对应二进制位不同的位置的数目。

给出两个整数 `x` 和 `y`，计算它们之间的汉明距离。

**注意：**
0 ≤ `x`, `y` < 2^31

**示例:**

```
输入: x = 1, y = 4
输出: 2

解释:
1   (0 0 0 1)
4   (0 1 0 0)
       ↑   ↑
       
上面的箭头指出了对应二进制位不同的位置。
```

leetCode题目地址： [461. 汉明距离](https://leetcode-cn.com/problems/hamming-distance/)

这道题的关键是需要理解到什么是`汉明距离`,

> 明距离是使用在数据传输差错控制编码里面的，汉明距离是一个概念，它表示两个（相同长度）字对应位不同的数量，`我们以d（x,y）表示两个字x,y之间的汉明距离。对两个字符串进行异或运算，并统计结果为1的个数，那么这个数就是汉明距离。`

通俗来说，就是将两个整数进行`亦或运算`，最后统计结果里面`1`的位数，这个数就是`汉明距离`



解法1：内置函数

- 将两个数进行亦或运算

- 将预算结果通过`toString(2)`转化为2进制数

- 统计结果中出现`1`的次数

```js
let hammingDistance = function (x, y) {
  let str = x ^ y
  return str.toString('2').split('').filter(item => item === '1').length
};
```



解法2：移位运算

- 将每一位移动到最嘴边或者是最右边，检查判断改为是否为`1`，舍弃为`0`的数字

```js
let hammingDistance = function (x, y) {
  let str = x ^ y
  let count = 0
  while (str !== 0) {
    if (str % 2 === 1) count += 1
    str = str >> 1
  }
  return count
}
```



解法3：布赖恩·克尼根算法

相比于解法2来说，解法是移动每一位到最左边或者是最右边，判断最后一位是否为`1`，

如果第一位是1，那么我们直接跳过中间的0，效率会提高很多。

```js
let hammingDistance = function (x, y) {
  let str = x ^ y
  let count = 0
  while (str !== 0) {
    count +=1
    str = str & (str - 1)
  }
  return count
}
```

