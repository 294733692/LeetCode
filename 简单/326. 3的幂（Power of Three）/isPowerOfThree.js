/**
 * @param {number} n
 * @return {boolean}
 */
let isPowerOfThree = function (n) {
  // 循环
  while (n >= 3) {
    n /= 3
  }
  return n === 1

  // 基准转换
  // return n.toString(3).match(/^10*$/) !== null

  // 数学公式
  // return (Math.log10(n) / Math.log10(3)) % 1 === 0

  // 整数限制
  // return n > 0 && 1162261467 % n == 0;

  // 枚举
  switch (n) {
    case 1:
    case 3:
    case 9:
    case 27:
    case 81:
    case 243:
    case 729:
    case 2187:
    case 6561:
    case 19683:
    case 59049:
    case 177147:
    case 531441:
    case 1594323:
    case 4782969:
    case 14348907:
    case 43046721:
    case 129140163:
    case 387420489:
    case 1162261467:return true;
    default: return false;
  }
};
console.log(isPowerOfThree(9))
console.log(isPowerOfThree(8))

