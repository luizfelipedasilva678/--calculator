export class Calculator {
    constructor (numbers) {
        this.numbers = numbers;
    }

    sum() {
        let total = this.numbers[0];
        for(let i = 1; i < this.numbers.length; i++) {
            total += this.numbers[i];
        }
        return total;
    }

    subtract() {
        let total = this.numbers[0];
        for(let i = 1; i < this.numbers.length; i++) {
            total -= this.numbers[i];
        }
        return total;
    }

    multiply() {
        let total = this.numbers[0];
        for(let i = 1; i < this.numbers.length; i++) {
            total *= this.numbers[i];
        }
        return total;
    }

    share() {
        let total = this.numbers[0];
        for(let i = 1; i < this.numbers.length; i++) {
            total /= this.numbers[i];
        }
        return total;
    }
    
}

