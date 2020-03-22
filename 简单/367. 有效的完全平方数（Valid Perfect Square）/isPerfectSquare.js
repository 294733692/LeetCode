/**
 * @param {number} num
 * @return {boolean}
 */
// 二分法
let isPerfectSquare = function (num) {

  let left = 0
  let right = num >>> 1
  let mid = 0
  let squared = 0

  while (left <= right) {
    mid = (left + right) >>> 1
    squared = mid * mid

    if (squared === num) {
      return true
    } else if (squared < num) {
      left = mid + 1
    } else {
      right = mid - 1
    }
  }
  return false
};

// 牛顿迭代法

let isPerfectSquare1 = function (num) {
  if (num < 2) return true
  let mid = num >>> 1
  while (mid * mid > num) {
    mid = parseInt((mid + parseInt(num /mid)) / 2)
  }
  return (mid * mid) === num
}
console.log(isPerfectSquare1(100));
