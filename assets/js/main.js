import {Calculator} from './calculator.js';

(function (){
    let input = document.getElementById('expression');
    let signal;
    let signals = [];
    let expression = []; 

    function deleteDisplay() {
        let newExpression = expression.slice(0, expression.length - 1);
        expression = newExpression;
        input.value = expression.join('');
    }

    function clearDisplay() {
        while(expression.length) {
            expression.pop();
        }
        input.value = '';
    }

    function createExpression(e) {
        expression.push(e.target.innerHTML)
        input.value = expression.join('');
    }

    function result() {
        let ex = input.value.split(/\+|\-|\*|\//);
        console.log(ex)
        let v = typeTransform(ex);
        let result = new Calculator(v);
        
        if(signal === '+') {
            input.value = result.sum();
        } else if(signal === '-') {
            input.value = result.subtract();
        } else if(signal === '*') {
            input.value = result.multiply();
        } else if(signal === '/') {
            input.value = result.share();
        }
    }

    function typeTransform(strings) {
        let numbers = [];
        strings.forEach(function(value) {
            numbers.push(Number(value));
        })
        return numbers;
    }
    
    document.addEventListener('click', function (e) {
        let target = e.target;

        if(target.className === 'rectangle') {
    
            if(target.innerHTML === '=') {
                result();
            } else if (target.innerHTML === '«') {
                deleteDisplay();
            } else if(target.innerHTML === 'C') {
                clearDisplay();
            } else {
                createExpression(e)
            }  
            
            if (target.innerHTML === '-' || target.innerHTML === '+' || target.innerHTML === '/' || target.innerHTML === '*') {
                signal = target.innerHTML;
                signals.push(target.innerHTML);
                console.log(signal);
                console.log(signals);
            }
        }
    })
})();