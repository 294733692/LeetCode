### 统计所有小于非负整数 n 的质数的数量。

 **示例:** 

```
输入: 10
输出: 4
解释: 小于 10 的质数一共有 4 个, 它们是 2, 3, 5, 7 。
```

LeetCode题目地址:[204. 计数质数](https://leetcode-cn.com/problems/count-primes/)

看到这个题目。一般想到的就是暴力循环法进行查找，但该方法就是只是限于当查找小范围的素数比较好，如果查找大范围，是很费时间的。

解法1：厄拉多塞筛法

 ![图片来自于维基百科](https://pic.leetcode-cn.com/77583e8c9a820e3880f754a00863d616642d8cf915230382c2aaa11168c25849-file_1581643684036) 

思路：找出 √ n以内的素数p1、p2.....px，先用2进行筛选，把2留下，把是2倍数的数给删除掉，在用下一个素数3进行筛选，把3的倍数给删除掉，保留3；接下来使用5去进行筛选，把5留下，把5的倍数给删除掉，重复下面步骤，最后剩下的就是素数

```js
/**
 * @param {number} n
 * @return {number}
 */
let countPrimes = function (n) {
  // 计数器，计算素数个数
  let count = 0
  let signs = new Uint8Array(n)
  for (let i = 2; i < n; i++) {
    if (!signs[i - 1]) {
      count++
      for (let j = i * i; j <= n; j += i) {
        signs[j - 1] = true
      }
    }
  }
  return count
};
console.log(countPrimes(10));

```

这里为什么要用`Uint8Array`呢，如果使用`new Array(n)`的话，性能和花费的内存是`Uint8Array`的1到2倍左右。
