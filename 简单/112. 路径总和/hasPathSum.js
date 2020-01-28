/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {boolean}
 */
let hasPathSum = function (root, sum) {
  // 处理特殊情况
  if (!root) return false
  // 每次递归减去tree的val，最后判断子节点为空，判断最后的sum是否为0
  sum -= root.val
  if (!root.left && !root.right) return sum === 0
  // 递归判断左右子节点的节点值值和是否等于sum
  return hasPathSum(root.left, sum) || hasPathSum(root.right, sum)
};
