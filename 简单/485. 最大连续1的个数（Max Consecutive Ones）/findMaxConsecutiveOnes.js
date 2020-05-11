/**
 * @param {number[]} nums
 * @return {number}
 */
let findMaxConsecutiveOnes = function (nums) {
  let arr = nums.join('').match(/1+/ig)
  let res = 0
  for (let i = 0; i < arr.length; i++) {
    res = res > arr[i].length ? res : arr[i].length
  }
  return res
};

let findMaxConsecutiveOnes1 = function (nums) {
  let count = 0
  let res = 0

  for (let i = 0; i < nums.length; i++) {
    count = nums[i] === 1 ? count + 1 : 0
    res = count > res ? count : res
  }
  return res
};
console.log(findMaxConsecutiveOnes1([1, 1, 0, 1, 1, 1]));
console.log(findMaxConsecutiveOnes1([0]));
