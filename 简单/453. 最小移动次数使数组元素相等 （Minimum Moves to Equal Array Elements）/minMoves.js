/**
 * @param {number[]} nums
 * @return {number}
 */
let minMoves = function (nums) {
  let min= Math.min.apply(null, nums)
  let count = 0
  for (let key of nums) {
    count += key - min
  }
  return count
};
console.log(minMoves([1, 2, 3]));
