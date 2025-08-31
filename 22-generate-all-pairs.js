function isValid(pair) {
    let count = 0
    for (let char of pair) {
        if (char == '(') {
            count++
        } else {
            count--
        }

        if (count < 0) return false
    }
    return count === 0

}

let allPairs = []

function solve(pair, n, openCount, closeCount) {
    if (pair.length == n * 2) {
        allPairs.push(pair)
        return
    }
    if (openCount < n) {
        solve(pair+"(", n, openCount + 1, closeCount)
    }
    if (closeCount < openCount) {
        solve(pair+")", n, openCount, closeCount + 1)
    }
}

var generateParenthesis = function (n) {

    solve("", n, 0, 0)
    return allPairs
};
console.log(generateParenthesis(1))