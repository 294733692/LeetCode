/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
  if(!headA || !headB) return null
  let PA = headA
  let PB = headB
  while(PA !== PB) {
    PA = !PA ? headB : PA.next
    PB = !PB ? headA : PB.next
  }
  return PA
};
