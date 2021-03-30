function Calculator() {
    this.value = 0;
    this.add = function (num) {
        this.value += num || 0;
        return this.add;
    }.bind(this);
    this.subtract = function (num) {
        this.value -= num || 0;
        return this.subtract;
    }.bind(this);
    this.divide = function (num) {
        if(num && num !== 0) this.value /= num;
        return this.divide;
    }.bind(this);
    this.multiply = function (num) {
        this.value *= num || 1;
        return this.multiply;
    }.bind(this);
    this.getResult = function () {
        return this.value;
    }.bind(this);
    this.reset = function () {
        this.value = 0;
    }.bind(this);
}

module.exports = new Calculator();
