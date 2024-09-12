let displayValue = 0;
let firstOperand = 0;
let firstOperation = null;
let secondOperand = 0;
let secondOperation = null;

const display = document.querySelector("#output");

let operationButtons = Array.from(document.querySelectorAll('.operation'));
let operandButtons = Array.from(document.querySelectorAll('.operand'));

console.table(operandButtons);

for (button of operandButtons) {
  button.addEventListener("click", (e) => {
    console.log(`You clicked the ${e.target.textContent} button`);
    displayValue = displayValue * 10 + parseInt(e.target.textContent);
    display.textContent = displayValue;
  })
}

for (button of operationButtons) {
  button.addEventListener("clicK", (e) => {
    console.log(`You clicked the ${e.target.textContent} button`);
  })
}


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
      console.log("I do not recognize that operation");
      return "Error: operation not recognized";
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
  return b == 0 ? `I can't do that, Dave` : (a / b);
}