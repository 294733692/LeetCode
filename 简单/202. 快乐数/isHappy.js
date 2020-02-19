/**
 * @param {number} n
 * @return {boolean}
 */
let isHappy = function (n) {
  // 利用set集合判断，如果里面存在重复值，那么必定不是快乐数
  let set = new Set()
  let sum = 0
  // 将数字转化为字符串
  n += ''
  while (sum !== 1) {
    sum = 0
    for (let i = 0; i < n.length; i++) {
      sum += n[i] * n[i]
    }
    n = sum + ''
    if (set.has(sum)) return false
    set.add(sum)
  }
  return true
};
/**
 * @description：
 * @author：
 * @date 2020/2/19 20:38
 */
// 快慢指针判断
let isHappy1 = function (n) {
  let slow = n
  let fast = n

  let bitSquareSum = function (n) {
    let sum = 0;
    while (n > 0) {
      let bit = n % 10;
      sum += bit * bit;
      n = parseInt(n / 10);
    }
    return sum;
  }

  do {
    slow = bitSquareSum(slow);
    fast = bitSquareSum(fast);
    fast = bitSquareSum(fast);
  } while (slow !== fast);

  return slow === 1;
}
console.log(isHappy1(19));
