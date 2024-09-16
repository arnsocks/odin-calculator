let displayValue = 0;
let firstOperand = null;
let firstOperation = null;
let secondOperand = null;
let result = null;

const display = document.querySelector("#output");

const operationButtons = Array.from(document.querySelectorAll('.operation'));
const operandButtons = Array.from(document.querySelectorAll('.operand'));
const clearButton = document.querySelector('#clear');
const equalsButton = document.querySelector('#equals');

for (button of operandButtons) {
  button.addEventListener("click", (e) => {
    console.log(`You clicked the ${e.target.textContent} button`);
    displayValue = displayValue * 10 + parseInt(e.target.textContent);
    display.textContent = displayValue;
  })
}

for (button of operationButtons) {
  button.addEventListener("click", (e) => {
    console.log(`You clicked the ${e.target.textContent} button`);

    if (!firstOperand) {
      firstOperand = displayValue;
      firstOperation = e.target.id;
      displayValue = 0;
    } else {
      secondOperand = displayValue;
      result = operate(firstOperation, firstOperand, secondOperand);
      firstOperand = result;
      display.textContent = result;
      displayValue = 0;
      firstOperation = null;
      secondOperand = null;

    }
    if (e.target.id != 'equals') {
      firstOperation = e.target.id;
      console.log("You didn't click equals");
    }
  })
}

clearButton.addEventListener('click', () => {
  displayValue = 0;
  firstOperand = null;
  firstOperation = null;
  secondOperand = null;
  result = null;
  display.textContent = displayValue;
})

const operate = function(op, a, b) {
  switch(true) {
    case (op === 'add'):
      console.log(`We are adding.`);
      return add(a, b);
    case (op === 'subtract'):
      console.log('We are subtracting.');
      return subtract(a,b);
    case (op === 'multiply'):
      console.log('We are multiplying');
      return multiply(a,b);
    case (op === 'divide'):
      console.log("We are dividing");
      return divide(a,b);
    default:
      //console.log("I do not recognize that operation");
      return result;
  }
}

const add = function(a,b) {
  return (a + b);
}

const subtract = function(a,b) {
  return (a - b);
}

const multiply = function(a,b) {
  return (a * b);
}

const divide = function(a,b) {
  return b == 0 ? `I could never` : (a / b);
}