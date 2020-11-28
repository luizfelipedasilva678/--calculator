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

    function clearArray(array) {
        while(array.length) {
            array.pop();
        }
    }

    function createExpression(e) {
        expression.push(e.target.innerHTML)
        input.value = expression.join('');
    }

    function allTheSameOrDifferent(array) {
        var filtered = array.filter(function(elem, index, arr) {
            return arr.indexOf(elem) == index;
        });
        return filtered.length === 1 ? true : false;
    }

    function result() {
        let ex = input.value.split(/\+|\-|\*|\//);
        let v = typeTransform(ex);
        let result = new Calculator();
        
        if( allTheSameOrDifferent(signals) ) {
            if(signal === '+') {
                input.value = result.sum(...v);
                clearArray(signals);
            } else if(signal === '-') {
                input.value = result.subtract(...v);
                clearArray(signals);
            } else if(signal === '*') {
                input.value = result.multiply(...v);
                clearArray(signals);
            } else if(signal === '/') {
                input.value = result.share(...v);
                clearArray(signals);
            }
        } else {
           let firstNumber = expression.split("");
           console.log(firstNumber);
           let regexWithTwoOperators = /(-)?([0-9])+(\+|\-)(-)?([0-9])+(\*|\/)(-)?([0-9])+/;
           
            if(input.value.match(regexWithTwoOperators)) {
                if(signals[0] === '+' && signals[1] === '*') {
                    input.value = v[0] + (v[1] * v[2]);
                    clearArray(signals);
                } else if(signals[0] === '+' && signals[1] === '/') {
                    input.value = v[0] + v[1] / v[2];
                    clearArray(signals);
                } else if(signals[0] === '-' && signals[1] === '*') {
                    input.value = v[0] - v[1] * v[2];
                    clearArray(signals);
                } else if(signals[0] === '-' && signals[1] === '/') {
                    input.value = v[0] - v[1] / v[2];
                    clearArray(signals);
                }
            }

            clearArray(signals);
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
            }
        }
    })
})();

/*
function orderArrayOfSignals (array) {
    let newArray = array;
    newArray.forEach(function (elem, index) {
        if(elem === '*' || elem === '/') {
            newArray.splice(index, 1);  
            newArray.splice(0, 0, elem);
        }
    }) 
    return newArray;
}
*/