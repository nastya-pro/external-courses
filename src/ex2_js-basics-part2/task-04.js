function compareArrayElements(array) {
    return array.length === 0 || array.every (item => item === array[0])
}

module.exports = compareArrayElements