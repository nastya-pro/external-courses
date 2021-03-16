function checkDataType(variable) {
    if (typeof variable === 'string') {
        return 'string';
    }
    if (typeof variable === 'number') {
        return isNaN(variable) ? undefined : 'number';
    }
    return undefined;
}

module.exports = checkDataType