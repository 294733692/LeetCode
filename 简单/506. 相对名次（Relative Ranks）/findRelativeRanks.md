给出 N 名运动员的成绩，找出他们的相对名次并授予前三名对应的奖牌。前三名运动员将会被分别授予 “金牌”，“银牌” 和“ 铜牌”（"Gold Medal", "Silver Medal", "Bronze Medal"）。

(注：分数越高的选手，排名越靠前。)

**示例 1:**

```
输入: [5, 4, 3, 2, 1]
输出: ["Gold Medal", "Silver Medal", "Bronze Medal", "4", "5"]
解释: 前三名运动员的成绩为前三高的，因此将会分别被授予 “金牌”，“银牌”和“铜牌” ("Gold Medal", "Silver Medal" and "Bronze Medal").
余下的两名运动员，我们只需要通过他们的成绩计算将其相对名次即可。
```

**提示:**

1. N 是一个正整数并且不会超过 10000。
2. 所有运动员的成绩都不相同。



解法：Map映射

拷贝一个数组，维护运动员的成绩和位子。然后对原数组从大到小排序，将排序后的数字和排序存放到map中，然后遍历拷贝的数组，找到当前元素在map中值。

```js
/**
 * @param {number[]} nums
 * @return {string[]}
 */
let findRelativeRanks = function (nums) {
  // 拷贝数组，建立映射关系
  let copyArr = JSON.parse(JSON.stringify(nums))
  nums.sort((a, b) => b - a)
  let map = new Map()
  let res = []

  for (let i = 0; i < nums.length; i++) map.set(nums[i], i + 1)
  for (let i = 0; i < copyArr.length; i++) {
    let temp = map.get(copyArr[i])
    if (temp === 1) {
      res.push('Gold Medal')
    } else if (temp === 2) {
      res.push('Silver Medal')
    } else if (temp === 3) {
      res.push('Bronze Medal')
    } else {
      res.push('' + temp)
    }
  }
  return res
};
findRelativeRanks([10, 3, 8, 9, 4])
```

