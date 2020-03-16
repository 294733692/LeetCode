### 给定一个整数，写一个函数来判断它是否是 3 的幂次方。

**示例 1:**

```
输入: 27
输出: true
```

**示例 2:**

```
输入: 0
输出: false
```

**示例 3:**

```
输入: 9
输出: true
```

**示例 4:**

```
输入: 45
输出: false
```

**进阶：**
你能不使用循环或者递归来完成本题吗？

解法1： 循环

抛开进阶的要求，可能循环是最开始就可以想到的解法。

```js
let isPowerOfThree = function (n) {
  // 循环
  while (n >= 3) {
    n /= 3
  }
  return n === 1
}
```

解法2：暴力法

对于有给定数字大小限制的，那么可以是枚举出来的啦，3的幕一共20个。

```js
let isPowerOfThree = function (n) {
    switch (n) {
    case 1:
    case 3:
    case 9:
    case 27:
    case 81:
    case 243:
    case 729:
    case 2187:
    case 6561:
    case 19683:
    case 59049:
    case 177147:
    case 531441:
    case 1594323:
    case 4782969:
    case 14348907:
    case 43046721:
    case 129140163:
    case 387420489:
    case 1162261467:return true;
    default: return false;
  }
}
```

解法3：基准转换

举例：

- 10的n次幂的10进制: `10、100、1000.....`，我们也看到，如果以`10`进制为准，`10`的幕只有`1`和`0`组成
- 2的n次幂的二进制：`10、100、1000.....`
- 3的n次幂的三进制：同理

```js
let isPowerOfThree = function (n) {
    return n.toString(3).match(/^10*$/) !== null
}
```

这里需要注意的是，我们需要将n转化为3进制的数，然后在去匹配规则：必须是1开头，任意个0结尾



解法4：数学公式

我们知道 3的n次幂的表达公式是`n = 3^i`，然后逆转公式得到`Math.log10(n) / Math.log10(3) = i`

```js
let isPowerOfThree = function (n) {
    return n > 0 && 1162261467 % n == 0;
}
```

解法5：整数限制

通过枚举法，我们可以看到，3次幂的最大为`1162261467`，所有我们只需要判断`1162261467 % 3`是否为0即可
