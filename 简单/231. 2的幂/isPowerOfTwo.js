/**
 * @param {number} n
 * @return {boolean}
 */
let isPowerOfTwo = function (n) {
  if (n === 0) return false
  while (n % 2 === 0) {
    n /= 2
  }
  return n === 1
};
let isPowerOfTwo1 = function (n) {
  return n > 0 && !(n & (n - 1))
}
