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
// hash表
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

// 双指针
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
