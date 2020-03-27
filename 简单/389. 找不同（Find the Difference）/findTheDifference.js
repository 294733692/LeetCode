/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
let findTheDifference = function (s, t) {
  let map = new Map()
  for (let key of s) {
    if (map.has(key)) {
      map.set(key, map.get(key) + 1)
    } else {
      map.set(key, 1)
    }
  }
  for (let key of t) {
    if (map.get(key)) {
      map.set(key, map.get(key) - 1)
    } else {
      return key
    }
  }
}

// 正则
let findTheDifference1 = function (s, t) {
  for (let key of s) {
    t = t.replace(new RegExp(key), '')
  }
  return t
}

// ASCII值
let findTheDifference2 = function (s, t) {
  let res = 0
  for (let key of t) {
    res += key.charCodeAt()
  }
  for (let key of s) {
    res -= key.charCodeAt()
  }
  return String.fromCharCode(res)
}

console.log(findTheDifference2('abcd', 'abcde'));
console.log(findTheDifference2('a', 'aa'));
