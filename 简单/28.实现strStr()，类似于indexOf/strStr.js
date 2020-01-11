/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
// 双指针解法
// let strStr = function (haystack, needle) {
//   // 特殊情况
//   if (!needle) return 0
//   let hLen = haystack.length
//   let nLen = needle.length
//
//   // 数组长度从0开始，不加1的话，实际循环会少一次
//   for (let i = 0; i < hLen - nLen + 1; i++) {
//     for (let j = 0; j < nLen; j++) {
//       if (haystack[i + j] !== needle[j]) {
//         break
//       }
//       if (j + 1 === nLen) return i
//     }
//   }
//   return -1
// };
// 截取发
let strStr = function (haystack, needle) {
  let hLen = haystack.length
  let nLen = needle.length

  //  循环次数为hLen - nLen，超过这个范围，haystack后面不满足needle的长度
  for (let i = 0; i <= hLen - nLen; i++) {
    if (needle !== haystack.slice(i, i + nLen)) {
      continue
    } else {
      return i
    }
  }
  return -1
};
console.log(strStr('aaaa', 'aa'))
// console.log(strStr('mississippi', 'issi'));
