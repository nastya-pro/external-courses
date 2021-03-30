function getToLowerCamelCase(string) {
    let result = string.split(" ")
        .map(word => word[0].toUpperCase() + word.slice(1, word.length).toLowerCase())
        .join("");
    return result[0].toLowerCase() + result.slice(1, result.length);
}

module.exports = getToLowerCamelCase;
