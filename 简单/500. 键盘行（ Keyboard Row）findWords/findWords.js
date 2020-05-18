/**
 * @param {string[]} words
 * @return {string[]}
 */
let findWords = function (words) {
  let reg = /^([qwertyuiop]+|[asdfghjkl]+|[zxcvbnm]+)$/i

  return words.filter(item => {
    return reg.test(item.toLowerCase())
  })
};
console.log(findWords(["Hello", "Alaska", "Dad", "Peace"]));
