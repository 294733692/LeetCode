/**
 * @param {string} str
 * @return {number}
 */
let myAtoi = function (str) {
  let num = parseInt(str, 10)
  let maxNum = Math.pow(2, 31) - 1
  let minNum = Math.pow(-2, 31)
  console.log(minNum);

  // 边界判断
  if (isNaN(num)) {
    return 0
  } else if (num > maxNum || num < minNum) {
    return num < minNum ? minNum : maxNum
  } else {
    return num
  }
};

let myAtoi1 = function (str) {
  let flag = true //判断正负标志位
  let restNum = /[0-9]/ //是否为数值正则验证
  let i = 0 //当前字符串索引
  let num = 0 //要返回的数值
  let int_min = 2147483648  //范围判断值
  while (str[i] === " ") i++  //使标志位到第一位非空字符
  if (str[i] === "-") { //确定是否有正负标志位，
    flag = false
    i++ //索引前移，防止有-+这样多个标志位
  } else if (str[i] === "+") {  //确定是否有正负标志位
    i++
  }
  while (restNum.test(str[i]) && i < str.length) {  //判断i是否超出索引，以及只有数值可以进入数值叠加
    num = num*10 + parseInt(str[i])
    i++
    if (num >= 2147483648) {
      num = flag ? 2147483647 : 2147483648
      break
    }
  }
  return flag ? num : -num
}
// myAtoi("    4-42")
console.log(myAtoi1("    -42"));
console.log(myAtoi1("-91283472332"));
