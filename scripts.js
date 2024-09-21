let displayValue = 0;
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

    // limit the display length to 12 characters
    if (displayValue > 999999999999) {
      return;
    }

    let keyValue = parseInt(e.target.textContent);

    if (hitEquals) {
      firstOperand = null;
      hitEquals = false;
    }
    
    displayValue = displayValue * 10 + keyValue;
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
      displayValue = 0;
    } else {
      secondOperand = displayValue;
      result = operate(firstOperation, firstOperand, secondOperand);
      firstOperand = result;
      display.textContent = result;
      displayValue = 0;
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
    displayValue = 0;
    firstOperation = null;
    secondOperand = null;
    hitEquals = true;
  } else {
    //displayValue = 0;
  }
})

clearButton.addEventListener('click', () => {
  displayValue = 0;
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
  return b == 0 ? `Nooooooope` : (a / b);
}