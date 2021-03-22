function checkAndAddPropertyInObject(string, object) {
    if (!object.hasOwnProperty(string)) {
        // eslint-disable-next-line no-param-reassign
        object[string] = 'new';
    }
    return object;
}

module.exports = checkAndAddPropertyInObject;
