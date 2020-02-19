### 编写一个算法来判断一个数是不是“快乐数”。

一个“快乐数”定义为：对于一个正整数，每一次将该数替换为它每个位置上的数字的平方和，然后重复这个过程直到这个数变为 1，也可能是无限循环但始终变不到 1。如果可以变为 1，那么这个数就是快乐数。

 **示例:**  

```
输入: 19
输出: true
解释: 
12 + 92 = 82
82 + 22 = 68
62 + 82 = 100
12 + 02 + 02 = 1
```

LeetCode题目地址：[202. 快乐数](https://leetcode-cn.com/problems/happy-number/)

解法1：set去重

```
/**
 * @param {number} n
 * @return {boolean}
 */
let isHappy = function (n) {
  // 利用set集合判断，如果里面存在重复值，那么必定不是快乐数
  let set = new Set()
  let sum = 0
  // 将数字转化为字符串
  n += ''
  while (sum !== 1) {
    sum = 0
    for (let i = 0; i < n.length; i++) {
      sum += n[i] * n[i]
    }
    n = sum + ''
    if (set.has(sum)) return false
    set.add(sum)
  }
  return true
};
```

解法2：快慢指针

思路：使用“快慢指针”思想找出循环，`快指针`每次走两步，`慢指针`每次走一步，当`快指针`和`慢指针`相等的时候，这就是一个循环周期，此时判断是不是由`1`引起来的循环，是的话就是`快乐数`，否则就不是

```js
let isHappy1 = function (n) {
  let slow = n
  let fast = n

  let bitSquareSum = function (n) {
    let sum = 0;
    while (n > 0) {
      let bit = n % 10;
      sum += bit * bit;
      n = parseInt(n / 10);
    }
    return sum;
  }

  do {
    slow = bitSquareSum(slow);
    fast = bitSquareSum(fast);
    fast = bitSquareSum(fast);
  } while (slow !== fast);

  return slow === 1;
}
```



来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/happy-number
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
