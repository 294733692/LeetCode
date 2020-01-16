/**
 * @param {number} x
 * @return {number}
 */
let mySqrt = function (x) {
  if (x === 0) return 0
  if (x < 4) return 1
  let left = 0
  let right = x
  while (right - left > 1) {
    let mid = parseInt((left + right) / 2)
    if (x / mid < mid) {
      right = mid
    } else {
      left = mid
    }
  }
  return left
}
let mySqrt1 = function (x) {
  let num = x
  while (num * num > x) {
    num = parseInt((num + x / num) / 2)
  }
  return num
}
let mySqrt2 = function (x) {
  return parseInt(Math.sqrt(x))
}
// console.log(17 >>> 1);
console.log(mySqrt1(5));
