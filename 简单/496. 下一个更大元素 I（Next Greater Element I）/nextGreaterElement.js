/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
let nextGreaterElement = function (nums1, nums2) {
  let stack = []
  let map = new Map()
  for(let num of nums2){
    while(stack.length&&num>stack[0]){
      map.set(stack.shift(),num)
    }
    stack.unshift(num)
  }
  while(stack.length){
    map.set(stack.shift(),-1)
  }
  return nums1.map(num=>map.get(num))
};
console.log(nextGreaterElement([4, 1, 2], [1, 3, 4, 2]));
console.log(nextGreaterElement([1,3,5,2,4], [6,5,4,3,2,1,7]));
