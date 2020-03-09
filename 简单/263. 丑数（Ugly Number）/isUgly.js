/**
 * @param {number} num
 * @return {boolean}
 */
let isUgly = function (num) {
  console.time('耗时');
  if (num <= 0) return false
  while (num % 2 === 0) num /= 2
  while (num % 3 === 0) num /= 3
  while (num % 5 === 0) num /= 5
  if (num === 1) return true
  console.timeEnd('耗时')
  return false
};
console.log(isUgly(14));
