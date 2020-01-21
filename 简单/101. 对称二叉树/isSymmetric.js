/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
let isSymmetric = function (root) {
  // 辅助函数，对比数左右两边值是否相等
  let _isMirror = (leftTree, rightTree) => {
    // 特殊情况，如果树的左右都为空，说明相等
    if (!leftTree && !rightTree) return true
    // 如果树的左右有一边为空，说明不相等
    if (!leftTree || !rightTree) return false
    // 先对比树的左右是否相等，如果相等，递归传入树的左边的值和右边的值做对比
    // 重复上述过程
    return (leftTree.val === rightTree.val)
      && _isMirror(leftTree.left, rightTree.right)
      && _isMirror(leftTree.right, rightTree.left)
  }

  return _isMirror(root, root)
};

