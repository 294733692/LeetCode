/**
 * @param {number} x
 * @return {boolean}
 */
let isPalindrome = function (x) {
  let revertedNumber = 0
  // 特殊情况
  // 1、如果输入数字为负数，那么肯定不是回文
  // 2、同样的，如果输入数字末尾是0，那么为了使数字为回文，那么第一位页数也应该是回文，那么满足这个条件的只有0
  if (x < 0 || (x % 10 === 0 && x !== 0)) {
    return false
  }

  // 1、反转后半部分数字
  //    对于数字12321，如果执行12321 % 10 , 我们将得到最后一位数字，如果要得到倒数第二位数字，我们可以先通过把最后一位数字从12321中移除(12321/10=1232),在求出上一步的数的余数(1232%10=2)
  //    这样就可以得到倒数第二位数字，如果我们把最后一位数字乘以10，在加上倒数第二位数字(1*10+2=12),就得到我们想要的反转后的数字，如果继续这个过程，就会得到更多的反转数字
  // 2、判断反转数字达到原始数组的一半
  //    我们将原始数字除以10，反转数字乘以10，所有当原始数字小于反转数字的时候，就意味着我们已经处理了一半位数的数字了（考虑到js精度问题，需要将/10的数事先*10）

  while (x > revertedNumber) {
    revertedNumber = revertedNumber * 10 + x % 10
    x = (x - x % 10) / 10
  }

  // 当数字长度为奇数时，我们可以通过revertedNumber/10 去出去中位数
  // 例如，当输入为12321时，在while循环的末尾我们可以得到x = 12，revertedNumber = 123，由于处于中位数的数字不影响回文(它总是和自己相等)，所有我们可以简单的将其去除
  return x === revertedNumber || x === (revertedNumber - revertedNumber % 10) / 10
};

export default isPalindrome
