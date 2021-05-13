function everyAnalog(array, callback) {
    let counter = 0;
    for (let i = 0; i < array.length; i++) {
        if (callback(array[i], i, array)) {
            counter++;
        }
    }
    return counter === array.length;
}

module.exports = everyAnalog;
