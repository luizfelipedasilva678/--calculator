export class Calculator {
    constructor (...numbers) {
        this.numbers = numbers;
    }

    sum() {
        let sum = 0;
        for(let value of this.numbers) {
            sum += value;
        }
        return sum;
    }

}

