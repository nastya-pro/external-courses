function everyAnalog(array, callback) {
    for (let i = 0; i < array.length - 1; i++) {
        if (callback(array[i], i, array)) {
            return true;
        }
    }
    return false;
}

module.exports = everyAnalog;
