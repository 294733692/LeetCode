/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
// 深度遍历优先
let isSameTree = function (p, q) {
  if (!p && !q) { // 都为空
    return true
  } else if (!p || !q) { // 都不为空
    return false
  } else if (p.val != q.val) { // 不相等
    return false
  }
  // 递归处理比较左右树数的对比
  return isSameTree(p.left, q.left) && isSameTree(p.right, q.right)
};
