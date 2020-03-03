### 234. 回文链表

请判断一个链表是否为回文链表。

**示例 1:**

```
输入: 1->2
输出: false
```

**示例 2:**

```
输入: 1->2->2->1
输出: true
```

LeetCode题目地址：[234. 回文链表](https://leetcode-cn.com/problems/palindrome-linked-list/)

解法1:数组解法

思路：将链表转化为数组形式，然后对数组进行回文判断

```js
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
let isPalindrome = function (head) {
  let arr = []
  while (head) {
    arr.push(head.val)
    head = head.next
  }
  for (let i = 0; i < arr.length / 2; i++) {
    if (arr[i] !== arr[arr.length - 1 - i]) {
      return false
    }
  }
  return true
};
let obj = {
  val: 1,
  next: {
    val: 2,
    next: {
      val: 2,
      next: {
        val: 1,
        next: null
      }
    }
  }
}
let obj1 = {
  val: 1,
  next: {
    val: 2,
    next: null
  }
}
console.log(isPalindrome(obj1));
```

思路：

- 将链表转化为数组

```js
while (head) {
    arr.push(head.val)
    head = head.next
  }
```

- 遍历一半的数组（因为是回文，所以遍历一遍的数组长度就可以了）,数组第`0`位对应`arr.length - 1 - i`为（也就是数组最后一位），

```js
for (let i = 0; i < arr.length / 2; i++) {
    if (arr[i] !== arr[arr.length - 1 - i]) {
      return false
    }
  }
```

解法2：递归解法

```js
let isPalindrome1 = function(head, queue = []) {
  if (!head) {
    return true;
  }
  queue.push(head.val);
  let flag = isPalindrome1(head.next, queue);
  return queue.shift() === head.val && flag;
}
```

