/**
 * @param {number} area
 * @return {number[]}
 */
let constructRectangle = function (area) {
  let result = []

  for (let i = Math.sqrt(area) | 0; i > 0; i--) {
    let j = area / i
    if (j === (j | 0) && j >= i) {
      result = [j, i]
      break
    }
  }
  return result
}

let constructRectangle1 = function (area) {
  let width = Math.sqrt(area)

  while (area % width !== 0) width--

  return [area / width, width]
}
console.log(constructRectangle1(4));
