class GuessingGame {
    constructor() {}

    setRange(min, max) {
        this.min = min;
        this.max = max;
    }

    guess() {
        this.currentNumber = Math.ceil((this.min + (this.max - this.min)/2));
        return this.currentNumber
    }

    lower() {
        this.max = this.currentNumber;
    }

    greater() {
        this.min = this.currentNumber;
    }
}

module.exports = GuessingGame;
