/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
let medianSlidingWindow = function (nums, k) {
  let res = []
  let i = 0, len = nums.length
  while (i <= len - k) {
    const arr = []
    for (let j = i; j < k + i; j++) {
      arr.push(nums[j])
    }
    res.push(getMiddle(arr, k))
    i++
  }
  console.log(res)
  return res
}

function getMiddle(nums, k) {
  nums.sort((a, b) => a - b)
  const mid = parseInt(k / 2)
  return (nums[mid] + nums[mid - (1 - k % 2)]) / 2
}


let medianSlidingWindow1 = function (nums, k) {
  let medianWindow = new MedianWindow()
  let list = []

  for (let i = 0; i < nums.length; i++) {
    medianWindow.insert(nums[i])
    if (i >= k) medianWindow.pop(nums[i - k]) // 窗口左移动
    if (i >= k - 1) {
      let val = medianWindow.getMiddle(k & 1)
      list.push(val)
    }
  }
  console.log(list)
  return list
}

class MedianWindow {
  constructor() {
    this.queue = []
  }

  insert(insertValue) {
    let left = 0
    let right = this.queue.length - 1
    while (left <= right) {
      let mid = left + ((right - left) / 2 | 0)
      if (this.queue[mid] > insertValue) {
        left = mid + 1
      } else {
        right = mid - 1
      }
    }
    this.queue.splice(left, 0, insertValue)
  }

  pop(popValue) {
    let index = this.queue.indexOf(popValue)
    this.queue.splice(index, 1)
  }

  getMiddle(oddValue) {
    let mid = this.queue.length / 2 | 0
    return oddValue ? this.queue[mid] : (this.queue[mid - 1] + this.queue[mid]) / 2
  }
}


medianSlidingWindow([1, 3, -1, -3, 5, 3, 6, 7], 3)
medianSlidingWindow1([1, 3, -1, -3, 5, 3, 6, 7], 3)
