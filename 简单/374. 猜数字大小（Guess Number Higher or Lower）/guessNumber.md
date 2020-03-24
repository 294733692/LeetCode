### 我们正在玩一个猜数字游戏。 游戏规则如下：我从 1 到 n 选择一个数字。 你需要猜我选择了哪个数字。    
每次你猜错了，我会告诉你这个数字是大了还是小了。你调用一个预先定义好的接口 guess(int num)，它会返回 3 个可能的结果（-1，1 或 0）：

```
-1 : 我的数字比较小
 1 : 我的数字比较大
 0 : 恭喜！你猜对了！
```

**示例 :**

```
输入: n = 10, pick = 6
输出: 6
```

LeetCode题目地址：[374. 猜数字大小](https://leetcode-cn.com/problems/guess-number-higher-or-lower/)

这里需要注意的是：返回`-1`代表的是`我猜的数字比较小`、`1`为`我猜的数字比较大`

解法1：暴力法

老规矩，首先暴力法，简单明了，就是当数据比较大的时候，可能会超时

时间复杂度：o(n)

空间复杂度：没有使用额外空间

```js
// 暴力法
let guessNumber1 = function (n) {
  for (let i = 1; i <= n; i++) {
    if (guess(i) === 0) return i
  }
  return n
}
```

解法2：二分法查找

这道题的常规解法是采用二分法查找。官方题解给出了三分法的解法。

每次查找缩小一半的查找范围

```js
// 二分法
let guessNumber = function (n) {
  let left = 1
  let right = n
  while (left <= right) {
    let mid = (right + left) >>> 1
    if (guess(mid) === -1) {
      right = mid - 1
    } else if (guess(mid) === 1) {
      left = mid + 1
    } else {
      return mid
    }
  }
};
```

