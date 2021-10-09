let expression = "";
let input = document.getElementById('val');

const calculator = {
    displayValue: '0',
    firstOperand: null,
    waitingForSecondOperand: false,
    operator: null,
};

function updateDisplay() {
    input.value = calculator.displayValue;
    let clearVal = calculator.displayValue === "0" && calculator.firstOperand === null ? 'AC': 'C';
    document.getElementById('clear').innerHTML = clearVal;
}

updateDisplay();


function endsWithAny(suffixes, string) {
    return suffixes.some(function (suffix) {
        return string.endsWith(suffix);
    });
}

function calculate() {
    if (calculator.firstOperand === null) {
        calculator.firstOperand = calculator.displayValue;
    }
    let result = eval(calculator.firstOperand + calculator.operator + calculator.displayValue);
    calculator.firstOperand = Number.isInteger(result) ? result.toString() : result.toFixed(8);
    calculator.operator = null;
    calculator.displayValue = calculator.firstOperand;
    calculator.waitingForSecondOperand = false;
    updateDisplay();
    console.log(calculator);
}

function negate() {
    calculator.displayValue = (calculator.displayValue * -1).toString();
    updateDisplay();
    console.log(calculator);
}

function decimal() {
    calculator.displayValue += ".";
    updateDisplay();
    console.log(calculator);
}

function percent() {
    calculator.displayValue = (calculator.displayValue / 100).toString();
    updateDisplay();
    console.log(calculator);
}

function calc(op) {

    if (calculator.operator && calculator.waitingForSecondOperand && calculator.displayValue !== '' && calculator.firstOperand !== null) {
        calculate();
    }

    if (calculator.firstOperand === null) {
        calculator.firstOperand = calculator.displayValue;
    }

    calculator.waitingForSecondOperand = true;
    calculator.displayValue = "";

    switch (op) {
        case "+":
            calculator.operator = "+";
            break;
        case "-":
            calculator.operator = "-";
            break;
        case "/":
            calculator.operator = "/";
            break;
        case "*":
            calculator.operator = "*";
            break;
    }
    console.log(calculator);
}

function display(i) {
    if (calculator.displayValue === '0')
        calculator.displayValue = i;
    else 
        calculator.displayValue += i;
    updateDisplay();
    console.log(calculator);
}

function clr() {
    calculator.displayValue = "0";
    calculator.firstOperand = null;
    calculator.waitingForSecondOperand = false;
    calculator.operator = null;
    updateDisplay();
    console.log(calculator);
}