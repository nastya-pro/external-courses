function getString(string) {
    if (string[0] === " " && string[string.length - 1] === " ") {
        return string.slice(1, length - 1);
    }
    return string;
}

module.exports = getString;
