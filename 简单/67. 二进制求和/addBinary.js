/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
let addBinary = function (a, b) {
  // 存储结果
  let result = ''
  // 判断是否需要进位
  let curCarry = 0
  for (let i = a.length - 1, j = b.length - 1; i >= 0 || j >= 0; i--, j--) {
    let sum = curCarry
    sum += i >= 0 ? parseInt(a[i]) : 0  // 获取字符串a对应列的值，当i<0的时候（a的位数比b的位数小，需要对齐向前补0，确保a，b位数相等），向前补sum+=0(向前补0)，否则返回原值
    sum += j >= 0 ? parseInt(b[j]) : 0  // 同上
    result += sum % 2  // 如果a[i] + b[j]项都为1，那么对2取余为0，否则为1
    curCarry = Math.floor(sum / 2) // 如果a[i] + b[j]都为1，那么对2取整为1，否则为0
  }
  result += curCarry === 1 ? curCarry : ""  // 判断最后一位是否有进位，有这在前面加上1.否则原样输出
  return result.split('').reverse().join('')
};
var addBinary1 = function(a, b) {
  let temp = '';
  let res = '';

  for (let i = a.length - 1, j = b.length - 1; i >= 0 || j >= 0||temp; i--, j--) {
    // ~~对于正数，它向下取整；对于负数，向上取整；非数字取值为0
    temp += ~~a[i] + ~~b[j];
    res = String(temp % 2) + res;
    temp = temp > 1;
  }
  return  res;
};
console.log(addBinary1('1010', '1011'));
