假设有一个很长的花坛，一部分地块种植了花，另一部分却没有。可是，花不能种植在相邻的地块上，它们会争夺水源，两者都会死去。

给你一个整数数组  flowerbed 表示花坛，由若干 0 和 1 组成，其中 0 表示没种植花，1 表示种植了花。另有一个数 n ，能否在不打破种植规则的情况下种入 n 朵花？能则返回 true ，不能则返回 false。



**示例 1：**

```
输入：flowerbed = [1,0,0,0,1], n = 1
输出：true
```

**示例 2：**

```
输入：flowerbed = [1,0,0,0,1], n = 2
输出：false
```

**提示：**

- `1 <= flowerbed.length <= 2 * 104`
- `flowerbed[i]` 为 `0` 或 `1`

- `flowerbed` 中不存在相邻的两朵花
- `0 <= n <= flowerbed.length`

LeetCode题目地址：[605. 种花问题](https://leetcode-cn.com/problems/can-place-flowers/)

解法：

1、向数组的首尾添加0，这里就可以不用考虑边界问题

2、满足题意，只需要满足 `flowerbed[i - 1] 、flowerbed[i] 、flowerbed[i + 1]`都等于0就可以了，

3、在把`flowerbed[i] = 1`作为插入的标记

4、当`n <= 0`的直接终止循环，返回即可

```js
/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
let canPlaceFlowers = function (flowerbed, n) {
  flowerbed = [0, ...flowerbed, 0] // 处理边界问题
  let i = 1, len = flowerbed.length
  for (i; i < len; i++) {
    if (flowerbed[i] === 0 && flowerbed[i + 1] === 0 && flowerbed[i - 1] === 0) {
      flowerbed[i] = 1
      n--
    }
  }
  return n <= 0
}
```



解法2： 

1、和解法1基本类似，当`flowerbed[i] == 1`的时候，直接i+2

```js
let canPlaceFlowers1 = function (flowerbed, n) {
  let i = 0, len = flowerbed.length
  for (i; i < len; i += 2) {
    if (flowerbed[i] === 0) {
      if (flowerbed[i + 1] === 0 || i === flowerbed.length - 1) {
        n--
      } else {
        i++
      }
    }
  }
  return n <= 0
}
```

