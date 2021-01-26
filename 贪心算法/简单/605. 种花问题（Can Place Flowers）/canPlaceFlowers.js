/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
let canPlaceFlowers = function (flowerbed, n) {
  flowerbed = [0, ...flowerbed, 0] // 处理边界问题
  let i = 1, len = flowerbed.length
  for (i; i < len; i++) {
    if (flowerbed[i] === 0 && flowerbed[i + 1] === 0 && flowerbed[i - 1] === 0) {
      flowerbed[i] = 1
      n--
    }
  }
  return n <= 0
}

let canPlaceFlowers1 = function (flowerbed, n) {
  let i = 0, len = flowerbed.length
  for (i; i < len; i += 2) {
    if (flowerbed[i] === 0) {
      if (flowerbed[i + 1] === 0 || i === flowerbed.length - 1) {
        n--
      } else {
        i++
      }
    }
  }
  return n <= 0
}


// console.log(canPlaceFlowers1([1, 0, 0, 0, 0, 1], 2))
console.log(canPlaceFlowers1([1, 0, 0, 0, 1], 2))