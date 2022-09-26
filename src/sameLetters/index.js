/**
 * return a Map of the unique letters and arrays of words that are made up of those letters
 * @param {array} words An array  of words
 */
function sameLetters(words) {
    let results = new Map()

    words.forEach((word) => {
        word.toLowerCase()
        let distinctLetters = Array.from(new Set(word.split("")))
            .sort()
            .join("")
        if (results.has(distinctLetters)) {
            results.get(distinctLetters).push(word)
        } else {
            results.set(distinctLetters, [word])
        }
    })
    return results
}

module.exports = sameLetters;
