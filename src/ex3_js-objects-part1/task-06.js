function copyProperty(value) {
    if (Array.isArray(value)) {
        return value.map(item => copyProperty(item))
    }
    if (typeof value === 'object') {
        return deepCloneObject(value)
    }
    return value
}

function deepCloneObject(object) {
    let copyObject = {};
    for (let key in object) {
        if (object.hasOwnProperty(key)) {
            copyObject[key] = copyProperty(object[key])
        }
    }
    return copyObject;
}

module.exports = deepCloneObject