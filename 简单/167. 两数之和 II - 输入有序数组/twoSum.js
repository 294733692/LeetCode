/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (numbers, target) {
  let map = {}
  let len = numbers.length
  for (let i = 0; i < len; i++) {
    let targetNum = target - numbers[i]
    if (targetNum in map) return [map[targetNum], i + 1]
    map[numbers[i]] = i + 1
  }
};
let towSum1 = function (numbers, target) {
  let left = 0
  let end = numbers.length - 1
  let targetNum = numbers[left] + left[end]
  while (left < end) {
    if (targetNum === target) {
      return [left + 1, end + 1]
    } else if (targetNum < target) {
      ++left
    } else {
      ++end
    }
  }
}
