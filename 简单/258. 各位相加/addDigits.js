/**
 * @param {number} num
 * @return {number}
 */
let addDigits = function (num) {
  if (num < 10) {
    return num
  }
  let cur = 0
  while (num !== 0) {
    cur += num % 10
    num = parseInt(num / 10)
  }
  return addDigits(cur)
};
console.log(addDigits(38))


// 数学公式求解
let addDigits = function (num) {
  return (n - 1) % 9 + 1
}
