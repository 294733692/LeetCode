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
