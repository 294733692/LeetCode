/**
 * @param {number} n
 * @return {boolean}
 */
let canWinNim = function (n) {
  return (n & 3) !== 0
};
console.log(canWinNim(4));
