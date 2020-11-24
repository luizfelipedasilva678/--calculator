import {Calculator} from './calculator.js';

(function (){
    let input = document.getElementById('expression');
    let expression = []; 
    
    document.addEventListener('click', function (e) {

        if(e.target.className === 'rectangle') {
            if(e.target.innerHTML === '=') {
                console.log(input.value);
            } else {
                expression.push(e.target.innerHTML)
                input.value = expression.join('');
            }
            

            if(e.target.innerHTML === 'C') {
                while(expression.length) {
                    expression.pop();
                }
                input.value = '';
            }

            if(e.target.innerHTML === '«') {    
               expression.pop();
               input.value = expression.join('');
            }

        }
    })
})();