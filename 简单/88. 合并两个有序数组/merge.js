/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
let merge = function (nums1, m, nums2, n) {
  let p1 = m - 1
  let p2 = n - 1
  let p = m + n - 1

  while ((p1 >= 0) && (p2 >= 0)) {
    if (nums1[p1] < nums2[p2]) {
      nums1[p--] = nums2[p2--]
    } else {
      nums1[p--] = nums1[p1--]
    }
  }

  function arraycopy (src, srcPos, dest, destPost, length) {
    return dest.splice(destPost, length, ...src.slice(srcPos, srcPos + length))
  }

  return arraycopy(nums2, 0, nums1, 0, p2 + 1)
};
console.log(merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3));
// console.log(merge([0], 0, [1], 1));
