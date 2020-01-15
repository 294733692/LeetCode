/**
 * @param {number[]} digits
 * @return {number[]}
 */
let plusOne = function (digits) {
  // 从后循环
  for (let i = digits.length - 1; i >= 0; i--) {
    // 最后一位数+1
    digits[i]++
    // 最后一位数取余，如果为0，说明最后一位为9，需要进位
    digits[i] %= 10
    // 如果当前为不0，说明不需要进位，直接数字
    if (digits[i] !== 0) return digits
  }
  // 如果循环完，都在进位，初始化一个当前数组长度+1的数组，并把每一项重置为0
  digits = [...new Array(digits.length + 1)].map(() => 0)
  // 第一位设置为1
  digits[0] = 1
  return digits
};

console.log(plusOne([ 9]));
