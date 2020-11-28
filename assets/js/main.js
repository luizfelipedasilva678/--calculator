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

    function removeElementsOfArray(array, quantity) {
        for (var i = 0; i < quantity; i++) {
            array.shift();
        }
    }

    function execCalc (calculator,signal, number1, number2) {
        let res;
        if(signal === '+') {
            res = input.value = calculator.sum(number1, number2);
        } else if(signal === '-') {
            res = input.value = calculator.subtract(number1, number2);
        } else if(signal === '*') {
            res = input.value = calculator.multiply(number1, number2);
        } else if(signal === '/') {
            res = input.value = calculator.share(number1, number2);
        }
        return res;
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
            let res; 

            if(signals[0] !== '/' || signals[0] !== '*') {
                let newSignals = [];
                newSignals = orderArrayOfSignals(signals);
                res = execCalc(result,newSignals[0], v[1], v[v.length - 1]);
                
                removeElementsOfArray(newSignals, 1);
                while(newSignals.length > 0) {
                    newSignals.forEach(function(value) {
                        res = execCalc(result,value, res, v[0]);
                        removeElementsOfArray(v,1);
                        removeElementsOfArray(newSignals,1);
                    })
                }

            } else {
                
                res = execCalc(result,signals[0], v[0], v[1]);
                removeElementsOfArray(v, 2);
                removeElementsOfArray(signals, 1);
                while(signals.length > 0) {
                    signals.forEach(function(value) {
                        if(v.length > 0) {
                            res = execCalc(result,value, res, v[0]);
                            removeElementsOfArray(v,1);
                            removeElementsOfArray(signals,1);
                        }                
                    })
                }
            }

            input.value = res;
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