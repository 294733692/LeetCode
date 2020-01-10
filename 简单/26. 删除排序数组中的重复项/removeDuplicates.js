/**
 * @param {number[]} nums
 * @return {number}
 */
let removeDuplicates = function(nums) {
    // 处理数字为空的情况
    if (nums.length === 0) return 0
    // i位慢指针，j位快指针，同时i也作为去重数组的长度标识
    let i = 0
    for (let j = 1; j < nums.length; j++) {
        // 如果nums的前一项和后一项相等，结束当前循环
        // 如果不相等，i自增，并把第j项赋值给第i项
        if (nums[i] != nums[j]) {
            i++
            nums[i] = nums[j]
        }
    }
    return i + 1
};
console.log(removeDuplicates([1, 1, 2]));
