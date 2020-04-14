/**
 * @param {number} n
 * @return {number}
 */
let arrangeCoins = function (n) {
  let i = 0
  let count = 0
  if (n === 1) return 1

  for (i; i <= n; i++) {
    count += i
    if (count > n) break
  }
  return i - 1
};

let arrangeCoins1 = function (n) {
  if (n === 0) return 1
  let left = 0
  let right = n

  while (left <= right) {
    let mid = left + ((right - left) >> 1)
    let trapezoidMidCount = (1 + mid) * mid / 2
    if (trapezoidMidCount === n) {
      return mid
    } else if (trapezoidMidCount < n) {
      left = mid + 1
    } else if (trapezoidMidCount > n) {
      right = mid - 1
    }
  }
  return right
}
console.log(arrangeCoins(5));
console.log(arrangeCoins1(5));
