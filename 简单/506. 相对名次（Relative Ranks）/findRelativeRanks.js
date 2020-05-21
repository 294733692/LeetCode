/**
 * @param {number[]} nums
 * @return {string[]}
 */
let findRelativeRanks = function (nums) {
  // 拷贝数组，建立映射关系
  let copyArr = JSON.parse(JSON.stringify(nums))
  nums.sort((a, b) => b - a)
  let map = new Map()
  let res = []

  for (let i = 0; i < nums.length; i++) map.set(nums[i], i + 1)
  for (let i = 0; i < copyArr.length; i++) {
    let temp = map.get(copyArr[i])
    if (temp === 1) {
      res.push('Gold Medal')
    } else if (temp === 2) {
      res.push('Silver Medal')
    } else if (temp === 3) {
      res.push('Bronze Medal')
    } else {
      res.push('' + temp)
    }
  }
  return res
};
findRelativeRanks([10, 3, 8, 9, 4])
