/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
let findMode = function (root) {
  let maxCount = 0 // 记录数字出现的最大次数
  let currCount = 0 // 记录当前相同数字出现的次数
  let prev = null // 记录上一个根节点
  let set = new Set()

  let _helper = (node) => {
    if (!node) return
    // 遍历左子树
    _helper(node.left)
    // 上一个更节点存在并且val等于当前节点的val ? currCount + 1 : 不相等，currCount重新计数
    prev && prev.val === node.val ? currCount++ : currCount = 1
    // 如果当前记录的数字和当前记录最大的数字出现次数相同的的话，存放到set里面去
    if (currCount === maxCount) {
      set.add(node.val)
    } else if (currCount > maxCount) { // 如果当前记录的数字出现的次数大于当前记录的最大出现次数的话
      // 将maxCount更新为当前最大次数
      maxCount = currCount
      // 清空set集合
      set.clear()
      // 并向set添加出现的值
      set.add(node.val)
    }
    prev = node
    // 遍历右子树
    _helper(node.right)
  }

  _helper(root)
  return [...set]
};
