/**
 * @param {number[]} nums
 * @return {number}
 */
let jump = function (nums) {
  let len = nums.length - 1
  let step = 0
  while (len > 0) {
    for (let i = 0; i < len; i++) {
      if (i + nums[i] >= len) {
        len = i
        step++
        break
      }
    }
  }
  console.log(step);
  return step
};

let jump1 = function (nums) {
  const len = nums.length;
  let end = 0, maxPosition = 0, steps = 0;

  for(let i = 0; i < len - 1; ++i) {
    maxPosition = Math.max(maxPosition, i + nums[i]);
    if(i === end) {
      end = maxPosition;
      steps++;
    }
  }
  console.log(steps);
  return steps;
};

jump1([2, 3, 1, 1, 4])
