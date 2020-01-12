/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
// let searchInsert = function (nums, target) {
//   let left = 0
//   let right = nums.length - 1
//   while (left <= right) {
//     let mid = parseInt((left + right) / 2)
//     if (nums[mid] === target) {
//       return mid
//     } else if (nums[mid] < target) {
//       left = mid + 1
//     } else {
//       right = mid - 1
//     }
//   }
//   return left
// };

let searchInsert = function (nums, target) {
  let i = nums.indexOf(target)
  if (i !== -1) return i

  for (let j = 0; j < nums.length; j++) {
    if (nums[j] >= target) {
      return j
    }
  }
  return nums.length
}
console.log(searchInsert([1, 3, 5, 6], 5));
console.log(searchInsert([1,3,5,6], 2))
console.log(searchInsert([1, 3, 5, 6], 7))
