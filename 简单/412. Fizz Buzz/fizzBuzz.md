### 写一个程序，输出从 1 到 n 数字的字符串表示。

1. 如果 n 是3的倍数，输出“Fizz”；

2. 如果 n 是5的倍数，输出“Buzz”；

3. 如果 n 同时是3和5的倍数，输出 “FizzBuzz”。

示例：

```
n = 15,

返回:
[
    "1",
    "2",
    "Fizz",
    "4",
    "Buzz",
    "Fizz",
    "7",
    "8",
    "Fizz",
    "Buzz",
    "11",
    "Fizz",
    "13",
    "14",
    "FizzBuzz"
]
```
LeetCode题目地址：[412. Fizz Buzz](https://leetcode-cn.com/problems/fizz-buzz/)

又到了拼网上的时候了 哈哈，
```js
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
```
这题没有什么难度，难就难在单词可能拼错 。。。。
