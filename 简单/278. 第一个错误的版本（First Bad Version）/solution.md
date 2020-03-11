### [278. 第一个错误的版本](https://leetcode-cn.com/problems/first-bad-version/)

你是产品经理，目前正在带领一个团队开发新的产品。不幸的是，你的产品的最新版本没有通过质量检测。由于每个版本都是基于之前的版本开发的，所以错误的版本之后的所有版本都是错的。

假设你有 `n` 个版本 `[1, 2, ..., n]`，你想找出导致之后所有版本出错的第一个错误的版本。

你可以通过调用 bool isBadVersion(version) 接口来判断版本号 version 是否在单元测试中出错。实现一个函数来查找第一个错误的版本。你应该尽量减少对调用 API 的次数。

**示例:**

```
给定 n = 5，并且 version = 4 是第一个错误的版本。

调用 isBadVersion(3) -> false
调用 isBadVersion(5) -> true
调用 isBadVersion(4) -> true

所以，4 是第一个错误的版本
```

LeetCode题目地址：[278. 第一个错误的版本](https://leetcode-cn.com/problems/first-bad-version/)

刚开始看到这题目有点蒙，还以为为false的时候就是错误版本，看了评论才理解到，当`isBadVersion(4) -> true`第一个为true的时候，就是错误版本。

注意：这里提供了一个类似的`API`，`isBadVersion`这个函数是该题目提供给我们来判断是否是错误版本的API，可以直接使用。

解法1：遍历法（线性扫描）(超时)

```js
var solution1 = function (isBadVersion) {
  /**
   * @param {integer} n Total versions
   * @return {integer} The first bad version
   */
  return function (n) {
    for (let i = 0; i < n; i++) {
      if(isBadVersion(i)) return i
    }
    return n
  }
};
```

解法2：二分法查找

每次查找，可以减少一半的空间、时间的复杂度

```js
var solution = function (isBadVersion) {
  /**
   * @param {integer} n Total versions
   * @return {integer} The first bad version
   */
  return function (n) {
    let left = 1
    let right = n

    while (left < right) {
      let mid = (left + right)>>>1
      if (isBadVersion(mid)) {
        right = mid
      } else {
        left += 1
      }
    }
    return left
  };
};
```

