var letterCombinations = function(digits) {
  let map = ['', '', 'abc', 'def', 'ghi', 'jkl', 'mno', 'pqrs', 'tuv', 'wxyz']
  let num = digits.split('')
  let code = []
  // 映射输入字符串对应的英文字段
  num.forEach(item => {
    if (map[item]) {
      code.push(map[item])
    }
  })
  if (code.length === 0) {
    return code
  } else if (code.length === 1) {
    return code[0].split('');
  } else if (code.length > 1) {
    let Combinations = (arr) => {
      let result = []
      for (var i = 0; i < arr[0].length; i++) {
        for (var j = 0; j < arr[1].length; j++) {
          result.push(`${arr[0][i]}${arr[1][j]}`)
        }
      }
      arr.splice(0, 2, result)

      if (arr.length > 1) {
        Combinations(arr)
      } else {
        return result
      }
      return arr[0]
    }

    return Combinations(code)
  }
};

export default letterCombinations
