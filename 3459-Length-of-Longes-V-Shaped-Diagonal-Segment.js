//3459. Length of Longest V-Shaped Diagonal Segment
const Direction = {
    TOP_RIGHT: 1,
    DOWN_LEFT: 2,
    RIGHT_DOWN: 3,
    LEFT_TOP: 4,
}

function isValidNext(curr, prev) {
    if ((curr !== 2 && curr !== 0)) return false
    return curr !== prev
}

function getVShapeDiagonalLength(grid, m, n, startR, startC, preElement, direction, turnTaken) {

    if (startR < 0 || startR > m || startC < 0 || startC > n ) return 0

    //move diagonaly
    if (direction === Direction.TOP_RIGHT) {
        let rightDown = 0
        let topRight = 0
        if (!turnTaken && (checkWithinBoundary(startR + 1, startC - 1, m, n))) {
            if (isValidNext(grid[startR + 1][startC - 1], preElement))
                rightDown = getVShapeDiagonalLength(grid, m, n, startR + 1, startC - 1, grid[startR + 1][startC - 1], Direction.RIGHT_DOWN, true) + 1

        }
        if (checkWithinBoundary(startR + 1, startC + 1, m, n)) {
            if (isValidNext(grid[startR + 1][startC + 1], preElement))
                topRight = getVShapeDiagonalLength(grid, m, n, startR + 1, startC + 1, grid[startR + 1][startC + 1], direction, turnTaken) + 1
        }
        return Math.max(rightDown, topRight)
    }
    else if (direction === Direction.DOWN_LEFT) {
        let leftTop = 0
        let downLeft = 0
        if (!turnTaken && (checkWithinBoundary(startR - 1, startC + 1, m, n))) {
            if (isValidNext(grid[startR - 1][startC + 1], preElement))
                leftTop = getVShapeDiagonalLength(grid, m, n, startR - 1, startC + 1, grid[startR - 1][startC + 1], Direction.LEFT_TOP, true) + 1
        }
        if (checkWithinBoundary(startR - 1, startC - 1, m, n)) {
            if (isValidNext(grid[startR - 1][startC - 1], preElement))
                downLeft = getVShapeDiagonalLength(grid, m, n, startR - 1, startC - 1, grid[startR - 1][startC - 1], direction, turnTaken) + 1
        }
        return Math.max(leftTop, downLeft)

    }
    else if (direction === Direction.RIGHT_DOWN) {
        let downLeft = 0
        let rightDown = 0
        if (!turnTaken && (checkWithinBoundary(startR - 1, startC - 1, m, n))) {
            if (isValidNext(grid[startR - 1][startC - 1], preElement))
                downLeft = getVShapeDiagonalLength(grid, m, n, startR - 1, startC - 1, grid[startR - 1][startC - 1], Direction.DOWN_LEFT, true) + 1
        }
        if (checkWithinBoundary(startR + 1, startC - 1, m, n)) {
            if (isValidNext(grid[startR + 1][startC - 1], preElement))
                rightDown = getVShapeDiagonalLength(grid, m, n, startR + 1, startC - 1, grid[startR + 1][startC - 1], direction, turnTaken) + 1
        }
        return Math.max(downLeft, rightDown)
    }
    else if (direction === Direction.LEFT_TOP) {
        let topRight = 0
        let leftTop = 0
        if (!turnTaken && (checkWithinBoundary(startR + 1, startC + 1, m, n))) {
            if (isValidNext(grid[startR + 1][startC + 1], preElement))
                topRight = getVShapeDiagonalLength(grid, m, n, startR + 1, startC + 1, grid[startR + 1][startC + 1], Direction.TOP_RIGHT, true) + 1
        }
        if (checkWithinBoundary(startR - 1, startC + 1, m, n)) {
            if (isValidNext(grid[startR - 1][startC + 1], preElement))
                leftTop = getVShapeDiagonalLength(grid, m, n, startR - 1, startC + 1, grid[startR - 1][startC + 1], direction, turnTaken) + 1
        }
        return Math.max(topRight, leftTop)
    }
}
function checkWithinBoundary(r, c, m, n) {
    return (r >= 0 && r < m && c >= 0 && c < n)
}
/**
 * @param {number[][]} grid
 * @return {number}
 */
var lenOfVDiagonal = function (grid) {

    let m = grid.length // row
    let n = grid[0].length // column
    let max = 0


    for (let r = 0; r < m; r++) {
        for (let c = 0; c < n; c++) {

            let topRight = 0
            let rightDown = 0
            let downLeft = 0
            let leftTop = 0

            if (grid[r][c] == 1) {
                topRight = rightDown = downLeft = leftTop = 1
                if (checkWithinBoundary(r - 1, c - 1, m, n) && grid[r - 1][c - 1] == 2) {
                    leftTop += getVShapeDiagonalLength(grid, m, n, r - 1, c - 1, grid[r - 1][c - 1], Direction.DOWN_LEFT, false) + 1
                }
                if (checkWithinBoundary(r - 1, c + 1, m, n) && grid[r - 1][c + 1] == 2) {
                    topRight += getVShapeDiagonalLength(grid, m, n, r - 1, c + 1, grid[r - 1][c + 1], Direction.LEFT_TOP, false) + 1
                }
                if (checkWithinBoundary(r + 1, c - 1, m, n) && grid[r + 1][c - 1] == 2) {
                    downLeft += getVShapeDiagonalLength(grid, m, n, r + 1, c - 1, grid[r + 1][c - 1], Direction.RIGHT_DOWN, false) + 1
                }
                if (checkWithinBoundary(r + 1, c + 1, m, n) && grid[r + 1][c + 1] == 2) {
                    rightDown += getVShapeDiagonalLength(grid, m, n, r + 1, c + 1, grid[r + 1][c + 1], Direction.TOP_RIGHT, false) + 1
                }
                max = Math.max(max, topRight, rightDown, downLeft, leftTop)
            }

        }
    }
    return max
};
