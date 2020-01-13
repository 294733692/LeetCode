/**
 * @param {number} n
 * @return {string}
 */
let countAndSay = function (n) {
  if (n === 1) {
    return '1'
  } else {
    // 递归记录上一次的返回值
    let preResult = countAndSay(n - 1)
    let nowResult = ''
    // 记录同一个数字出现的次数
    let nowLength = 1
    for (let i = 0; i < preResult.length; i++) {
      if (preResult[i] === preResult[i + 1]) {
        nowLength++
      } else {
        nowResult = nowResult + nowLength + preResult[i]
        nowLength = 1
      }
    }
    return nowResult
  }
};
console.log(countAndSay(3));
