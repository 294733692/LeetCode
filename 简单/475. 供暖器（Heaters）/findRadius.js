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
    let distance = Number.MAX_VALUE

    for (let j = index; j < heaters.length; j++) {
      //
      index = houses[i] >= heaters[j] ? j : index
      // 检查每个房子左右两边最近的暖气的位子，并记录两个暖气与房子之间的最小值
      distance = Math.min(distance, Math.abs(houses[i] - heaters[j]))
      // 如果房子的位子小于暖气的位置，终止循环
      if (houses[i] < heaters[j]) break
    }
    // 统计每组所记录的最大值
    res = Math.max(res, distance)
  }
  return res
};

console.log(findRadius([1, 2, 3, 4], [1, 4]));
