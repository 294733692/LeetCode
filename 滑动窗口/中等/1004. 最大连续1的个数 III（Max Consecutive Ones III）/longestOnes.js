/**
 * @param {number[]} A
 * @param {number} K
 * @return {number}
 */
let longestOnes = function (A, K) {
  let len = A.length
  let ans = 0, left = 0, right = 0
  while (right < len) {
    if (A[right] === 0) { // 如果A[right]为 0
      if (K === 0) { // 如果 K 为 0
        while (A[left] === 1) {
          left++
        }
        left++
      } else { // 如果K不为0，说明还有将0翻转为1的次数，并且将K的长度减去1
        K--
      }
    }
    ans = Math.max(ans, ++right - left)
  }
  return ans
}
console.log(longestOnes([1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0], 2))
