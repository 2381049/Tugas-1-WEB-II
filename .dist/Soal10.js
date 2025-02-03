"use strict";
function twoSum(nums, target) {
    let temp = new Map();
    for (let i = 0; i < nums.length; i++) {
        if (temp.has(Math.abs(nums[i] - target))) {
            let val = temp.get(Math.abs(nums[i] - target));
            return [val, i];
        }
        else {
            temp.set(nums[i], i);
        }
    }
    return [];
}
console.log(twoSum([3, 2, 4], 6));
//# sourceMappingURL=Soal10.js.map