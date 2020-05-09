/**
 * @param {string} S
 * @param {number} K
 * @return {string}
 */
let licenseKeyFormatting = function (S, K) {
  S = S.replace(/-/g, '')
  let str = ''
  let i = S.length - K

  while (i + K > 0) {
    str = (i > 0 ? '-' : '') + S.substring(i, i + K) + str
    console.log(S.substring(i, i + K));
    console.log(S.slice(i, i + K), i);
    i -= K
  }
  return str.toUpperCase()
};
// console.log(licenseKeyFormatting("5F3Z-2e-9-w", 4));
console.log(licenseKeyFormatting("2-5g-3-J", 2));
