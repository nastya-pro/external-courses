function calcSum(num1, num2) {
    let sum = num1 + num2;
    return (Math.ceil(sum * 1000)) / 1000;
}

module.exports = calcSum;
