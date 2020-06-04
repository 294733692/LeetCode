/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
let convert = function (s, numRows) {
  if (s.length === 1) return s
  let len = Math.max(s.length, numRows) // 防止s的长度，小于生成数组的行数
  let row = new Array(len).fill('') // 生成数组
  let curRow = 0
  let down = false
  let str = ''

  for (let key of s) {
    row[curRow] += key
    if (curRow === 0 || curRow === numRows - 1) down = !down  // 当curRow = 0或者是为numRows的时候，箭头方向发生反转
    curRow += down ? 1 : -1
  }
  for (let key of row) str += key
  return str
};
convert('PAHNAPLSIIGYIR', 3)
