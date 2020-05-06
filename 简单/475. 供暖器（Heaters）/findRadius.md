冬季已经来临。 你的任务是设计一个有固定加热半径的供暖器向所有房屋供暖

现在，给出位于一条水平线上的房屋和供暖器的位置，找到可以覆盖所有房屋的最小加热半径。

所以，你的输入将会是房屋和供暖器的位置。你将输出供暖器的最小加热半径。

**说明:**

- 给出的房屋和供暖器的数目是非负数且不会超过 25000。
- 给出的房屋和供暖器的位置均是非负数且不会超过10^9。
- 要房屋位于供暖器的半径内(包括在边缘上)，它就可以得到供暖。
- 所有供暖器都遵循你的半径标准，加热的半径也一样。

**示例 1:**

```
输入: [1,2,3],[2]
输出: 1
解释: 仅在位置2上有一个供暖器。如果我们将加热半径设为1，那么所有房屋就都能得到供暖。
```

**示例 2:**

```
输入: [1,2,3,4],[1,4]
输出: 1
解释: 在位置1, 4上有两个供暖器。我们需要将加热半径设为1，这样所有房屋就都能得到供暖。
```



LeetCode题目地址：[475. 供暖器](https://leetcode-cn.com/problems/heaters/)

解法1：滑动窗口

思路：对`house`和`heaters`进行升序排序，检查两个每个房子左右两边最近的暖气的位置，并记录到两边暖气的最小记录，最后统计每组的最大值

```js
/**
 * @param {number[]} houses
 * @param {number[]} heaters
 * @return {number}
 */
// 滑动窗口
let findRadius = function (houses, heaters) {
  houses.sort(((a, b) => a - b))
  heaters.sort(((a, b) => a - b))

  let res = 0
  let index = 0
  for (let i = 0; i < houses.length; i++) {
    // 记录每个房子左右两边暖气的距离的最小值  
    let distance = Number.MAX_VALUE

    for (let j = index; j < heaters.length; j++) {
      //
      index = houses[i] >= heaters[j] ? j : index
      // 检查每个房子左右两边最近的暖气的位子，并记录两个暖气与房子之间的最小值
      distance = Math.min(distance, Math.abs(houses[i] - heaters[j]))
      // 如果房子的位子小于暖气的位置，终止循环
      if (houses[i] < heaters[j]) break
    }
    // 每组所记录的最大值
    res = Math.max(res, distance)
  }
  return res
};

console.log(findRadius([1, 2, 3, 4], [1, 4]));
```

