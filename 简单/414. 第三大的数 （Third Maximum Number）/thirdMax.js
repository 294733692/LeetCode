/**
 * @param {number[]} nums
 * @return {number}
 */
let thirdMax = function (nums) {
  let set = new Set(nums)
  let arr = [...set]
  arr.sort((a, b) => b - a)
  if (arr.length < 3) return arr[0]
  return arr[2]
};

let thirdMax1 = function (nums) {
  // 如果数组长度小于3，返回最大的
  if (nums.length < 3) return Math.max(...nums)

  let firstMax = -Infinity
  let secMax = -Infinity
  let thMax = -Infinity

  for (let key of nums) {
    if (key > firstMax) {
      thMax = secMax
      secMax = firstMax
      firstMax = key
    } else if (key < firstMax && key > secMax) {
      thMax = secMax
      secMax = key
    } else if (key > thMax && key < secMax) {
      thMax = key
    }
  }
  // 如果没有找到第三个最大的，就返回最大的
  return thMax === -Infinity ? Math.max(...nums) : thMax
}
console.log(thirdMax1([2, 2, 2, 1]));
