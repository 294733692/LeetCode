/**
 * @param {string} s
 * @return {string}
 */
let reverseVowels = function (s) {
  // let res = s.split('')
  // let arr = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']
  // let temp = []
  //
  // for (let i = 0; i < res.length; i++) {
  //   if (arr.includes(s[i])) temp.push(s[i])
  // }
  // for (let i = 0; i < res.length; i++) {
  //   if (arr.includes(res[i])) {
  //     res[i] = temp.pop()
  //   }
  // }
  // return res.join('')

  let vowels = []
  if (s.match(/[aeiou]/ig)) {
    vowels = s.match(/[aeiou]/ig)
  } else {
    return s
  }
  return s.replace(/[aeiou]/ig, () => {
    return vowels.pop()
  })
};
console.log(reverseVowels('leetcode'));

