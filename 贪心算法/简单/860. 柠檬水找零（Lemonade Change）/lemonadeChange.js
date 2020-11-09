/**
 * @param {number[]} bills
 * @return {boolean}
 */
let lemonadeChange = function (bills) {
  // 记录$5和$10拥有的张数
  let five = 0, ten = 0, res = true
  for (let bill of bills) {
    // 如果用户给的是$5,five++
    if (bill === 5) {
      five++
    } else if (bill === 10) {
      // 如果用户给的是$10，
      // 但是商家自身没有$5美元
      if (five === 0) {
        res = false
        break
      }
      // 如果商家有$5，那么减少一张$5,增加一张$10
      five--
      ten++
    } else if (bill === 20) {
      // 如果用户给的是$20
      // 按照一般思维，我们找钱一般会先找出最大面额的，余下的用小面额去补上，这里就是先给一张$10和$5
      if (five > 0 && ten > 0) {
        five--
        ten--
      } else if (five >= 3) {
        // 如果没有$10的话，要找零，必须只是要有3张$5
        five -= 3
      } else {
        res = false
        break
      }
    }
  }
  return res
};
console.log(lemonadeChange([5, 5, 5, 10, 20]));
console.log(lemonadeChange([5, 5, 10, 10, 20]));
