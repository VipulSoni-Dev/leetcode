/**
 * @param {number[]} nums
 * @return {number}
 */
var longestSubarray = function (nums) {

    let prevCounter = 0
    let currentCounter = 0
    let maxLen = 0
    let zeroPresent = false
    for (let i = 0; i < nums.length; i++) {

        if (nums[i] === 0) {
            zeroPresent = true
            maxLen = Math.max(maxLen, prevCounter + currentCounter)
            prevCounter = currentCounter
            currentCounter = 0
            continue
        }
        currentCounter++
    }
    maxLen = Math.max(maxLen, prevCounter + currentCounter)

    return zeroPresent ? maxLen : maxLen - 1

    // let strNums = ""
    // nums.forEach((x)=>{
    //     console.log(x);
    //     strNums += x
    // })
    // console.log(strNums);
    // const allOnes = strNums.split("0").map(a=>a.length)
    // let maxLen = 0;
    // if (allOnes.length <= 1) return allOnes[0]
    // for (let i = 1; i < allOnes.length; i++) {
    //     if (maxLen < allOnes[i] + allOnes[i - 1]) {
    //         maxLen = allOnes[i] + allOnes[i - 1]
    //     }
    // }

    // return maxLen
};

console.log(longestSubarray([1, 1, 0, 1]))