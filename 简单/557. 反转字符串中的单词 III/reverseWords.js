// export default (str) => {
//   // 字符串按空格进行分隔，
//   let arr = str.split(' ')
//   // 对数组进行遍历，然后对每个元素进行反转
//   let result = arr.map(item => {
//     return item.split('').reverse().join('')
//   })
//   // map 返回的是数组，需要处理成字符串
//   return result.join(' ')
// }

export default (str) => {
  // 1.字符串按空格进行分隔，
  // 2.对数组进行遍历，然后对每个元素进行反转
  // 3.map 返回的是数组，需要处理成字符串
  return str.split(' ').map(item => {
    return item.split('').reverse().join('')
  }).join(' ')
}

// export default (str) => {
//   return str.match(/[\w']+/g).map(item => {
//     return item.split('').reverse().join('')
//   }).join(' ')
// }

