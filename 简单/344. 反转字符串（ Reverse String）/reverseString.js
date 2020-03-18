/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
let reverseString = function (s) {
  // Api解法
  // return s.reverse()

  // 双指针
  let start = 0
  let end = s.length

  while (start < end) {
    let temp = s[end]
    s[end] = s[start]
    s[start] = temp
    start++
    end--
  }
  return s
};

// 递归
let reverseString1 = function (s) {
  let _helper = (s, left, right) => {
    if (left >= right) return
    let temp = s[right]
    s[right--] = s[left]
    s[left++] = temp
    _helper(s, left, right)
  }

  return _helper(s, 0, s.length - 1)
}

reverseString(["h", "e", "l", "l", "o"])
