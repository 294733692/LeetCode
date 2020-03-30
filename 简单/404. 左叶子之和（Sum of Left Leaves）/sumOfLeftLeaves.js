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
let sumOfLeftLeaves = function (root) {
  if (!root) return 0
  let {left, right} = root
  if (left && !left.left && !left.right) {
    return left.val + sumOfLeftLeaves(right)
  }

  return sumOfLeftLeaves(left) + sumOfLeftLeaves(right)
};

let sumOfLeftLeaves1 = function (root) {
  let _helper = (root, sum, flag) => {
    if (!root) return sum
    if (root.left) sum = _helper(root.left, sum, true)
    if (root.right) sum = _helper(root.right, sum, false)
    if (!root.left && !root.right && flag) sum += root.val
    return sum
  }

  return _helper(root, 0, false)
}

let obj = {
  val: 3,
  left: {
    val: 9,
    left: null,
    right: null
  },
  right: {
    val: 20,
    left: {
      val: 15,
      left: null,
      right: null
    },
    right: {
      val: 7,
      left: null,
      right: null
    }
  }
}
console.log(sumOfLeftLeaves1(obj))
