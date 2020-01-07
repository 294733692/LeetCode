### 给定一个字符串，你需要反转字符串中每个单词的字符顺序，同时仍保留空格和单词的初始顺序

示例：

```
输入: "Let's take LeetCode contest"
输出: "s'teL ekat edoCteeL tsetnoc" 
```

注意：在字符串中，每个单词由单个空格分隔，并且字符串中不会有任何额外的空格。

思路1：

1. 字符串按空格进行分隔
2. 对数组进行遍历，然后对每个元素进行反转
3. map返回的是数组，需要空格处理成字符串

```js
function reverseWord (str) {
    return str.split(' ').map(item => {
        return item.split('').reverse().join('')
    }).join(' ')
}
```

思路2： 和思路1字符串的拆分方法有点不同，方法2使用是正则进行匹配，将字符串拆分成数组的形式，剩下处理方式和方法1相同

```js
function reverseWord (str) {
    return str.match(/[\w']+/g).map(item => {
    return item.split('').reverse().join('')
  }).join(' ')
}
```

