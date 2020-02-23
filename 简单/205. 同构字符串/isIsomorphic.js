/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
let isIsomorphic = function (s, t) {
  for (let i = 0; i < s.length; i++) {
    console.log(s.indexOf(s[i]));
    if (s.indexOf(s[i]) !== t.indexOf(t[i])) {
      return false
    }
  }
  return true
};
// console.log(isIsomorphic('egg', 'add'));
console.log(isIsomorphic('foo', 'bar'));
