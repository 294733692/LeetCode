有一个密钥字符串 S ，只包含字母，数字以及 '-'（破折号）。其中， N 个 '-' 将字符串分成了 N+1 组。

给你一个数字 K，请你重新格式化字符串，除了第一个分组以外，每个分组要包含 K 个字符；而第一个分组中，至少要包含 1 个字符。两个分组之间需要用 '-'（破折号）隔开，并且将所有的小写字母转换为大写字母

给定非空字符串 S 和数字 K，按照上面描述的规则进行格式化。

示例 1：
```
输入：S = "5F3Z-2e-9-w", K = 4
输出："5F3Z-2E9W"
解释：字符串 S 被分成了两个部分，每部分 4 个字符；
     注意，两个额外的破折号需要删掉。
```

示例 2：
```
输入：S = "2-5g-3-J", K = 2
输出："2-5G-3J"
解释：字符串 S 被分成了 3 个部分，按照前面的规则描述，第一部分的字符可以少于给定的数量，其余部分皆为 2 个字符。
```

提示:
- S 的长度可能很长，请按需分配大小。K 为正整数。
- S 只包含字母数字（a-z，A-Z，0-9）以及破折号'-'
- S 非空

leetCode题目地址：[482. 密钥格式化](https://leetcode-cn.com/problems/license-key-formatting/)


解法：逆序插入

思路：先将`S`去掉`-`，然后将单个字符串进行拼接，这里我们需要注意到是每`K`就要加一个`-`，所以这里我们需要借助`k`来进行实现，但是需要注意的是：在特殊情况下，会出现最后一个为`-`的情况，

```js
/**
 * @param {string} S
 * @param {number} K
 * @return {string}
 */
let licenseKeyFormatting = function (S, K) {
  S = S.replace(/-/g, '')
  let str = ''
  let i = S.length - K

  while (i + K > 0) {
    str = (i > 0 ? '-' : '') + S.substring(i, i + K) + str
    i -= K
  }
  return str.toUpperCase()
};
// console.log(licenseKeyFormatting("5F3Z-2e-9-w", 4));
console.log(licenseKeyFormatting("2-5g-3-J", 2));
```

最开始使用的是`S.slice(i, i + K)`方法，但是不满足`licenseKeyFormatting("2-5g-3-J", 2)`情况，后面查询了一下，`slice`方法可以支持负数，这样就会直接把`2`给去掉。提交不成功，后面换成了`substring`，这个方法有几个特性：

- 当参数为负数的时候，会自动将负数转化为0，例如：`substring(-1, 3)`相当于`substring(0, 3)`
- 起点会以最小的参数为起点：例如：`substring(7, 4)`实际上就是和`substring(4, 7)`是一样的。
