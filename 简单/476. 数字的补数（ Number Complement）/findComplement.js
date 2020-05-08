/**
 * @param {number} num
 * @return {number}
 */
let findComplement = function (num) {
  let temp = num, res = 0
  while (temp > 0) {
    temp >>= 1
    res = (res << 1) + 1
  }
  return num ^ res
};

let findComplement1 = function (num) {
  let temp = 1
  while (temp < num) {
    temp = temp << 1 | 1
  }
  return num ^ temp
}

let findComplement2 = function (num) {
  let temp = num.toString(2).split('')
  let arr = []

  for (let key of temp) {
    if (key === '0') {
      arr.push('1')
    } else {
      arr.push('0')
    }
  }
  return parseInt(arr.join(''), 2)
}
console.log(findComplement2(5));
