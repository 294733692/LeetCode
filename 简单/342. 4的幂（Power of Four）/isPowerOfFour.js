/**
 * @param {number} num
 * @return {boolean}
 */
let isPowerOfFour = function (num) {
  // 循环
  // while (num >=4) {
  //   num /=4
  // }
  // return num === 1

  // 基底转换
  // return num.toString(4).match(/^10*$/) !== null

  // 数学公式转换
  // return (Math.log10(num) / Math.log10(4)) % 1 === 0

  // 同上，既然是4的幕，那么肯定也是2的幕
  // return (num > 0) && (Math.log(num) / Math.log(2) % 2 == 0)

  // 位运算
  // return (num > 0) && ((num & (num - 1)) == 0) && ((num & 0xaaaaaaaa) == 0)

  // 位运算+数学运算
  return (num > 0) && ((num & (num - 1)) == 0) && (num % 3 == 1);
};
