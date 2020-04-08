/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
let addStrings = function (num1, num2) {
  let res = ''
  let i = num1.length - 1
  let j = num2.length - 1
  let carry = 0
  let temp = 0
  while (i >= 0 || j >= 0) {
    temp = parseInt(num1[i] || 0) + parseInt(num2[j] || 0) + carry
    carry = parseInt(temp / 10)
    res = (temp % 10) + res
    i--
    j--
  }
  // num1和num2长度为1的时候，循环结束
  // carry需要进位。就加上+res
  if (carry) res = carry + res
  return res
};
console.log(addStrings('1', '9'));
