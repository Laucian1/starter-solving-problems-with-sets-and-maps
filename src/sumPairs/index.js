/**
 * Return an array of pairs of numbers that sum to N
 * @param {Array} A an array of numbers
 * @param {Number} N an integer value
 */
function sumPairs(A, N) {
    let numbers = new Map()
    let solution = new Map()

    A.forEach((e) => {
        numbers.set(e)
    })
    
    A.forEach((e) => {
        let diff = N - e
        if (diff !== e) {
            if (numbers.has(diff)) {
                solution.set(Math.min(e, diff), Math.max(e, diff))
            }
        }
    })

    return Array.from(solution)
}

module.exports = sumPairs;
