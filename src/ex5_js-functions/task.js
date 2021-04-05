function Calculator() {
    this.value = 0;

    this.add = (num) => {
        this.value += num || 0;
        return this.add;
    };

    this.subtract = (num) => {
        this.value -= num || 0;
        return this.subtract;
    };

    this.divide = (num) => {
        if (num) this.value /= num;
        return this.divide;
    };

    this.multiply = (num) => {
        this.value *= num || 1;
        return this.multiply;
    };

    this.getResult = () => {
        return this.value;
    };

    this.reset = () => {
        this.value = 0;
    };
}

module.exports = new Calculator();
