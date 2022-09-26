function intersection(a, b) {
    let iMap = new Map()
    let resultSet = new Set()
    a.forEach((e) => {
        iMap.set(e)
    })

    b.forEach((e) => {
        if (iMap.has(e)) {
            resultSet.add(e)
        }
    })
    const result = [...resultSet]
    return result
}

module.exports = intersection;
