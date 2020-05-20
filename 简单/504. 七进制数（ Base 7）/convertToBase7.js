/**
 * @param {number} num
 * @return {string}
 */
let convertToBase7 = function (num) {
  return num.toString(7)
};

let convertToBaseSeven = function (num) {
  let flag = num >= 0
  let res = []
  num = num >= 0 ? num : -num
  while (num >= 7) {
    res.push(num % 7)
    num = parseInt(num / 7)
  }
  res.push(num)
  return flag ? res.reverse().join('') : '-' + res.reverse().join('')
}
// console.log(convertToBaseSeven(100));
// console.log(convertToBaseSeven(-7));
console.log(convertToBaseSeven(7));
