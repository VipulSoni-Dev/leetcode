/**
 * @param {number[]} cards
 * @return {boolean}
 */

function permute(nums) {
    const result = [];

    function backtrack(start) {
        if (start === nums.length) {
            result.push([...nums]); // copy only when complete
            return;
        }
        for (let i = start; i < nums.length; i++) {
            [nums[start], nums[i]] = [nums[i], nums[start]]; // swap
            backtrack(start + 1);
            [nums[start], nums[i]] = [nums[i], nums[start]]; // backtrack (swap back)
        }
    }

    backtrack(0);
    return result;
}

function solve(cards) {

    if (cards.length === 1) {
        if (Math.abs(cards[0] - 24) < 1e-6) {
            return true
        }
        else {
            return false
        }
    }

    else if (cards.length === 2) {
        const [a, b] = cards;
        return (solve([a + b]) || solve([a - b]) || solve([a * b]) || solve([a / b]))
    }
    else if (cards.length === 3) {

        const [a, b, c] = cards;

        return (solve([a + b, c,]) || solve([a - b, c]) || solve([a * b, c]) || solve([a / b, c]) ||
            solve([a, b + c]) || solve([a, b - c]) || solve([a, b * c]) || solve([a, b / c]))
    }
    else if (cards.length === 4) {
        const [a, b, c, d] = cards;

        return (solve([a + b, c, d]) || solve([a - b, c, d]) || solve([a * b, c, d]) || solve([a / b, c, d]) ||
            solve([a, b + c, d]) || solve([a, b - c, d]) || solve([a, b * c, d]) || solve([a, b / c, d]) ||
            solve([a, b, c + d]) || solve([a, b, c - d]) || solve([a, b, c * d]) || solve([a, b, c / d]))
    }

}

var judgePoint24 = function (cards) {

    cards = permute(cards)
    for (let arr of cards) {
        if (solve(arr)) return true
    }
    return false
};

console.log(judgePoint24([1, 9, 1, 2]))