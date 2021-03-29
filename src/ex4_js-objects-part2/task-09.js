function createString(firstString, secondString, number) {
    let arr = firstString.split(" ");
    arr.splice(number + 1, 0, secondString);
    return arr.join(" ");
}

module.exports = createString;
