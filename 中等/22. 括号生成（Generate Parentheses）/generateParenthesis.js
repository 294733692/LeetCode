/**
 * @param {number} n
 * @return {string[]}
 */
// 深度遍历（回溯） + 减枝
let generateParenthesis = function (n) {
  let res = []
  let _dfs = (left, right, curStr) => {
    // 左右括号都不剩余，递归终止
    if (left === 0 && right === 0) {
      res.push(curStr)
      return
    }
    // 如果左括号还有剩余，那么继续拼接左括号
    if (left > 0) _dfs(left - 1, right, curStr + '(')
    // 如果剩余右括号对于剩余左括号的话，那么继续拼接右括号
    if (right > left) _dfs(left, right - 1, curStr + ')')
  }
  _dfs(n, n, '')
  return res
};

console.log(generateParenthesis(4));
