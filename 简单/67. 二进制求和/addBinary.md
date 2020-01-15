### 给定两个二进制字符串，返回他们的和（用二进制表示）。输入为非空字符串且只包含数字 1 和 0。

示例1：

```
输入: a = "11", b = "1"
输出: "100"
```

示例2：

```
输入: a = "1010", b = "1011"
输出: "10101"
```

LeetCode题目：[67. 二进制求和](https://leetcode-cn.com/problems/add-binary/)

解法1：

将较短的字符串用0补齐，使得两个字符串长度一致，然后从末尾进行遍历，得到最终结果

- 按照位置给字符串赋值，最后如果有进位，则在前方进行字符串拼接添加进位

```js
/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
let addBinary = function (a, b) {
  // 存储结果
  let result = ''
  // 判断是否需要进位
  let curCarry = 0
  for (let i = a.length - 1, j = b.length - 1; i >= 0 || j >= 0; i--, j--) {
    let sum = curCarry
    sum += i >= 0 ? parseInt(a[i]) : 0  // 获取字符串a对应列的值，当i<0的时候（a的位数比b的位数小，需要对齐向前补0，确保a，b位数相等），向前补sum+=0(向前补0)，否则返回原值
    sum += j >= 0 ? parseInt(b[j]) : 0  // 同上
    result += sum % 2  // 如果a[i] + b[j]项都为1，那么对2取余为0，否则为1
    curCarry = Math.floor(sum / 2) // 如果a[i] + b[j]都为1，那么对2取整为1，否则为0
  }
  result += curCarry === 1 ? curCarry : ""  // 判断最后一位是否有进位，有这在前面加上1.否则原样输出
  return result.split('').reverse().join('')
};
```

解法2：

- 对a[i]和b[j]取整相加,`~~a[i]+~~b[j]`
- 对上一步结果求余，并加上上一次的求余结果
- 判断第一步结果是否大于1

```js
var addBinary1 = function(a, b) {
  let temp = '';
  let res = '';

  for (let i = a.length - 1, j = b.length - 1; i >= 0 || j >= 0||temp; i--, j--) {
    // ~~对于正数，它向下取整；对于负数，向上取整；非数字取值为0
    temp += ~~a[i] + ~~b[j];
    res = String(temp % 2) + res;
    temp = temp > 1;
  }
  return  res;
};
```

