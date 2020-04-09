/**
 * @param {string} s
 * @return {number}
 */
let countSegments = function (s) {
  let count = 0

  if (s === '') return 0

  for (let i = 0; i < s.length; i++) {
    if ((i === 0 || s[i - 1] === ' ') && s[i] !== ' ') count++
  }
  return count
};

let countSegments1 = function (s) {
  return s.split(' ').filter(Boolean).length
}

let countSegments2 = function (s) {
  let count = 0
  s = s.split(' ')
  for (let key in s) {
    if (s[key]) {
      count++
    }
  }
  return count
}
console.log(countSegments("Hello, my name is John"));
console.log(countSegments2("                "));
