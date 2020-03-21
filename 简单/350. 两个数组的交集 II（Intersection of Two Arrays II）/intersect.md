### 给定两个数组，编写一个函数来计算它们的交集。

**示例 1:**

```
输入: nums1 = [1,2,2,1], nums2 = [2,2]
输出: [2,2]
```

**示例 2:**

```
输入: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
输出: [4,9]
```

**说明：**

- 输出结果中每个元素出现的次数，应与元素在两个数组中出现的次数一致。
- 我们可以不考虑输出结果的顺序。

**进阶:**

- 如果给定的数组已经排好序呢？你将如何优化你的算法？
- 如果 *nums1* 的大小比 *nums2* 小很多，哪种方法更优？
- 如果 *nums2* 的元素存储在磁盘上，磁盘内存是有限的，并且你不能一次加载所有的元素到内存中，你该怎么办？

LeetCode题目地址：[350. 两个数组的交集 II](https://leetcode-cn.com/problems/intersection-of-two-arrays-ii/)



解法1：hash表

利用map来追踪每个数字出现的次数，先统计一个数组里面的数字和出现的次数，然后再遍历第二个数组的时候，检查数组中的数字是否存在，如果存在，且统计次数为正，那么将该数字添加到已经统计过的数组中去，相应的计数器-1.

```js
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
      // 这里num1的数组原数字已经没用了，这里节省空间，直接赋值到nums1中  
      nums1[count++] = key
      map.set(key, curCount - 1)
    }
  }
  return nums1.slice(0, count)
};
```



解法2：排序

```js
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
```

解法3：

```js
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
```

