/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
let intersect = function (nums1, nums2) {
  if (nums1.length > nums2.length) return intersect(nums2, nums1)

  let map = new Map()

  for (let key of nums1) {
    map.set(key, (map.get(key) || 0) + 1)
  }
  // 计数器,记录当前交集元素个数
  let count = 0

  for (let key of nums2) {
    let curCount = map.get(key)
    if (curCount > 0) {
      nums1[count++] = key
      map.set(key, curCount - 1)
    }
  }
  return nums1.slice(0, count)
};


// 排序
let intersect1 = function (nums1, nums2) {
  nums1.sort((a, b) => a - b)
  nums2.sort((a, b) => a - b)

  let i = 0
  let j = 0
  let count = 0
  while (i < nums1.length && j < nums2.length) {
    if (nums1[i] < nums2[j]) {
      ++i
    } else if (nums1[i] > nums2[j]) {
      ++j
    } else {
      nums1[count++] = nums1[i++]
      ++j
    }
  }
  return nums1.slice(0, count)
}

let intersect2 = function (nums1, nums2) {
  let intersection = [];
  nums1.forEach(num => {
    const numIndex = nums2.indexOf(num);
    if (numIndex !== -1) {
      intersection.push(...nums2.splice(numIndex, 1));
    }
  });
  return intersection;
}

console.log(intersect1([4, 9, 5], [9, 4, 9, 8, 4]));
