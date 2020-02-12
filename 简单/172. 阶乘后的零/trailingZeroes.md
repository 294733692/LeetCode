### 给定一个整数 n，返回 n! 结果尾数中零的数量。

 **示例 1:** 

```
输入: 3
输出: 0
解释: 3! = 6, 尾数中没有零。
```

 **示例 2:** 

```
输入: 5
输出: 1
解释: 5! = 120, 尾数中有 1 个零.
```

LeetCode地址：[172. 阶乘后的零](https://leetcode-cn.com/problems/factorial-trailing-zeroes/)

刚开始看到这题目，第一反应就是递归求出阶乘的值，然后判断位数中有几个0就ok了，但是考虑到数字过大的话，阶乘递归会出现超时的情。

暴力法前期只是为了方便我们找出规则，然后从中找出相同的规律。

可以看看`windliang`大佬这道题的题解，讲的非常详细

> 作者：windliang
>
> 链接： https://leetcode-cn.com/problems/factorial-trailing-zeroes/solution/xiang-xi-tong-su-de-si-lu-fen-xi-by-windliang-3/ 

```js
/**
 * @param {number} n
 * @return {number}
 */
let trailingZeroes = function(n) {
  let count = 0
  while (n > 0) {
    n = parseInt(n / 5)
    count += n
  }
  return count
};
console.log(trailingZeroes(4));
```

