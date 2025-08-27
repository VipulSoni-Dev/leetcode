// 2106. Maximum Fruits Harvested After at Most K Steps
/**
 * @param {number[][]} fruits
 * @param {number} startPos
 * @param {number} k
 * @return {number}
 */

const dp = (sum, i, counter, k, fruitMap) => {

    if (i == 0) {
        if (fruitMap.has(i)) {
            sum += fruitMap.get(i)
            fruitMap.set(i, 0)
        }
        return sum
    }

    if (counter == k) {
        if (fruitMap.has(i)) {
            sum += fruitMap.get(i)
            fruitMap.set(i, 0)
        }
        return sum
        return sum
    }



    if (fruitMap.has(i)) {
        sum += fruitMap.get(i)
        fruitMap.set(i, 0)
    }

    return Math.max(dp(sum, i - 1, counter + 1, k, new Map(fruitMap)), dp(sum, i + 1, counter + 1, k, new Map(fruitMap)))
}

var maxTotalFruits = function (fruits, startPos, k) {

    let fruitMap = new Map()

    for (const [pos, amount] of fruits) {
        fruitMap.set(pos, amount)
    }

    // let sum = 0;
    // let lstSum = []
    // for (let i = startPos - k; i < startPos + k; i++) {
    //     let currPosFruit = 0
    //     for (let j = i; j < i+k; j++) {
    //         currPosFruit += fruitMap.get(j) || 0
    //     }
    //     lstSum.push(currPosFruit)
    //     // sum -= currPosFruit
    // }

    // console.log(startPos - k)
    // console.log(startPos + k)

    // console.log(lstSum)
    // return Math.max(...lstSum)



    // let fruitMap = new Map()
    // for (const [pos, amount] of fruits) {
    //     fruitMap.set(pos, amount)
    // }
    // let sum = 0;
    let max = 0

    if (fruits.length == 1) {
        if (fruitMap.has(startPos))
            return fruitMap.get(startPos)

        if (fruitMap.has(startPos + k))
            return fruitMap.get(startPos + k)

        if (fruitMap.has(startPos - k))
            return fruitMap.get(startPos - k)
    }



    for (let i = 0; i < fruits.length;i++) {
        let sum = 0
        // let pointer = i
        let counter = 0
        while (counter < k && counter < fruits.length) {
            sum += fruits[i][1]
            counter++
        }
        if (fruits[i][0] >= startPos - k && fruits[i][0] < startPos + k) {
            if (sum > max)
                max = sum
        }
    }
    return max



    // console.log(dp(0, startPos, 0, k, fruitMap))


};

maxTotalFruits([[2,8],[6,3],[8,6]], 5, 4)