/**
 * @param {number[]} nums
 */
let NumArray = function (nums) {
  this.sum = new Array(nums.length + 1)
  this.sum[0] = 0
  for (let i = 1; i < nums.length + 1; i++) {
    this.sum[i] = this.sum[i - 1] + nums[i - 1]
  }
};

/**
 * @param {number} i
 * @param {number} j
 * @return {number}
 */
NumArray.prototype.sumRange = function (i, j) {
  return this.sum[j + 1] - this.sum[i]
};

/**
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(i,j)
 */
let nums = [-2, 0, 3, -5, 2, -1]
let obj = new NumArray(nums)
let sum = obj.sumRange(0, 5)
console.log(sum);
