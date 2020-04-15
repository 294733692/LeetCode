/**
 * @param {character[]} chars
 * @return {number}
 */
let compress = function (chars) {
  let map = new Map()
  let arr = []
  for (let key of chars) {
    if (map.has(key)) {
      map.set(key, map.get(key) + 1)
    } else {
      map.set(key, 1)
    }
  }
  for (let key of map) {
    arr.push(...key)
  }
  return arr.map(String)
};

// 双指针
let compress1 = function (chars) {
  let fast = 0
  let slow = 0
  // 计算同一个字符出现的次数
  let count = 0
  while (fast <= chars.length) {
    // 如果两个指针指向的字符串相同，
    // 计数器加1，快指针加1
    if (chars[slow] === chars[fast]) {
      count++
      fast++
    } else {
      // 如果不相等，那么判断相同字符串出现的次数
      // 如果count大于1
      // 使用splice对原数组进行替换
      if (count > 1) {
        // 这里讲同一字符出现的字符串的次数给拆分
        let temp = String(count).split('')
        // 这里使用splice修改原数组，并替换
        chars.splice(slow, count, chars[slow], ...temp)
        // 由于原数组长度已经发生了变化，fast的位置也需要重新定位
        fast = fast - count + 1 + temp.length
      }
      slow = fast
      count = 0
    }
  }
  console.log(chars);
}

let compress2 = function (chars) {
  for (let i = 0, j = 0; j < chars.length;) {
    chars[i] = chars[j]
    let temp = j
    while (j < chars.length && chars[i] === chars[j]) j++
    i++
    let dis = j - temp
    if (dis > 1) {
      let distance = Array.from('' + dis)
      for (let k = 0; k < distance.length; k++) {
        chars[i++] = distance[k]
      }
    }
    return i
  }
}

console.log(compress2(["a", "a", "b", "b", "c", "c", "c"]))
