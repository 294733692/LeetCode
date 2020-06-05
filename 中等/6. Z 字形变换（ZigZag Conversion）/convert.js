/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */

// 按行排序
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

// 按行访问
let convert1 = function (s, numRows) {
  if (numRows === 1) return s
  let arr = new Array(numRows).fill('') // 构建数组
  let n = numRows * 2 - 2 // 循环周期，2倍行数 - 首尾
  for (let i = 0; i < s.length; i++) {
    let x = i % n
    // x < numRows， x对应行好
    // x >= numRows，n - x对应行号
    let curRow = x < numRows ? x : n - x
    arr[curRow] += s[i]
  }
  return arr.join('')
}

console.log(convert1('PAHNAPLSIIGYIR', 3));
