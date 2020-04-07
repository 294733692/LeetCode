/**
 * @param {number} n
 * @return {string[]}
 */
let fizzBuzz = function (n) {
  let map = []

  for (let i = 1; i <= n; i++) {
    let fizz = i % 3 === 0
    let buzz = i % 5 === 0
    if (fizz && buzz) {
      map.push('FizzBuZZ')
    } else if (fizz) {
      map.push('Fizz')
    } else if (buzz) {
      map.push('Buzz')
    } else {
      map.push(i)
    }
  }
  return map
};
console.log(fizzBuzz('15'));
