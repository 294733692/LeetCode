/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
// 递归处理
var maxDepth = function (root) {
  // 处理特殊情况
  if (!root) return 0
  // 递归求出树的左节点的最大值
  let leftDeepHeight = maxDepth(root.left)
  // 递归求出树的右节点的最大值
  let rightDeepHeight = maxDepth(root.right)
  // 比较出左右节点的最大值
  return Math.max(leftDeepHeight, rightDeepHeight) + 1
}
