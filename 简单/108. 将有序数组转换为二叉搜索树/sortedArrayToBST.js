/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
let sortedArrayToBST = function (nums) {
  // 处理特殊情况
  if (!nums) return null

  let _helper = (root, start, end) => {
    if (start < end) {
      // 找出中位数，类似于parseInt((start + end) / 2)
      let mid = (start + end) >>> 1
      // 生成以档中位数为起始节点的树
      let node = new TreeNode(nums[mid])
      // 迭代处理左子节点、右子节点情况
      node.left = _helper(root, start, mid)
      node.right = _helper(root, mid + 1, end)
      return node
    } else {
      return null
    }
  }
  return _helper(nums, 0, nums.length)
};

function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

console.log(sortedArrayToBST([-10, -3, 0, 5, 9]));
