function calcRepeatEl(string) {
    let repeatElement = {};
    for (let i = 0; i < string.length; i++) {
        repeatElement[string[i]] = (repeatElement[string[i]] || 0) + 1;
    }

    for (const repeatElementKey in repeatElement) {
        if (repeatElement.hasOwnProperty(repeatElementKey)) {
            console.log(repeatElementKey, repeatElement[repeatElementKey]);
        }
    }
    return undefined;
}

module.exports = calcRepeatEl;
