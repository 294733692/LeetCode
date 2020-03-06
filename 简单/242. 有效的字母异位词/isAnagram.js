/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
// 排序
let isAnagram = function (s, t) {
  let sArr = s.split('').sort().join('')
  let tArr = t.split('').sort().join('')
  return sArr === tArr
};
let isAnagram1 = function (s, t) {
  if (s.length !== t.length) return false

  let map = new Map()
  // 将n放入map中，
  for (let n of s) {
    // 判断map中是否有n
    if (map.has(n)) {
      // 如果存在重复元素，重复元素值+1，用于计数标记
      map.set(n, map.get(n) + 1)
    } else {
      // 如果没有存在，将n存入map中，值标记为1
      map.set(n, 1)
    }
  }
  console.log(map);

  for (let n of t) {
    // 判断map里面是否存在该值，并且出现次数是否大于0次
    if (map.has(n) && map.get(n) > 0) {
      // 如果存在，将出现重复值的次数-1
      map.set(n, map.get(n) - 1)
    } else {
      // 如果不满足上面条件，说明不是不是字母异位词
      return false
    }
  }
  //如果上面循环完毕，没有返回false，那么说明，两个字符串是字母异位词
  return true
}

console.log(isAnagram1('anagram', 'nagaram'));
