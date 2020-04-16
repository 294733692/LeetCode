/**
 * @param {number[]} nums
 * @return {number[]}
 */
let findDisappearedNumbers = function (nums) {
  let arr = []
  let set = new Set(nums)

  for (let i = 1; i <= nums.length; i++) {
    if (!set.has(i)) arr.push(i)
  }
  return arr
};

let findDisappearedNumbers1 = function (nums) {
  let arr = []
  for (let i = 0; i < nums.length; i++) {
    if (nums[Math.abs(nums[i]) - 1] > 0) {
      nums[Math.abs(nums[i]) - 1] *= -1
    }
  }
  for (let i= 0; i< nums.length; i++) {
    if (nums[i] > 0) arr.push(i + 1)
  }
  return arr
}
console.log(findDisappearedNumbers1([4, 3, 2, 7, 8, 2, 3, 1]));
console.log(findDisappearedNumbers1([1, 1]));
