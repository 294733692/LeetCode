/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
let intersection = function (nums1, nums2) {
  let arr = new Set(nums2)
  let res = new Set(nums1.filter(item => arr.has(item)))
  return [...res]
};
console.log(intersection([1, 2, 2, 1], [2, 2]));
