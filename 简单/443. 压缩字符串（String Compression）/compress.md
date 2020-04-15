### 给定一组字符，使用[原地算法](https://baike.baidu.com/item/原地算法)将其压缩。

压缩后的长度必须始终小于或等于原数组长度。

数组的每个元素应该是长度为1 的**字符**（不是 int 整数类型）。

在完成[原地](https://baike.baidu.com/item/原地算法)**修改输入数组**后，返回数组的新长度。

**进阶：**
你能否仅使用O(1) 空间解决问题？

**示例 1：**

```
输入：
["a","a","b","b","c","c","c"]

输出：
返回6，输入数组的前6个字符应该是：["a","2","b","2","c","3"]

说明：
"aa"被"a2"替代。"bb"被"b2"替代。"ccc"被"c3"替代。
```

**示例 2：**

```
输入：
["a"]

输出：
返回1，输入数组的前1个字符应该是：["a"]

说明：
没有任何字符串被替代。
```

这里需要特别说明的是，如果`a`出现了`11`次，有也需要将`11`拆分为`1`和`1`.这里例子没有体现出来，还有一个需要注意的就是，题目上的返回数组长度，这个地方完全可以忽略。。。。

LeetCode题目地址：[443. 压缩字符串](https://leetcode-cn.com/problems/string-compression/)

解法1：双指针

思路：使用双指针，对比两个字符串是否相等，`count`统计同一字符串出现的次数。需要注意的是当我们使用`splice`函数修改了原数组，这里的`fast`指针也需要重新计算

```js
// 双指针
let compress1 = function (chars) {
  let fast = 0
  let slow = 0
  // 计算同一个字符出现的次数
  let count = 0
  while (fast <= chars.length) {
    // 如果两个指针指向的字符串相同，
    // 计数器加1，快指针加1
    if (chars[slow] === chars[fast]) {
      count++
      fast++
    } else {
      // 如果不相等，那么判断相同字符串出现的次数
      // 如果count大于1
      // 使用splice对原数组进行替换
      if (count > 1) {
        // 这里讲同一字符出现的字符串的次数给拆分
        let temp = String(count).split('')
        // 这里使用splice修改原数组，并替换
        chars.splice(slow, count, chars[slow], ...temp)
        // 由于原数组长度已经发生了变化，fast的位置也需要重新定位
        fast = fast - count + 1 + temp.length
      }
      slow = fast
      count = 0
    }
  }
  console.log(chars);
}
```

看些别的解法：

```js
/**
 * @think 双指针法
 *        1. 指针i表示已经压缩结果的末尾，指针j表示未压缩的头部
 *        2. 当遇到相同的字符串，指针j往后滑动，直到遇到不同的字符
 *             2.1 指针j滑动的距离即为当前字符的长度
 *             2.2 因为这组字符每一项只展示一个字符，故需要将长度转为字符然后挨个赋值
 *        3. 直到未压缩指针j的值指到末尾时，结束遍历
 *             3.1 已经压缩的指针i每次递增到最后即为数组的新长度
 * @param {character[]} chars
 * @return {number}
 */
var compress = function (chars) {
  var len = chars.length
  for (var i = 0, j = 0; j < len;) {
    chars[i] = chars[j]
    var temp = j
    while (j < len && chars[i] === chars[j]) {
      j++
    }
    i++
    var dis = j - temp
    if (dis > 1) {
      var distance = Array.from('' + dis)
      for (var k = 0; k < distance.length; k++) {
        chars[i++] = distance[k]
      }
    }

  }
  return i
}
```

解法2：map（未通过）

最初采用map的解法，利用map统计字符串出现的次数，然后返回，但是题目让采用原地算法，所以该方法未通过，记录一下。

```js
/**
 * @param {character[]} chars
 * @return {number}
 */
let compress = function (chars) {
  let map = new Map()
  let arr = []
  for (let key of chars) {
    if (map.has(key)) {
      map.set(key, map.get(key) + 1)
    } else {
      map.set(key, 1)
    }
  }
  for (let key of map) {
    arr.push(...key)
  }
  return arr.map(String)
};
```