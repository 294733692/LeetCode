/**
 * @param {number} n
 * @return {number}
 */
let trailingZeroes = function(n) {
  let count = 0
  while (n > 0) {
    n = parseInt(n / 5)
    count += n
  }
  return count
};
console.log(trailingZeroes(4));
