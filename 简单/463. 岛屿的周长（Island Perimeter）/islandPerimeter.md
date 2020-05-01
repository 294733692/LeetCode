### 给定一个包含 0 和 1 的二维网格地图，其中 1 表示陆地 0 表示水域。

网格中的格子水平和垂直方向相连（对角线方向不相连）。整个网格被水完全包围，但其中恰好有一个岛屿（或者说，一个或多个表示陆地的格子相连组成的岛屿）。

岛屿中没有“湖”（“湖” 指水域在岛屿内部且不和岛屿周围的水相连）。格子是边长为 1 的正方形。网格为长方形，且宽度和高度均不超过 100 。计算这个岛屿的周长。

**示例 :**

```
输入:
[[0,1,0,0],
 [1,1,1,0],
 [0,1,0,0],
 [1,1,0,0]]

输出: 16

解释: 它的周长是下面图片中的 16 个黄色的边：
```



![img](https://assets.leetcode-cn.com/aliyun-lc-upload/uploads/2018/10/12/island.png)



leetCode题目地址：[463. 岛屿的周长](https://leetcode-cn.com/problems/island-perimeter/)

解法：

根据题目和题目解析可以推导出岛屿的周长公式：`岛屿周长=陆地个数 * 4 - 陆地重合条数 * 2`

```js
/**
 * @param {number[][]} grid
 * @return {number}
 */
let islandPerimeter = function (grid) {
  let count = 0

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] === 1) {
        count += 4
        // 边界 + 上面数组判断
        if (i > 0 && grid[i - 1][j] === 1) count -= 2
        // 边界 + 前面数组判断
        if (j > 0 && grid[i][j - 1] === 1) count -= 2
      }
    }
  }
  return count
};
console.log(islandPerimeter([[0, 1, 0, 0], [1, 1, 1, 0], [0, 1, 0, 0], [1, 1, 0, 0]]));
```

该题其实很简单，主要是推算去，计算岛屿周长的公式即可，需要注意的，既然是岛屿是由数组构成，我们需要对数组的边界做一个判断，当然也可以给当前数组四周都加上`0`，防止数组越界