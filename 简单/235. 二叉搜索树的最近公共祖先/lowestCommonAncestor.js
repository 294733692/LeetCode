/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
let lowestCommonAncestor = function (root, p, q) {
  // 当前节点的父节点val值
  let parentVal = root.val
  // p节点的val值
  let pVal = p.val
  // q节点的val值
  let qVal = q.val

  if (qVal > parentVal && pVal > parentVal) {
    // 如果q节点的val值和p节点的val值都大于当前节点的父节点val值
    return lowestCommonAncestor(root.right, p, q)
  } else if (pVal < parentVal && qVal < parentVal) {
    // 如果q节点val值和p节点val值，都小于当前节点父节点val值
    return lowestCommonAncestor(root.left, p, q)
  } else {
    //  如果上面两个条件都不满足，那么就说明，我们找到了分离节点，即找到了最近的公共祖先（LCP）
    return root
  }
};

let lowestCommonAncestor1 = function (root, p, q) {
  let node = root

  while (node) {
    let parentVal = node.val

    if (p.val > parentVal && q.val > parentVal) {
      node = node.right
    } else if (p.val < parentVal && q.val < parentVal) {
      node = node.left
    } else {
      return node
    }
  }
  return null
}
