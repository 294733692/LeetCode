/**
 * @param {number} num
 * @return {string}
 */
let intToRoman = function (num) {
  let value = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1]
  let menu = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"]
  let res = ''
  let index = 0
  while (index < value.length) {
    while (num >= value[index]) {
      res += menu[index]
      num -= value[index]
    }
    index++
  }
  return res
};
console.log(intToRoman(478));
