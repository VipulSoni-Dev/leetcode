// 2561-Rearranging-Fruits.js

/**
 * @param {number[]} basket1
 * @param {number[]} basket2
 * @return {number}
 */
var minCost = function (basket1, basket2) {

    let xor = 0
    let n = basket1.length
    for (let i = 0; i < n; i++) {
        xor ^= basket1[i] ^ basket2[i]
    }

    if(xor != 0){
        return -1
    }

    // let n = basket1.length
    // let diffMap = new Map()
    // let sum1 = basket1.reduce((a, b) => a + b, 0)
    // let sum2 = basket2.reduce((a, b) => a + b, 0)
    // let sum = sum1+sum2
    // if (sum % 2 != 0) {
    //     return -1
    // }

    // for (let i = 0; i < n; i++) {
    //     for (let j = 0; j < n; j++) {
    //         let dif = Math.abs(basket2[i] - basket1[j])
    //         let minBasketValue = Math.min(basket2[i], basket1[j])
    //         if (diffMap.has(dif)) {
    //             minBasketValue = Math.min(diffMap.get(dif), Math.min(basket2[i], basket1[j]))
    //         }
    //         diffMap.set(dif, minBasketValue)
    //     }
    // }

    // let halfSum = sum / 2
    // let requiredDiff = Math.abs(halfSum-sum2)
    // if(diffMap.has(requiredDiff)){
    //     return diffMap.get(requiredDiff)
    // }
    // console.log(diffMap);
};

minCost([4,4,4,4,3], [5,5,5,5,3])
