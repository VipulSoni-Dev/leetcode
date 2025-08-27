/**
 * @param {number[]} nums
 * @return {number}
 */
var zeroFilledSubarray = function (nums) {

    let zeroCounter = 0
    let totalSubArrays = 0
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] == 0) zeroCounter++
       
        if (nums[i] !== 0 || i == nums.length - 1) {
            totalSubArrays += (zeroCounter * (zeroCounter + 1)) / 2
            zeroCounter = 0
        }
    }

    return totalSubArrays
};

console.log(zeroFilledSubarray([2,10,2019]))