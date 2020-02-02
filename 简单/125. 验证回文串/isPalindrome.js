/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  // 去除除了数字和字母之外的所有字符，并全部转化为小写
  s = s.replace(/[^0-9a-zA-Z]/g, '').toLocaleLowerCase();
  // 将处理后的数组进行反序
  let reverse = s.split('').reverse().join('');
  // 对比出去后的字符传和反序后的字符串是否相等
  return s === reverse;
};

var isPalindrome1 = function (s) {
  // 去除除了数字和字母之外的所有字符，并全部转化为小写
  s = s.replace(/[^0-9a-zA-Z]/g, '').toLocaleLowerCase();
  // 循环长度的一半，因为回文，那说明对半相等。
  for (let i = 0; i < s.length / 2; i++) {
    // 数组是从0开始的，所以数组长度需要减一
    // 比较第一位和最后一位，如果不相同，就不是会问，否则继续对比第二位和倒数第二位，依次类推
    if (s[i] !== s[s.length - 1 - i]) {
      return false
    }
  }
  return true
};
