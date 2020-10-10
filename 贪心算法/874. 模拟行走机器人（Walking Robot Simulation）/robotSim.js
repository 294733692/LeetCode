/**
 * @param {number[]} commands
 * @param {number[][]} obstacles
 * @return {number}
 */
let robotSim = function (commands, obstacles) {
  // 初始化坐标系,坐标方向，北东南西，顺时针
  let direction = [[0, 1], [1, 0], [0, -1], [-1, 0]]
  let set = new Set()
  let result = 0
  let x = 0
  let y = 0
  let d = 0
  // 记录障碍位置
  for (let key of obstacles) {
    set.add(`${key[0]}_${key[1]}`)
  }

  for (let key of commands) {
    if (key >= 0) {
      for (let i = 0; i < key; i++) {
        let nextX, nextY
        // 记录下一个坐标点
        nextX = x + direction[d][0]
        nextY = y + direction[d][1]
        if (set.has(`${nextX}_${nextY}`)) break
        x = nextX
        y = nextY
        // 比较大小，取最优
        result = Math.max(result, x * x + y * y)
      }
    } else {
      // (-2):左转，O->W,Wx = (Ox+3)%4
      // (-1):右转，O->E,Wx = (Ox+1)%4
      d = key === -1 ? (d + 1) % 4 : (d + 3) % 4
    }
  }
  return result
};

robotSim([4, -1, 4, -2, 4], [[2, 4]])
