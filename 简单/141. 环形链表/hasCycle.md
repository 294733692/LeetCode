### 给定一个链表，判断链表中是否有环。

 为了表示给定链表中的环，我们使用整数 `pos` 来表示链表尾连接到链表中的位置（索引从 0 开始）。 如果 `pos` 是 `-1`，则在该链表中没有环。 

 **示例 1：** 

```
输入：head = [3,2,0,-4], pos = 1
输出：true
解释：链表中有一个环，其尾部连接到第二个节点。
```

 ![img](https://assets.leetcode-cn.com/aliyun-lc-upload/uploads/2018/12/07/circularlinkedlist.png) 

 **示例 2：** 

```
输入：head = [1,2], pos = 0
输出：true
解释：链表中有一个环，其尾部连接到第一个节点
```

 ![img](https://assets.leetcode-cn.com/aliyun-lc-upload/uploads/2018/12/07/circularlinkedlist_test2.png) 

 **示例 3：** 

```
输入：head = [1], pos = -1
输出：false
解释：链表中没有环。
```

 ![img](https://assets.leetcode-cn.com/aliyun-lc-upload/uploads/2018/12/07/circularlinkedlist_test3.png) 

LeetCode题目地址：[141. 环形链表](https://leetcode-cn.com/problems/linked-list-cycle/)

没有读懂的可以看下这边博文： https://www.cnblogs.com/xiaodi914/p/5795096.html 

解法1：hash表

思路：通过检查一个节点之前是否被访问过，来判断链表是否为环形链表

- 生成map集合
- 循环当前链表，如果当前链表为空，那么说明已经检测到链表的尾部的下一个节点，那么说明当前链表已经遍历完了，并且当前链表不是环形链表
- 如果当前节点的引用已经存在在哈希表中，那么返回true

```js
let hasCycle = function (head) {
  // 建立map集合
  let map = new Map()
  // 循环当前链表，如果当前循环的节点是空的话，那么表明已经循环完当前整个链表
  while (head !== null) {
    // 如果map里面存在head，那么说明存在闭环
    if (map.has(head)) {
      return true
    } else {
      // 不存在，将head存放到map里面
      map.set(head)
    }
    head = head.next
  }
  return false
};
```

解法2：双指针（快慢指针解法）

思路：如果两个人在跑到上用不同的速度跑步（假设时间不限），那么在某一个时候会相遇的，那么这就形成了一个环形

- 通过`fast`和`slow`两个指向，用不同的速度遍历数组，`fast`每次移动2次，`slow`每次移动一次
  - 如果是环形链表，那么`fast`在某个时候会和`slow`相等

```js
let hasCycle1 = function (head) {
  if (!head || !head.next) return false
  let fast = head.next
  let slow = head
  while (slow != fast) {
    if (!fast || !fast.next) return false
    slow = slow.next
    fast = fast.next.next
  }
  return true
};
```

