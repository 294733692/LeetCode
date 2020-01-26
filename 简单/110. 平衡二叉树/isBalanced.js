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
let isBalanced = function (root) {
  let _depth = (root) => {
    // 当前层数不存在，那么层数为0
    if (root === null) return 0
    // 获取左节点的层数
    let left = _depth(root.left)
    // 判断左节点的层数，如果层数为-1，直接截断
    if (left === -1) return -1
    let right = _depth(root.right)
    if (right === -1) return -1
    // 如果左右节点的层数相差小于2，那么直接返回真实层数，每次递归层层数+1，否则返回-1
    return Math.abs(left - right) < 2 ? Math.max(left, right) + 1 : -1
  }
  // 判断存在的层数相差是否大1
  return _depth(root) !== -1
};
