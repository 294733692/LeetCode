/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
let reverseBits = function (n) {
  return parseInt((n).toString(2).padStart(32, '0').split('').reverse().join(''), 2);
};
console.log(reverseBits(00000010100101000001111010011100))
