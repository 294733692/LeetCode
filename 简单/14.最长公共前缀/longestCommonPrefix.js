/**
 * @param {string[]} strs
 * @return {string}
 * 水平扫描法
 */
// let longestCommonPrefix = function (strs) {
//   let result = strs[0]
//   if (strs.length === 0) return ''
//
//   for (let i = 0, len = strs.length; i < len; i++) {
//     while (strs[i].indexOf(result) != 0) {
//       result = result.slice(0, result.length - 1)
//       if (!result) return ''
//     }
//   }
//   return result
// };

/**
 * @param {string[]} strs
 * @return {string}
 * 水平扫描
 */

// let longestCommonPrefix = function (strs) {
//   if (strs.length === 0) return ''
//   for (let i = 0, len = strs[0].length; i < len; i++) {
//     let result = strs[0].charAt(i)
//     for (let j = 1; j < strs.length; j++) {
//       if (i === strs[j].length || strs[j].charAt(i) != result) {
//         return strs[0].slice(0, i)
//       }
//     }
//   }
//   return strs[0]
// }

let longestCommonPrefix = function (strs) {
  if (strs.length === 0 || strs === '' || strs === null) return ''

  function lcPrefix (strs, left, right) {
    // 如果左右长度相等，返回strs[1]
    if (left === right) {
      return strs[left]
    } else {
      // 找出中间数字
      let mid = parseInt((left + right) / 2)
      // left数字继续划分
      let lcpLeft = lcPrefix(strs, left, mid)
      // 右边数字继续划分
      let lcpRight = lcPrefix(strs, mid + 1, right)
      return comminPreFix(lcpLeft, lcpRight)
    }
  }

  function comminPreFix (left, right) {
    let min = Math.min(left.length, right.length)
    for (let i = 0; i < min; i++) {
      if (left.charAt(i) != right.charAt(i)) {
        return left.slice(0, i)
      }
    }
    return left.slice(0, min)
  }

  return lcPrefix(strs, 0, strs.length - 1)
}

// console.log(longestCommonPrefix(["fliower", "fliow", "flight"]))
// console.log(longestCommonPrefix(["leetcode", "leet", "lee", 'le',]))
// console.log(longestCommonPrefix(["c", "acc", "ccc"]))
console.log(longestCommonPrefix(['']));

