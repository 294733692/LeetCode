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
let isPalindrome1 = function(head, queue = []) {
  if (!head) {
    return true;
  }
  queue.push(head.val);
  let flag = isPalindrome1(head.next, queue);
  return queue.shift() === head.val && flag;
}
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
console.log(isPalindrome1(obj));

