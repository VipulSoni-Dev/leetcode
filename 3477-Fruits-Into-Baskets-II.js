var numOfUnplacedFruits = function(fruits, baskets) {

    fruits.sort()
    baskets.sort()
    let count = 0
    for(let i=fruits.length-1;i > 0;i--){
        if(fruits[i]>=baskets[i+count]){
            count++
        }else break
    }

    return count
    
};
numOfUnplacedFruits([3,6,1],[6,4,7])

