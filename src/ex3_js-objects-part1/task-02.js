function displayAnObject(object) {
    Object.getOwnPropertyNames(object).forEach(item => console.log(`${item} => ${object[item]}`))
    return undefined;
}

module.exports = displayAnObject