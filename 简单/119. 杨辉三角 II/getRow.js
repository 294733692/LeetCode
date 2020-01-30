/**
 * @param {number} rowIndex
 * @return {number[]}
 */
let getRow = function (rowIndex) {
  let res = []
  for (let i = 0; i <= rowIndex; i++) {
    let arrs = [1] // 初始化当前是数组第一位数
    let prevArr = res[i - 1] || 0
    for (let j = 0; j < rowIndex; j++) {
      arrs.push(prevArr[j] + (prevArr[j + 1] || 0))
    }
    res.push(arrs)
  }
  return res[rowIndex]
};
let getRow1 = function(rowIndex) {
  let resultArr = [1];
  for (let i = 0; i < rowIndex; i++) {
    resultArr.unshift(0);
    for (let j = 0; j < i + 1; j++) {
      resultArr[j] = resultArr[j] + resultArr[j + 1];
    }
  }
  return resultArr;
};
var getRow2 = function (numRows) {
  const result = [];
  for (let i = 0; i < numRows + 1; i++) {
    const subArr = [1];
    for (let j = 1; j <= (i >>> 1); j++) {
      subArr[j] = result[i - 1][j - 1] + result[i - 1][j];
    }
    for (let k = (i >>> 1) + 1; k <= i; k++) {
      subArr[k] = subArr[i - k]
    }
    result.push(subArr);
  }
  return result[numRows]
};
console.log(getRow2(3));
