export class Calculator {
    sum(...numbers) {
        let total = numbers[0];
        for(let i = 1; i < numbers.length; i++) {
            total += numbers[i];
        }
        return total;
    }

    subtract(...numbers) {
        let total = numbers[0];
        for(let i = 1; i < numbers.length; i++) {
            total -= numbers[i];
        }
        return total;
    }

    multiply(...numbers) {
        let total = numbers[0];
        for(let i = 1; i < numbers.length; i++) {
            total *= numbers[i];
        }
        return total;
    }

    share(...numbers) {
        let total = numbers[0];
        for(let i = 1; i < numbers.length; i++) {
            total /= numbers[i];
        }
        return total;
    }
    
}

