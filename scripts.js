let displayValue = '0';
let firstOperand = null;
let firstOperation = null;
let secondOperand = null;
let result = null;
let hitEquals = false;

const DISPLAY_LENGTH = 12;

const display = document.querySelector("#output");
display.textContent = displayValue;

const operationButtons = Array.from(document.querySelectorAll('.operation'));
const operandButtons = Array.from(document.querySelectorAll('.operand'));
const clearButton = document.querySelector('#clear');
const equalsButton = document.querySelector('#equals');
const signButton = document.querySelector("#sign");

for (button of operandButtons) {
  button.addEventListener("click", (e) => {
    console.log(`You clicked the ${e.target.textContent} button`);

    // limit the displayValue length to fit in the display window
    if (displayValue >= 10 ** (DISPLAY_LENGTH - 1)) {
      return;
    }

    // don't add a . if there's already a .
    if (displayValue % 1 != 0 && e.target.textContent == ".") {
      return;
    }

    // get rid of the leading 0;
    if (displayValue == "0") {
      displayValue = "";
    }

    // Clear the first Operand if the last key pressed was "="
    if (hitEquals) {
      firstOperand = null;
      hitEquals = false;
    }
  
    displayValue = displayValue.concat(e.target.textContent);
    display.textContent = displayValue;
  })
}

for (button of operationButtons) {
  button.addEventListener("click", (e) => {
    console.log(`You clicked the ${e.target.textContent} button`);
    hitEquals = false;
    
    if (!firstOperand) {
      firstOperand = displayValue;
      firstOperation = e.target.id;
      displayValue = '0';
    } else {
      secondOperand = displayValue;
      result = operate(firstOperation, firstOperand, secondOperand);
      firstOperand = result;
      display.textContent = result;
      displayValue = '0';
      secondOperand = null;
      firstOperation = e.target.id;
    }
  })
}

equalsButton.addEventListener('click', () => {
  if (firstOperation) {
    secondOperand = displayValue;
    result = operate(firstOperation, firstOperand, secondOperand);
    firstOperand = result;
    display.textContent = result;
    displayValue = '0';
    firstOperation = null;
    secondOperand = null;
    hitEquals = true;
  } else {
    //displayValue = 0;
  }
})

clearButton.addEventListener('click', () => {
  displayValue = '0';
  firstOperand = null;
  firstOperation = null;
  secondOperand = null;
  result = null;
  display.textContent = displayValue;
})

signButton.addEventListener('click', () => {
  displayValue *= -1;
  display.textContent = displayValue;
})

const operate = function(op, a, b) {
  switch(true) {
    case (op === 'add'):
      return add(a, b);
    case (op === 'subtract'):
      return subtract(a,b);
    case (op === 'multiply'):
      return multiply(a,b);
    case (op === 'divide'):
      return divide(a,b);
    default:
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
  return b == 0 ? `Nooooooope` : (a / b);
}