/**
 * @param {number} num
 * @return {string}
 */
let toHex = function(num) {
  if (!num) return '0'
  let res = ''
  // 枚举出16进制所对应的字符串
  let meun = '0123456789abcdef'

  while (num != 0 && res.length < 8) {
    // 位移运算并不能保证num==0，需要使用32位int保证（对应16进制小于等于8位）。使用string直接进行字符串拼接....
    res = meun[num & 15] + res
    // >>算数位移，其中正数右移左边补0，负数右移左边补1。
    num >>= 4
  }
  return res
};

console.log(toHex(26));
