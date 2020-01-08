/**
 * @param {string} s
 * @return {boolean}
 */
let isValid = function (s) {
  // 初始化栈
  let stack = []
  // 建立字典
  let map = {
    ")": "(",
    "}": "{",
    "]": "[",
  }
  for (let key of s) {
    if (!map.hasOwnProperty(key)) {
      stack.push(key)
    } else {
      if (stack.pop() !== map[key]) {
        return false
      }
    }
  }
  return !stack.length
};
let isValid1 = function(s) {
  while (s.indexOf('[]') > -1 || s.indexOf('{}') > -1 || s.indexOf('()') > -1) {
    s = s.replace('{}', '')
    s = s.replace('[]', '')
    s = s.replace('()', '')
  }
  return s == ''
}

console.log(isValid('()[]{}'));
console.log(isValid("(]"));
console.log(isValid("([)]"));
console.log(isValid("{[]}"));
