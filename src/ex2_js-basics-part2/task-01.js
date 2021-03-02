function checkDataType(variable) {
    if (typeof variable === 'string'){
        return 'string';
    } else if (typeof variable === 'number'){
        if (isNaN(variable)){
            return undefined;
        }
        return 'number';
    }
    return undefined;
}

module.exports = checkDataType