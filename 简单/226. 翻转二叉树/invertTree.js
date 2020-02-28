/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var invertTree = function(root) {
  // 递归出口
  if (!root) return null

  let right = invertTree(root.right)
  let left = invertTree(root.left)

  root.left = right
  root.right = left

  return root
};
