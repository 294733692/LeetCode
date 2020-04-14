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
 * @return {number}
 */

let pathSum = function (root, sum) {
  // 存放满足条件的路径条数
  let count = 0
  let data = []
  let _helper = function (root, sum, data) {
    if (!root) return
    data.push(root.val)
    let curr = 0
    for (let i = data.length - 1; i >= 0; i--) {
      curr += data[i]
      if (curr === sum) count++
    }
    _helper(root.left, sum, data)
    _helper(root.right, sum, data)
    data.pop()
  }
  _helper(root, sum, data, count)

  return count
};
let tree = {
  val: 10,
  left: {
    val: 5,
    left: {
      val: 3,
      left: {
        val: 3,
        left: null,
        right: null
      },
      right: {
        val: -2,
        left: null,
        right: null
      }
    },
    right: {
      val: 2,
      left: null,
      right: {
        val: 1,
        left: null,
        right: null
      }
    }
  },
  right: {
    val: -3,
    left: null,
    right: {
      val: 11,
      left: null,
      right: null
    }
  }
}

console.log(pathSum(tree, 8));
