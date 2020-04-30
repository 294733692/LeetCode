/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
// 位运算
let hammingDistance = function (x, y) {
  let str = x ^ y
  let count = 0
  while (str > 0) {
    count += str & 1
    str = str >> 1
  }
  return count
};

// 内置函数
let hammingDistance1 = function (x, y) {
  let str = x ^ y
  return str.toString('2').split('').filter(item => item === '1').length
};

// 位移
let hammingDistance2 = function (x, y) {
  let str = x ^ y
  let count = 0
  while (str !== 0) {
    if (str % 2 === 1) count += 1
    str = str >> 1
  }
  return count
}

// 布赖恩·克尼根算法
let hammingDistance3 = function (x, y) {
  let str = x ^ y
  let count = 0
  while (str !== 0) {
    count +=1
    str = str & (str - 1)
  }
  return count
}
console.log(hammingDistance3(1, 4));
