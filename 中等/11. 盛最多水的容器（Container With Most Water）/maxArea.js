/**
 * @param {number[]} height
 * @return {number}
 */
let maxArea = function (height) {
  let left = 0
  let right = height.length - 1
  let maxArea = 0 // 记录最大容量
  while (left < right) {
    // 记录当前最大area
    let currArea = Math.min(height[left], height[right]) * (right - left)
    // 比较当前area和记录最大的area
    maxArea = Math.max(currArea, maxArea)
    height[left] <= height[right] ? left += 1 : right -= 1
  }
  return maxArea
};
console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]));
