/**
 * @param {number} n
 * @return {number}
 */
let countPrimes = function (n) {
  // 计数器，计算素数个数
  let count = 0
  let signs = new Uint8Array(n)
  for (let i = 2; i < n; i++) {
    if (!signs[i - 1]) {
      count++
      for (let j = i * i; j <= n; j += i) {
        signs[j - 1] = true
      }
    }
  }
  return count
};
console.log(countPrimes(10));
