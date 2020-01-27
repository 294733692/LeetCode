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
let minDepth = function(root) {
  if (!root) return 0
  let minLeft = minDepth(root.left)
  let minRight = minDepth(root.right)

  return (!root.left || !root.right) ? minLeft + minRight + 1 : Math.min(minLeft, minRight) + 1
};
