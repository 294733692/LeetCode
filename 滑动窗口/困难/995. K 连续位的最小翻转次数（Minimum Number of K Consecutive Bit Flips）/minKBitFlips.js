/**
 * @param {number[]} A
 * @param {number} K
 * @return {number}
 */
let minKBitFlips = function (A, K) {
  const n = A.length
  const diff = new Array(n + 1).fill(0) // 差分数组
  let ans = 0, revCnt = 0
  for (let i = 0; i < n; i++) {
    revCnt += diff[i] // 记录差分数组，当前位置需要翻转的类加值
    if ((A[i] + revCnt) % 2 === 0) { // 如果是偶数的话，说明当前元素的实际值为0，需要翻转区间[i, i + K - 1]
      if ((i + K) > n) return -1 // 边界条件，如果满足，则无法进行翻转
      ++ans // 翻转结果+1
      ++revCnt
      --diff[i + K]
    }
  }
  return ans
}

let minKBitFlips1 = function (A, K) {
  const n = A.length
  let ans = 0, revCnt = 0
  for (let i = 0; i < n; ++i) {
    if (i >= K && A[i - K] > 1) {
      revCnt ^= 1
      A[i - K] -= 2 // 复原数组元素，若允许修改数组 A，则可以省略
    }
    if (A[i] == revCnt) {
      if (i + K > n) {
        return -1
      }
      ++ans
      revCnt ^= 1
      A[i] += 2
    }
  }
  return ans
}
minKBitFlips1([0, 0, 0, 1, 0, 1, 1, 0], 3)
