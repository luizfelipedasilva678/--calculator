import {Calculator} from './calculator.js';

(function (){
    let input = document.getElementById('expression');
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
        let ex = input.value.split('+');
        console.log(ex)
    }
    
    document.addEventListener('click', function (e) {

        if(e.target.className === 'rectangle') {
            if(e.target.innerHTML === '=') {
                result();
            } else if (e.target.innerHTML === '«') {
                deleteDisplay();
            } else if(e.target.innerHTML === 'C') {
                clearDisplay();
            } else {
                createExpression(e)
            }                    
        }
    })
})();