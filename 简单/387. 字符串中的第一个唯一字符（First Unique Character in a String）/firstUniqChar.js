/**
 * @param {string} s
 * @return {number}
 */
let firstUniqChar = function (s) {
  let map = new Map()
  for (let key of s) {
    if (map.has(key)) {
      map.set(key, map.get(key) + 1)
    } else {
      map.set(key, 1)
    }
  }
  for (let i = 0; i < s.length; i++) {
    if (map.get(s[i]) === 1) {
      return i
    }
  }
  return -1
};

let firstUniqChar1 = function (s) {
  console.time('time');
  let index = s.length
  let str = 'abcdefghijklmnopqrstuvwxyz'
  for (let key of str) {
    // 记录字母第一次出现的位置
    let first = s.indexOf(key)
    // 记录字母最后一次出现的位置
    let last = s.lastIndexOf(key)
    if (first !== -1 && first === last) {
      index = Math.min(index, first)
    }
  }
  console.timeEnd('time')
  return index === s.length ? -1 : index
}

let firstUniqChar2 = function (s) {
  for (let key of s) {
    if (s.indexOf(key) === s.lastIndexOf(key)) return s.indexOf(key)
  }
  return -1
}
console.log(firstUniqChar2('leetcode'));
