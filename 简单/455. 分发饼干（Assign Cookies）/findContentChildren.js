/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function (g, s) {
  g = g.sort((a, b) => a - b)
  s = s.sort((a, b) => a - b)
  let j = 0
  let num = 0
  for (let i = 0; i <= g.length - 1; i++) {
    for (; j <= s.length - 1; j++) {
      if (g[i] <= s[j]) {
        num++
        j++
        break
      }
    }
  }
  return num
};
// console.log(findContentChildren([1, 2], [1, 2, 3]));
// console.log(findContentChildren([1, 2, 3], [1, 2, 3]));
console.log(findContentChildren([10, 9, 8, 7], [5, 6, 7, 8]));
