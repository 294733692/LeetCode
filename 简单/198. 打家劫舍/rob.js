/**
 * @param {number[]} nums
 * @return {number}
 */
let rob = function (nums) {
  let ans1 = 0
  let ans2 = 0
  nums.forEach((item, index) => {
    if (index % 2 === 0) {
      ans1 += item
      ans1 = Math.max(ans1, ans2)
    } else {
      ans2 += item
      ans2 = Math.max(ans1, ans2)
    }
  })
  return Math.max(ans1, ans2)
};

let rob1 = function (nums) {
  let prevMax = 0
  let currMax = 0
  for (let num of nums) {
    let temp = currMax
    currMax = Math.max(prevMax + num, currMax)
    prevMax = temp
  }
  return currMax
};
var rob2 = function (nums) {
  const len = nums.length;
  if (len == 0)
    return 0;
  const dp = new Array(len + 1);
  dp[0] = 0;
  dp[1] = nums[0];
  for (let i = 2; i <= len; i++) {
    dp[i] = Math.max(dp[i - 1], dp[i - 2] + nums[i - 1]);
  }
  return dp[len];
};
console.log(rob1([1, 2, 3, 1]));
console.log(rob([2, 7, 9, 3, 1]));
console.log(rob([1, 2]));

