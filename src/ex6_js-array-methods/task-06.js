function reduceAnalog(array, callback, initialValue) {
    let index = 0;
    let previousValue = initialValue;

    if (initialValue === undefined) {
        previousValue = array[0];
        index = 1;
    }
    for (let i = index; i < array.length; i++) {
        previousValue = callback(previousValue, array[i], i, array);
    }
    return previousValue;
}

module.exports = reduceAnalog;
