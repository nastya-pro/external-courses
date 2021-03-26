function parityOfArrayNumbers(array) {
    let numberArray = array.filter(item => typeof item === "number");
    let zero = numberArray.filter(item => item === 0).length;
    let even = numberArray.filter(item => (item !== 0) && (item % 2 === 0)).length;
    let odd = numberArray.filter(item => item % 2 !== 0).length;

    return [even, odd, zero]
}

module.exports = parityOfArrayNumbers