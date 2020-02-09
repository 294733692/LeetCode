/**
 * @param {number} n
 * @return {string}
 */
let convertToTitle = function (n) {
  let res = ''
  while (n > 0) {
    n--
    res = String.fromCharCode(n % 26 + 65) + res
    n = parseInt(n / 26)
  }
  return res
};
console.log(convertToTitle(701))
