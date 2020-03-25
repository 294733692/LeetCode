/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
let canConstruct = function (ransomNote, magazine) {
  let map = new Map()
  for (let key of magazine) {
    if (map.has(key)) {
      map.set(key, map.get(key) + 1)
    } else {
      map.set(key, 1)
    }
  }

  for (let key of ransomNote) {
    if (map.has(key)) {
      if (map.get(key) <= 0) {
        return false
      }
      map.set(key, map.get(key) - 1)
    } else {
      return false
    }
  }
  return true
};
// 正则
let canConstruct1 = function (ransomNote, magazine) {
  for (let key of magazine) {
    if (ransomNote.includes(key)) {
      ransomNote = ransomNote.replace(new RegExp(key), '')
      console.log(ransomNote);
    }
  }
  return ransomNote.length === 0
};
console.log(canConstruct("aa", "aab"));
console.log(canConstruct("a", "b"));
