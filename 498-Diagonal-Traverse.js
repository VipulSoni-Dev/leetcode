/**
 * @param {number[][]} mat
 * @return {number[]}
 */
var findDiagonalOrder = function (mat) {
    let res = []
    let r = 0;
    let c = 0;
    let m = mat.length
    let n = mat[0].length
    let flipDirection = true
    while (r < m && c < n) {
        res.push(mat[r][c])
        let newR = r
        let newC = c
        if (flipDirection) {
            newR--
            newC++
        } else {
            newR++
            newC--
        }

        if ((newR >= 0 && newR < m) && (newC >= 0 && newC < n)) {
            r = newR
            c = newC
        } else {

            if (flipDirection) {
                if (c < n - 1) {
                    c++
                } else {
                    r++
                }
            } else {
                if (r < m - 1) {
                    r++
                } else {
                    c++
                }
            }
            flipDirection = !flipDirection
        }
    }
    return res
};

console.log(findDiagonalOrder([[1, 2, 3], [4, 5, 6], [7, 8, 9]]));