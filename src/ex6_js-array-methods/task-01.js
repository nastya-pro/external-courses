function sliceAnalog(array, begin, end) {
    let newArray = [];
    let beginValue = begin >= 0 ? begin : array.length + begin;
    let endValue = end >= 0 ? end : array.length + end;
    if (begin === undefined && end === undefined) {
        array.forEach((item, index) => {
            newArray[index] = item;
        });
    } else if (end === undefined) {
        array.forEach((item, index) => {
            if (index >= beginValue && index < array.length) {
                newArray.push(item);
            }
        });
    } else {
        array.forEach((item, index) => {
            if (index >= beginValue && index < endValue) {
                newArray.push(item);
            }
        });
    }

    return newArray;
}

module.exports = sliceAnalog;
