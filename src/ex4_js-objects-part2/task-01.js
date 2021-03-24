function getValue(property, object) {
    return !object.hasOwnProperty(property) ? object[property] : undefined;
}

module.exports = getValue;
