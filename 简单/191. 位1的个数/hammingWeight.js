/**
 * @param {number} n - a positive integer
 * @return {number}
 */
let hammingWeight = function (n) {
  let bits = 0
  let mask = 1
  for (let i = 0; i < 32; i++) {
    // & 与运算符
    // 1 & 1 = 1
    // 1 & 0 = 0
    // 0 & 0 = 0
    // 0 & 0 = 0
    if ((n & mask) !== 0) {
      bits++
    }
    mask <<= 1
  }
  return bits
};
let hammingWeight1 = function (n) {
  let count = 0
  while (n !== 0) {
    count++
    n &= (n - 1)
  }
  return count
}
let hammingWeight2 = function (n) {
  return n.toString(2).split('').filter(n => n == '1').length
}
console.log(hammingWeight2(00000000000000000000000000001011));
