/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
let canCompleteCircuit = function (gas, cost) {
  let run = 0, start = 0, rest = 0
  for (let i = 0; i < gas.length; i++) {
    // 计算从当前为起点，能否跑到下一个加油点
    run += (gas[i] - cost[i])
    // 计算总路程和总耗油量
    rest += (gas[i] - cost[i])
    // 如果当前总油量不足到达下一个点，那么重置run，并从下一个起点开始计算
    if (run < 0) {
      start = i + 1
      run = 0
    }
  }
  // 判断总需耗油量是否大于路程
  // 是，返回-1
  // 否，意味着可以跑完全程，返回记录的起点
  return rest < 0 ? -1 : start
};
