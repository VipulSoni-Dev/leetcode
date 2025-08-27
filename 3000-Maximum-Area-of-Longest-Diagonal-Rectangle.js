/**
 * @param {number[][]} dimensions
 * @return {number}
 */
var areaOfMaxDiagonal = function (dimensions) {
    let diagonalLength = Math.sqrt(dimensions[0][0] * dimensions[0][0] +
        dimensions[0][1] * dimensions[0][1])
    let maxArea = dimensions[0][0] * dimensions[0][1]
    for (let i = 1; i < dimensions.length; i++) {
        let currentDLength = Math.sqrt(dimensions[i][0] * dimensions[i][0] +
            dimensions[i][1] * dimensions[i][1])
        let currentArea = (dimensions[i][0] * dimensions[i][1])

        if (diagonalLength <= currentDLength) {
            if ((maxArea > currentArea) && diagonalLength == currentDLength) {
                continue
            }
            maxArea = currentArea
            diagonalLength = currentDLength
        }
    }
    return maxArea
};


console.log(areaOfMaxDiagonal([[6, 5], [8, 6], [2, 10], [8, 1], [9, 2], [3, 5], [3, 5]]));