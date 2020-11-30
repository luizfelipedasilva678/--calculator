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

    function equals(value) {
        return value === '0' || value === '1' || value === '2' || value === '2' || value === '3' || value === '4' || value === '5' 
        || value === '6' || value === '7' || value === '8' || value === '9' || value === '+' 
        || value === '-' || value === '*' || value === '/' || value === '(' ||value === ')'
    }

    function result() {
        let arrayExpression = input.value.split("");
        let filtredExpression = arrayExpression.filter(equals).join("");   
        let result = eval(filtredExpression);
        
        if(isNaN(result)) {
            alert("The answer is NaN");
        } else {
            input.value = result;
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
        }
    })
})();

