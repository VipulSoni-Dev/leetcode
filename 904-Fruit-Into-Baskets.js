/**
 * @param {number[]} fruits
 * @return {number}
 */
var totalFruit = function (fruits) {
    let n = fruits.length

    let maxFruits = 0
    if (n <= 2) return n

    let b1 = fruits[0]
    let b2 = null
    let c1 =0, c2 = 0
    for (let i = 0; i < n; i++) {
        if (b2 == null && b1 != fruits[i]) {
            b2 = fruits[i]
        }

        if(b1 == fruits[i]) c1++
        if(b2 == fruits[i]) c2++
        
        if (maxFruits < (c1+c2)) {
            maxFruits = (c1+c2)
        }
        if(fruits[i] != b1 && fruits[i] != b2 ){
            b1 = fruits[i-1] == b1 ? b1 : b2
            b2= null
            c1 = 1;            
            c2 = 0
            while(fruits[i-1] == b1){
                i--;
            }
        }
    }
    console.log(maxFruits)
    }


totalFruit([0,1,2,2])