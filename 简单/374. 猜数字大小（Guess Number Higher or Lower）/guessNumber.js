/**
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return              -1 if num is lower than the guess number
 *                   1 if num is higher than the guess number
 *                       otherwise return 0
 * var guess = function(num) {}
 */

/**
 * @param {number} n
 * @return {number}
 */
// 二分法
let guessNumber = function (n) {
  let left = 1
  let right = n
  while (left <= right) {
    let mid = (right + left) >>> 1
    if (guess(mid) === -1) {
      right = mid - 1
    } else if (guess(mid) === 1) {
      left = mid + 1
    } else {
      return mid
    }
  }
};

// 暴力法
let guessNumber1 = function (n) {
  for (let i = 1; i <= n; i++) {
    if (guess(i) === 0) return i
  }
  return n
}

